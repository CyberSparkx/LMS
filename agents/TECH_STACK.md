# TECH_STACK.md — Technologies, Structure, and Tooling

## 1. Approved stack

| Area | Technology | Notes |
|---|---|---|
| Framework | Next.js (App Router) | Use Server Components by default; Client Components only when needed. |
| Language | TypeScript (strict mode) | No `any` unless documented and justified. |
| Styling | Tailwind CSS | Use design tokens (CSS variables / Tailwind theme). No inline ad-hoc colors. |
| UI components | shadcn/ui | Add components via the shadcn MCP / CLI. Do not hand-copy components from random sources. |
| Animation | GSAP (with `@gsap/react` `useGSAP`) | Respect `prefers-reduced-motion`. Clean up animations on unmount. |
| Database | MongoDB (Mongoose or official driver) | Introduced in backend phase. Models in one folder. |
| Auth | Auth.js or custom JWT | Passwords hashed (bcrypt or argon2). httpOnly secure cookies. |
| Image / file storage | Cloudinary or S3-compatible object storage | Private files use signed, short-lived URLs. |
| Video | YouTube embed (primary) | Only the video ID is stored. |
| Payments | Razorpay | Server-side order creation and webhook signature verification. |
| Email | Resend | Templates kept in one folder with consistent branding. |
| Validation | Zod | Validate every API input and every form. |
| Forms | React Hook Form + Zod resolver | |
| Data fetching (client) | TanStack Query (where needed) | Optional; server components preferred. |
| Testing | Vitest (unit), React Testing Library, Playwright (end-to-end), MongoDB Memory Server (integration) | |
| Linting / formatting | ESLint (Next.js config), Prettier | Run before every commit. |
| Security scanning | `npm audit`, Snyk or GitHub Dependabot, CodeQL (GitHub) | See TESTING_AND_SECURITY.md. |
| Hosting | Vercel | Preview deployments per branch. |
| Version control | GitHub | Branch per feature, pull requests, required checks. |
| Editor | Antigravity | Agents must follow these docs. |

## 2. Libraries to avoid unless approved

- Redux or other heavy global state libraries (use server components, URL state, and small client stores).
- Any UI kit that conflicts with shadcn/ui.
- Storing files, videos, or APKs inside MongoDB.
- localStorage for anything security-sensitive (tokens, payment state).

## 3. Skills and MCP tools to use

These are external resources the team has chosen. Use them as follows:

| Resource | Use it for |
|---|---|
| `ibelick/ui-skills` | Consistent UI patterns, component quality, accessibility basics. |
| `nextlevelbuilder/ui-ux-pro-max-skill` | UX decisions: layout, hierarchy, spacing, responsive behaviour, dashboard patterns. |
| `greensock/gsap-skills` | Correct GSAP usage: timelines, ScrollTrigger, cleanup in React. |
| `Leonxlnx/taste-skill` | Visual taste and avoiding generic "AI-looking" design. Apply during the public website design. |
| shadcn MCP (`ui.shadcn.com/docs/mcp`) | Fetch exact, current shadcn component code and installation commands. Prefer it over memory. |

Rule: when a skill and these docs disagree, these docs win for project decisions (stack, security, business rules). Skills win for pure visual and UX craft.

Agents must check the skill guidance before building a page and note in the reply which skill was applied.

## 4. Folder structure (target)

```
computer-center/
├─ AGENTS.md
├─ docs/                      # these project docs
├─ public/
├─ src/
│  ├─ app/
│  │  ├─ (public)/            # homepage, courses, login, contact
│  │  ├─ (student)/dashboard/ # student protected area
│  │  ├─ (admin)/admin/       # admin protected area
│  │  └─ api/                 # route handlers (backend phase)
│  ├─ components/
│  │  ├─ ui/                  # shadcn components
│  │  ├─ public/              # homepage and marketing sections
│  │  ├─ student/
│  │  └─ admin/
│  ├─ features/               # feature modules: courses, batches, payments, apk...
│  ├─ services/
│  │  ├─ api/                 # client-facing data layer (mock first, real later)
│  │  └─ mock/                # mock data (frontend phase only)
│  ├─ lib/                    # auth, db, razorpay, resend, storage, utils
│  ├─ models/                 # MongoDB models (backend phase)
│  ├─ schemas/                # Zod schemas shared by client and server
│  ├─ types/                  # shared TypeScript types
│  ├─ config/                 # env parsing, constants, business rules
│  └─ emails/                 # Resend email templates
├─ tests/
│  ├─ unit/
│  ├─ integration/
│  └─ e2e/
└─ .env.example
```

## 5. Environment variables

Keep real values out of git. Maintain `.env.example` with every key (empty values).

Required keys (expected): `MONGODB_URI`, `AUTH_SECRET`, `NEXTAUTH_URL` (if Auth.js), `RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET`, `RAZORPAY_WEBHOOK_SECRET`, `RESEND_API_KEY`, `STORAGE_*` keys, `NEXT_PUBLIC_SITE_URL`.

Validate all env variables at startup with Zod in `src/config/env.ts`. The app must refuse to start if a required value is missing.

## 6. Coding conventions

- File names: `kebab-case` for files, `PascalCase` for React components, `camelCase` for functions and variables.
- One component per file for shared components.
- Business constants (monthly due day 5, cancellation window 10 days, refund 50%, batch capacity 4) live in `src/config/business-rules.ts`. Never scatter magic numbers.
- Money is stored as integers in paise (smallest unit), never as floating-point rupees.
- Dates are stored in UTC; display in `Asia/Kolkata`.
- All server actions and route handlers validate input with Zod and check the user's role.
- Imports use the `@/` alias.
- Comments explain why, not what.

## 7. Git workflow

- `main` is always deployable.
- Work in `feature/<short-name>` branches.
- Commit messages: `type(scope): summary`, e.g. `feat(batches): add seat availability calculation`.
- Every pull request must pass lint, type check, unit tests, and build.
