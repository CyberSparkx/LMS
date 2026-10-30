# TESTING_AND_SECURITY.md — Verification Protocol

Run this protocol after every feature, and always before a release. Results are recorded in `FEATURES.md`.

## 1. Test pyramid

| Layer | Tool | What it covers | Target |
|---|---|---|---|
| Unit | Vitest | Pure logic: refund calculation, due dates, seat math, fee calculation, Zod schemas, permission helpers. | 90%+ on `config`, `features` logic, `lib`. |
| Component | Vitest + React Testing Library | Forms, tables, restriction screen, payment status badges. | Key interactive components. |
| Integration | Vitest + MongoDB Memory Server | API route handlers and server actions with a real database engine. | Every API route. |
| End-to-end | Playwright | Login, booking flow, dashboard access, admin actions. | Critical paths, run on 3 viewports. |
| Accessibility | axe-core (in Playwright) | Automated WCAG checks on every page. | Zero critical violations. |
| Performance | Lighthouse CI | Homepage and course pages. | See PRODUCTION_STANDARDS.md section 5. |

Folder layout: `tests/unit`, `tests/integration`, `tests/e2e`. Test files end in `.test.ts` or `.test.tsx` (`.spec.ts` for Playwright).

## 2. Mandatory test cases

### Authentication and roles
- Anonymous user is redirected from `/dashboard` and `/admin`.
- Student gets 403 on every `/api/admin/*` endpoint.
- Admin gets 403 on student-only endpoints if they are not also a student record.
- Expired session is rejected.
- Five failed logins trigger rate limiting.
- Password reset token cannot be reused.

### Student data and documents
- Student cannot change personal fields via API (request with tampered body is rejected or ignored).
- Student cannot upload documents (all upload endpoints reject student role).
- Student can download only their own documents (try another student's document ID: expect 404 or 403).
- Document URLs expire; an old signed URL returns 403.

### Payments and access
- Student with a pending monthly fee gets 403 on lesson content API.
- Same student gets 403 when opening a lesson URL directly in the browser.
- After admin marks the month paid, access returns on the next request (no caching bug).
- Pass-out student with cleared dues retains access and is not assigned a new monthly payment.
- Duplicate offline payment for the same student and month is rejected.

### Booking and batches
- Booking with 1 seat left: 10 concurrent requests, exactly 1 succeeds, the rest get a "batch full" error.
- Booking is not confirmed without a verified webhook.
- Webhook with an invalid signature is rejected and logged.
- Webhook delivered twice does not double-confirm or double-charge.
- Client-supplied amount is ignored; server computes amount.
- Refund: booking on day 0 gives 50%, day 10 gives 50%, day 11 gives 0%.
- Disabled batch cannot receive bookings.

### Content and files
- Upload rejects wrong MIME type even if the extension is changed.
- Upload rejects files above the size limit.
- APK upload accepts only the expected package and valid APK structure.
- Unpublished lessons are hidden from students and their API returns 404.
- Deleting a lesson does not break the student progress records.

### Courses
- Archiving a course keeps enrollments and payment records intact.
- Inactive course does not appear on public courses page.

### UI and responsiveness
- No horizontal scroll at 360px, 768px, 1280px on every page.
- Mobile menu opens, closes, and traps focus correctly.
- Forms show field-level errors and do not lose input on error.

## 3. Security checklist

Mark each item Pass, Fail, or N/A. Any Fail blocks "Verified" status.

### Authentication
- [ ] Passwords hashed with bcrypt or argon2 (never plain, never MD5/SHA-only).
- [ ] Session cookies: `httpOnly`, `secure`, `sameSite=lax` or `strict`.
- [ ] Session expiry and rotation on login.
- [ ] Login errors are generic ("Invalid credentials").
- [ ] Rate limiting on login, forgot password, and reset endpoints.
- [ ] Account lockout or throttling after repeated failures.
- [ ] Admin accounts cannot be created through public registration.

### Authorization
- [ ] Every protected API route checks authentication and role on the server.
- [ ] Every object access checks ownership (student can only see own data).
- [ ] No reliance on hidden UI for security.
- [ ] Admin-only actions are audit logged.
- [ ] Middleware and server checks both present; server check is the authority.

### Input and output
- [ ] Zod validation on every API input and server action.
- [ ] Output encoding: no `dangerouslySetInnerHTML` with user data. If unavoidable, sanitize with DOMPurify.
- [ ] Mass assignment prevented (only allowed fields are written).
- [ ] MongoDB queries use typed parameters; no user input passed raw into `$where` or operator objects (prevent NoSQL injection).
- [ ] Error responses contain no stack traces or internal details.

### Files
- [ ] Upload type checked by content (magic bytes), not just extension.
- [ ] Upload size limits enforced server-side.
- [ ] Files stored outside public web root or in private storage bucket.
- [ ] Private documents served only through short-lived signed URLs after authorization.
- [ ] Uploaded file names are sanitized or replaced with generated IDs.
- [ ] APK checked for valid structure and version metadata before publishing.

### Payments
- [ ] Razorpay keys only on the server, except the public key ID.
- [ ] Webhook signature verified with the raw request body before parsing.
- [ ] Webhook handler is idempotent (stores processed event IDs).
- [ ] Amounts calculated on the server from configuration.
- [ ] No payment state changes based on the browser redirect.
- [ ] Payment and refund actions are audit logged.

### Transport and headers
- [ ] HTTPS enforced in production.
- [ ] Security headers set: Content-Security-Policy, X-Content-Type-Options, Referrer-Policy, Strict-Transport-Security, frame-ancestors (anti-clickjacking).
- [ ] CORS restricted to the app's own origin (except webhooks and the Android API if needed).
- [ ] CSRF protection on state-changing requests (SameSite cookies plus token or origin check).

### Secrets and configuration
- [ ] No secrets in git history (run a secret scanner such as Gitleaks).
- [ ] `.env` in `.gitignore`.
- [ ] Production and development secrets are different.
- [ ] Debug mode and verbose errors disabled in production.

### Dependencies
- [ ] `npm audit` shows no high or critical vulnerabilities (or each is documented with a mitigation).
- [ ] Dependabot enabled on GitHub.
- [ ] CodeQL scanning enabled in CI.
- [ ] Lock file committed.

### Data protection
- [ ] Student personal data (DOB, contact, address) visible only to the student and admin.
- [ ] Logs do not contain passwords, tokens, or signed URLs.
- [ ] Backups encrypted and access restricted.
- [ ] Data deletion process exists for student records on request.

### Android app (when integrated)
- [ ] App uses the same authorization rules as the web.
- [ ] Tokens stored in Android secure storage (Keystore-backed), not plain preferences.
- [ ] Certificate pinning considered for the API.

## 4. Verification run (after each feature)

1. Lint, type check, unit and integration tests: `npm run check` (agent must create this script if missing).
2. End-to-end tests for the feature's critical path.
3. Accessibility scan on changed pages.
4. Responsive screenshots at 360, 768, 1280 px, reviewed for layout breaks.
5. Security checklist items that the change touches.
6. Compare behaviour against the acceptance criteria in `FEATURES.md`, one line each, marked Pass or Fail.
7. Update the feature's status in `FEATURES.md` with date and result.

Report format the agent must output after a verification run:

```
Feature: F5.5 Restriction for overdue students
Unit/integration: 12 passed, 0 failed
E2E: 2 passed, 0 failed
Accessibility: 0 critical
Responsive: no overflow at 360/768/1280
Security items touched: Authorization (server check), Error responses
Acceptance criteria: 3/3 Pass
Status set to: Verified (2026-10-30)
```

## 5. Full application audit (monthly and before launch)

1. Run the full test suite and record totals.
2. Run `npm audit`, Gitleaks, and CodeQL. Record every finding and its disposition.
3. Walk through every row of `FEATURES.md` and re-verify statuses. Any regression sets the row to Broken.
4. Run the mandatory test cases in section 2 and confirm each still passes.
5. Run Lighthouse on homepage, courses, and course details (mobile profile).
6. Perform a manual role-play test: act as an anonymous visitor, a student with pending fees, a cleared student, a pass-out student, and an admin. Record what each can see and do.
7. Check the open questions in `FEATURES.md`. Any answered question must be reflected in the code and docs.
8. Write a short audit summary: date, overall status, open risks, and actions.

## 6. Signs the app is not working properly (agent must flag these)

- A feature marked Verified fails a test on rerun.
- A UI control exists for an action the student should not perform.
- Any protected endpoint returns data without a valid session.
- Any payment status changes without a webhook event in the log.
- Mock data is still used in a production build.
- Warnings about hydration, missing keys, or unhandled promises in the console.
- Layout overflow on mobile, or text below WCAG contrast.
- A business constant (5th day, 10 days, 50%, capacity 4) appears as a literal number outside the config file.

When any of these occur, set the affected feature to Broken and fix it before new work starts.
