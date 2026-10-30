# PROJECT.md — Project Knowledge

## 1. What this project is

A modern, responsive web platform for a computer training center. It combines:

- A public website (homepage, courses, batches, APK download, contact, online admission).
- A Learning Management System (LMS) for students (courses, videos, PDFs, documents).
- An admin portal (students, courses, content, payments, batches, documents, APK).
- Online seat booking with Razorpay payments.
- Monthly fee tracking with payment-based access control.
- An Android app, distributed as an APK from the website, that uses the same backend.

## 2. Who uses it

| Role | What they do |
|---|---|
| Visitor | Browses courses and batches, downloads the APK, books a seat. |
| Student | Logs in, views enrolled courses and materials, checks payments and batch schedule, downloads own documents and the APK. |
| Admin | Controls everything: courses, content, students, payments, batches, bookings, documents, APK, refunds. |

Students can never upload or edit documents, photos, mark sheets, or certificates. Only admins can.

## 3. Build strategy (important)

The project is built in two halves on purpose:

1. **Frontend first.** Build all pages with mock data behind a clearly named data service (for example `src/services/api/` returning typed mock responses). The UI must not know whether data is mock or real.
2. **Backend second.** Replace the mock services one module at a time with real MongoDB-backed API routes. Keep the same TypeScript types so the UI does not change.

This lets the team see and approve the interface early, and makes the backend work incremental.

## 4. Public website pages

1. **Homepage:** Hero (CTAs: Explore Courses, Student Login), About (mission, vision, why choose us), Available Courses, Batch Information, Features, Android App (latest APK and download button), Contact (address, phone, email, Google Maps), Footer (links, privacy policy, terms).
2. **Login / Authentication:** Student and admin login, email or username plus password, forgot password, password reset, secure sessions. No public admin registration. Students receive accounts after a confirmed booking.
3. **Courses:** Card grid (thumbnail, title, short description, difficulty, duration, monthly fee, total fee, available batches, View Details). Difficulty: Beginner, Intermediate, Advanced. Each course has a detail page with full description, curriculum, objectives, duration, fees, batches, seat availability, and a Book Seat button.

## 5. Student dashboard

Protected area with sidebar navigation:

- **Overview:** name, photo, student ID, enrolled courses, current batch, payment status, completion status.
- **Personal information (read-only for students):** full name, date of birth, contact, email, address, enrollment date, student ID.
- **Documents:** view and download profile photo, Class 10 and 12 mark sheets, certificates, other documents. Read-only for students.
- **Enrolled courses:** thumbnail, enrollment date, progress, access status, Continue Learning.
- **Payment history:** monthly table (month, amount, status), due date (5th of each month), last payment, outstanding amount.
- **Batch information:** assigned batch, timings, weekly schedule.
- **Android app:** latest APK download.

## 6. Admin portal

- **Dashboard stats:** total and active students, pass-out students, total courses, enrolled students, available seats, pending payments, online bookings, recent admissions.
- **Course management:** create, edit, archive, price changes, status (Active or Inactive), view enrolled students. Deleting a course must never delete enrollment or payment history.
- **Content management:** modules, then lessons inside modules. Lesson types: video upload, YouTube link, PDF, image, downloadable resource. Reorder, edit, replace, delete, publish or unpublish.
- **Student management:** create accounts, edit details, upload photo and documents, assign courses and batches, update offline payments, change status (Active, Payment Pending, Course Completed, Pass-out, Inactive), block or restore LMS access.
- **Payment management:** record offline payments (student, course, month, amount, date, method, optional reference), mark months paid, view online transactions and reports.
- **Batch management:** create, edit timing and capacity, assign or remove students, view booked and available seats, disable a batch, change weekly schedule.
- **Booking management:** view online bookings, process cancellation requests and refunds.
- **APK management:** upload, version, release notes, release date, enable or disable, replace old versions.

## 7. Core business rules

1. Only admins create and publish courses.
2. Only admins upload or modify student documents.
3. Students access only courses they are enrolled in.
4. Students with pending monthly fees cannot access protected materials. Show a blocking screen: "Your Course Access Is Currently Restricted", with instructions to visit the center.
5. Students who completed the course and cleared all dues keep permanent access to their enrolled course materials.
6. Pass-out students are not charged monthly fees.
7. Offline payments are verified and marked by the admin.
8. Online payments are confirmed only by a verified Razorpay webhook. The browser redirect is never proof of payment.
9. A batch never exceeds its maximum capacity (default 4).
10. A booking is confirmed only after verified payment.
11. Seat allocation is concurrency-safe. Two students cannot take the last seat.
12. Students cannot cancel online. Cancellation within 10 days of the successful booking date gives a 50% refund. After 10 days, no refund. The admin records refund status.
13. The cancellation policy is shown before payment.
14. The latest published APK is always what students see.
15. Admin can manually restore or restrict access at any time.

## 8. Batch schedule (reference)

Six daily slots, four seats each: Morning 1 (7:00–8:30 AM), Morning 2 (8:30–10:00 AM), Morning 3 (10:00–11:30 AM), Evening 1 (2:00–3:30 PM, to confirm), Evening 2 (5:30–7:00 PM), Evening 3 (7:00–8:30 PM). Sunday is a holiday. Weekly schedules A (Mon, Wed, Fri) and B (Tue, Thu, Fri) need confirmation. See `FEATURES.md` open questions.

## 9. Phases

1. Foundation: project setup, TypeScript, Tailwind, folder structure, auth skeleton, roles.
2. Public website: homepage, courses, course details, batches, contact, APK section.
3. Admin dashboard (frontend with mock data): course, content, student, document, APK management.
4. Student dashboard and LMS: profile, courses, lessons, YouTube embed, PDFs, downloads, progress.
5. Payments and access control: payment records, due dates, restriction screen, pass-out access.
6. Batches and booking: seat logic, Razorpay, webhook, confirmation emails, cancellation and refunds.
7. Testing and security hardening.
8. Deployment and launch.

## 10. Future (not in MVP)

Attendance, online exams, MCQs and assignments, analytics, automatic certificates, announcements, admin financial reports, WhatsApp notifications, QR identity cards, Android app LMS integration, instructor accounts, multiple admin permission levels.
