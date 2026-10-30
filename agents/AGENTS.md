# AGENTS.md — Start Here

This folder is the single source of truth for the Computer Center Management & LMS project.
Any AI agent (Antigravity, Gemini, Claude, Copilot, etc.) working in this repository must read these files in order before writing code.

## Reading order

1. `docs/PROJECT.md` — what the product is, who uses it, what pages and features exist.
2. `docs/TECH_STACK.md` — approved technologies, folder structure, coding conventions, and which skills/MCP tools to use.
3. `docs/PRODUCTION_STANDARDS.md` — the quality bar every change must meet.
4. `docs/FEATURES.md` — the live feature checklist. Check this before and after every task.
5. `docs/TESTING_AND_SECURITY.md` — tests to write, security checks to run, and how to verify the app works.

## Rules for the agent

- Never start coding a feature without checking its entry in `FEATURES.md`.
- After finishing any task, update the status of the affected features in `FEATURES.md` (Not started / In progress / Built / Tested / Verified).
- Do not mark a feature "Verified" unless its acceptance criteria were tested and the test results are recorded.
- Follow the phase order in `PROJECT.md`. Build the frontend with mock data behind a service layer first; the backend will replace the mock layer later without changing UI components.
- Never hardcode secrets, API keys, or prices that come from business rules. Use environment variables and configuration.
- Authorization must always be enforced on the server. Hiding UI elements is not security.
- If a requirement is ambiguous, check the "Open questions" section in `FEATURES.md` and ask the human owner instead of guessing.
- Keep changes small and focused. One feature per commit where possible.
