# PRODUCTION_STANDARDS.md — Definition of "Production Grade"

A feature is not finished until it meets every applicable item below. Agents must check these before marking any feature as Built.

## 1. Code quality

- TypeScript strict mode passes with zero errors.
- No `any`, no `@ts-ignore` without a comment explaining why.
- ESLint passes with zero errors and no unexplained warnings.
- Prettier formatting applied.
- No dead code, commented-out code, or unused exports.
- Functions are small and single-purpose. Components do one thing.
- Shared logic lives in `features/` or `lib/`, not copied between pages.
- Business rules come from `config/business-rules.ts`, not hardcoded.

## 2. Architecture

- Server Components by default. `"use client"` only where interactivity requires it.
- Data access goes through `services/api` (frontend phase) or server-side modules (backend phase). UI components never call the database or third-party APIs directly.
- Mock and real data implement the same TypeScript interface.
- Every feature module exposes a small public API; internal files are not imported across features.

## 3. Error handling and resilience

- Every page has `loading.tsx`, `error.tsx`, and a useful `not-found.tsx` where relevant.
- API routes return consistent JSON errors: `{ error: { code, message } }` with correct HTTP status codes.
- No stack traces or internal messages shown to users or returned by APIs.
- Third-party calls (Razorpay, Resend, storage) have timeouts and handle failure gracefully.
- Operations that must not run twice (payments, bookings, refunds) are idempotent.

## 4. Logging and audit

- Structured logs with request ID, user ID (if logged in), and severity.
- Never log passwords, tokens, full card or bank data, or full document URLs.
- Audit log entries for: admin login, student create/edit, document upload/replace, payment mark-paid, access restore/restrict, refund processed, APK publish, course delete/archive.

## 5. Performance

- Images use `next/image` with width, height, and alt text.
- Fonts loaded with `next/font`.
- Course lists and admin tables are paginated.
- Database queries use indexes for common lookups (student ID, email, batch ID, payment month + student).
- Lighthouse on the public homepage: Performance and Best Practices at 90+ on mobile, Accessibility at 95+.
- GSAP animations use transform and opacity only, run once, and are disabled under `prefers-reduced-motion`.

## 6. Accessibility

- Semantic HTML (`header`, `nav`, `main`, `section`, `footer`).
- All interactive elements keyboard reachable with visible focus styles.
- Form fields have labels and accessible error messages.
- Color contrast meets WCAG AA (4.5:1 for body text).
- Images have meaningful alt text, decorative images have `alt=""`.

## 7. Responsive design

- Tested at 360px (small phone), 768px (tablet), 1280px (desktop).
- No horizontal scrolling on any page, including admin tables (use scroll containers inside cards).
- Touch targets at least 44px.
- Navigation collapses to a usable mobile menu.

## 8. SEO and public pages

- Each public page has a unique title, meta description, and Open Graph tags.
- `sitemap.xml` and `robots.txt` generated.
- Admin and student pages set `noindex`.
- Structured data (LocalBusiness / EducationalOrganization) on the homepage.

## 9. Security baseline (summary)

Full checklist in `TESTING_AND_SECURITY.md`. Highlights: server-side authorization on every protected route and API, validated input, hashed passwords, signed webhooks, private files behind signed URLs, rate limits on login and payment endpoints, no secrets in client code.

## 10. Data integrity

- Money in integer paise.
- Seat booking uses atomic operations (MongoDB transactions or conditional updates) so capacity is never exceeded.
- Deleting or archiving a course never deletes enrollments or payments.
- Migrations or schema changes are versioned and reversible.

## 11. Configuration and deployment

- App fails fast on missing environment variables.
- Separate environments: development, preview, production, each with its own database and Razorpay mode (test vs live).
- Production uses Razorpay live keys only in the production environment.
- Database backups enabled and restore tested at least once before launch.

## 12. Documentation

- README explains setup in under 10 steps.
- `.env.example` is complete.
- Public functions in `services/` and `lib/` have short doc comments.
- `FEATURES.md` is updated in the same change as the feature.

## 13. Definition of Done (checklist for every feature)

- [ ] Acceptance criteria in `FEATURES.md` met.
- [ ] Unit or integration tests added and passing.
- [ ] Role checks enforced on the server.
- [ ] Responsive checked at 360px, 768px, 1280px.
- [ ] Keyboard and screen-reader basics verified.
- [ ] No console errors or warnings.
- [ ] Lint, type check, and build pass.
- [ ] Feature status updated in `FEATURES.md`.
