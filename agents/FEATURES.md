# FEATURES.md — Live Feature Checklist

This is the living status board. Agents update it after every task.

## Status legend

| Status | Meaning |
|---|---|
| ⬜ Not started | No code yet. |
| 🟨 In progress | Being built. |
| 🟦 Built | Code complete, not yet tested. |
| 🟩 Tested | Automated tests pass and acceptance criteria are checked. |
| ✅ Verified | Tested plus security and production standards checked (see TESTING_AND_SECURITY.md). |
| ❌ Broken | Was working, now failing. Fix before any new work. |

Last full verification run: _not yet run_
Last updated: _fill in each time_

---

## Phase 1 — Foundation

| ID | Feature | Acceptance criteria | Status | Notes |
|---|---|---|---|---|
| F1.1 | Next.js + TS + Tailwind project | App runs locally, type check and lint pass, `.env.example` present. | ⬜ | |
| F1.2 | Env validation | App refuses to start with missing required env vars and shows which ones. | ⬜ | |
| F1.3 | Folder structure and conventions | Matches TECH_STACK.md section 4. | ⬜ | |
| F1.4 | Role model (admin, student) | Roles stored on user; helper `requireRole()` exists and is used by protected routes. | ⬜ | |
| F1.5 | Login page | Email or username + password; invalid credentials show generic error; rate-limited. | ⬜ | |
| F1.6 | Logout and session | Logout clears session cookie; expired session redirects to login. | ⬜ | |
| F1.7 | Forgot and reset password | Reset link is single-use, expires, and does not reveal whether an email exists. | ⬜ | |
| F1.8 | Route protection | Unauthenticated users cannot open `/dashboard` or `/admin`; students cannot open `/admin`. | ⬜ | |

## Phase 2 — Public Website

| ID | Feature | Acceptance criteria | Status | Notes |
|---|---|---|---|---|
| F2.1 | Responsive navbar | Works at 360px with mobile menu; keyboard accessible. | ⬜ | |
| F2.2 | Hero section | Name, headline, Explore Courses and Student Login CTAs; GSAP entrance animation respects reduced motion. | ⬜ | |
| F2.3 | About section | Introduction, mission, vision, "why choose us" points. | ⬜ | |
| F2.4 | Courses showcase on homepage | Shows ADCA, DCA, Web Development, App Development, others from mock data. | ⬜ | |
| F2.5 | Batch information section | Morning and evening batches with seat availability from mock data. | ⬜ | |
| F2.6 | Features section | Practical training, instructors, certificates, learning resources. | ⬜ | |
| F2.7 | Android app section | App name, icon, latest version, description, download button, release date, changelog. | ⬜ | |
| F2.8 | Contact section | Address, phone, email, Google Maps embed. | ⬜ | |
| F2.9 | Footer | Links to courses, privacy policy, terms and conditions. | ⬜ | |
| F2.10 | Courses page | Card grid with all required fields; difficulty filter; Beginner/Intermediate/Advanced. | ⬜ | |
| F2.11 | Course details page | Curriculum, objectives, duration, monthly and total fee, batches, seats, Book Seat button. | ⬜ | |
| F2.12 | Privacy policy and terms pages | Pages exist and are linked. Content reviewed by owner. | ⬜ | |

## Phase 3 — Admin Dashboard (frontend, mock data)

| ID | Feature | Acceptance criteria | Status | Notes |
|---|---|---|---|---|
| F3.1 | Admin layout and navigation | Protected sidebar; responsive; shows admin name. | ⬜ | |
| F3.2 | Dashboard statistics | Shows total students, active, pass-out, courses, enrolled, seats, pending payments, bookings, recent admissions. | ⬜ | |
| F3.3 | Course list | Table with status, price, enrolled count; search and pagination. | ⬜ | |
| F3.4 | Create course | All required fields validated with Zod; thumbnail upload with type and size checks. | ⬜ | |
| F3.5 | Edit course | Changes persist in mock layer; history of enrolled students preserved. | ⬜ | |
| F3.6 | Archive or delete course | Confirmation dialog; archive does not remove enrollments or payments. | ⬜ | |
| F3.7 | Module management | Add, rename, reorder, delete modules. | ⬜ | |
| F3.8 | Lesson management | Add video upload, YouTube link, PDF, image, resource; reorder; replace; publish or unpublish. | ⬜ | |
| F3.9 | Student list and create | Create student with all personal fields; validation; unique email and student ID. | ⬜ | |
| F3.10 | Student edit and status | Change status (Active, Payment Pending, Completed, Pass-out, Inactive); assign courses and batch. | ⬜ | |
| F3.11 | Student documents upload | Upload profile photo, Class 10 and 12 mark sheets, certificates, other documents; replace; type and size checks. | ⬜ | |
| F3.12 | Access block or restore | Toggle LMS access per student with confirmation and reason field. | ⬜ | |
| F3.13 | Offline payment recording | Form with student, course, month, amount, date, method, optional reference. Marks month paid. | ⬜ | |
| F3.14 | Payment reports view | Filter by month and status; totals shown. | ⬜ | |
| F3.15 | Batch management | Create, edit timing and capacity, disable batch, change weekly schedule. | ⬜ | |
| F3.16 | Batch seat assignment | Assign and remove students; cannot exceed capacity; shows booked and available. | ⬜ | |
| F3.17 | Booking records view | Lists online bookings with status and payment reference. | ⬜ | |
| F3.18 | Cancellation and refund management | Shows requests; records refund status; calculates 50% within 10 days, 0% after. | ⬜ | |
| F3.19 | APK management | Upload APK (type and size checked), version, release notes, date, enable or disable, replace. | ⬜ | |

## Phase 4 — Student Dashboard and LMS

| ID | Feature | Acceptance criteria | Status | Notes |
|---|---|---|---|---|
| F4.1 | Student layout and navigation | Protected sidebar; responsive; mobile bottom or drawer nav. | ⬜ | |
| F4.2 | Overview | Name, photo, student ID, courses, batch, payment status, completion. | ⬜ | |
| F4.3 | Personal information (read-only) | All admin-managed fields shown; no edit controls exist. | ⬜ | |
| F4.4 | Documents page | Lists documents; download works; no upload controls exist. | ⬜ | |
| F4.5 | Enrolled courses | Cards with progress, access status, Continue Learning. | ⬜ | |
| F4.6 | Course player | Lesson list by module; video or YouTube embed; PDF and image viewer. | ⬜ | |
| F4.7 | Lesson progress tracking | Completed lessons marked; progress percentage updates. | ⬜ | |
| F4.8 | Resource downloads | PDFs and resources download via signed short-lived URLs. | ⬜ | |
| F4.9 | Payment history | Monthly table with status, due date, last payment, outstanding amount. | ⬜ | |
| F4.10 | Batch information | Assigned batch, timings, weekly schedule, course info. | ⬜ | |
| F4.11 | Android APK download | Latest APK visible and downloadable from dashboard. | ⬜ | |
| F4.12 | Restriction screen | When access is restricted, lesson and course content is replaced by the "Course Access Is Currently Restricted" screen. | ⬜ | |

## Phase 5 — Payments and Access Control (backend)

| ID | Feature | Acceptance criteria | Status | Notes |
|---|---|---|---|---|
| F5.1 | Monthly payment records | One record per student, course, and month; unique constraint enforced. | ⬜ | |
| F5.2 | Due date logic | Month due on the 5th; pending status computed on the server. | ⬜ | |
| F5.3 | Offline payment API | Admin-only; records method and reference; audit logged. | ⬜ | |
| F5.4 | Server-side access check | Every protected lesson and file endpoint checks payment and entitlement on the server. | ⬜ | |
| F5.5 | Restriction for overdue students | Student with pending fee gets 403 on protected content, even by direct URL. | ⬜ | |
| F5.6 | Pass-out permanent access | Completed and cleared students retain access; no new monthly charges generated. | ⬜ | |
| F5.7 | Admin restore and restrict | Admin override works and is audit logged. | ⬜ | |

## Phase 6 — Batches, Booking, Payments, Email (backend)

| ID | Feature | Acceptance criteria | Status | Notes |
|---|---|---|---|---|
| F6.1 | Batch model and capacity | Capacity default 4; stored per batch; configurable by admin. | ⬜ | |
| F6.2 | Seat availability calculation | Available = capacity minus active bookings; computed on server. | ⬜ | |
| F6.3 | Concurrency-safe booking | Test with 10 parallel requests for 1 seat: exactly 1 succeeds. | ⬜ | |
| F6.4 | Razorpay order creation | Server creates order with amount calculated from config; no client-supplied amount is trusted. | ⬜ | |
| F6.5 | Razorpay webhook | Signature verified; idempotent; updates booking and payment status. | ⬜ | |
| F6.6 | Booking confirmation | Booking confirmed only after webhook verification, never after redirect alone. | ⬜ | |
| F6.7 | Student account creation after booking | Account created with temporary credentials or reset link. | ⬜ | |
| F6.8 | Resend emails | Welcome, booking confirmation, payment receipt, cancellation, refund, reset password, enrollment. | ⬜ | |
| F6.9 | Cancellation request flow | Student sees policy before payment; cancellation handled by admin only. | ⬜ | |
| F6.10 | Refund calculation | Within 10 days of successful booking date: 50%; after: 0%. Tested at day 0, 10, and 11. | ⬜ | |
| F6.11 | Payment amount with convenience charge | Calculated from Razorpay fee config and taxes; center receives intended amount. Verified with test cases. | ⬜ | |

## Phase 7 — Testing and Security

| ID | Feature | Acceptance criteria | Status | Notes |
|---|---|---|---|---|
| F7.1 | Permission test suite | Admin and student permissions tested on every protected route. | ⬜ | |
| F7.2 | Payment workflow tests | Offline and online flows tested end to end. | ⬜ | |
| F7.3 | Overdue restriction tests | Pending fee blocks content; cleared fee restores it. | ⬜ | |
| F7.4 | Pass-out access tests | Pass-out with cleared dues keeps access. | ⬜ | |
| F7.5 | Booking concurrency tests | See F6.3. | ⬜ | |
| F7.6 | Upload and download tests | Type, size, and access checks for all file types. | ⬜ | |
| F7.7 | Responsive tests | Automated screenshot checks at three widths. | ⬜ | |
| F7.8 | Security checklist | Every item in TESTING_AND_SECURITY.md section 3 passes. | ⬜ | |

## Phase 8 — Deployment

| ID | Feature | Acceptance criteria | Status | Notes |
|---|---|---|---|---|
| F8.1 | Production deployment on Vercel | Build succeeds; environment variables set; preview and production separated. | ⬜ | |
| F8.2 | Production MongoDB | Backup configured and a restore tested. | ⬜ | |
| F8.3 | Custom domain and HTTPS | Domain resolves, HTTPS enforced. | ⬜ | |
| F8.4 | Resend domain verified | SPF, DKIM, and DMARC pass. | ⬜ | |
| F8.5 | Razorpay live mode | Live keys set; test payment done with a small amount and refunded. | ⬜ | |
| F8.6 | First APK published | Visible on homepage and dashboard. | ⬜ | |

---

## Open questions (must be answered by the owner before related work)

1. Evening 1 timing: 2:00–3:30 PM or 2:00–5:30 PM?
2. Saturday: open or holiday?
3. Friday appears in both weekly schedules. Which schedule gets Friday?
4. Convenience charge: who pays it (student or center), and what is the exact Razorpay rate applied?
5. Refund: does the 50% apply to the admission amount only, or to the first month's fee too?
6. Pass-out definition: is it the course end date, or a manual admin action?
7. Monthly fee for pass-out students who have not cleared dues: partial access or full block?
8. Which login identifier is primary: email or student ID?
9. Certificate format and issuing rules.
10. Privacy policy and terms content (owner or legal to provide).
