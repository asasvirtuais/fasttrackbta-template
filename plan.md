# Execution Plan

> One-Shot: complete every phase in one session. 5-Day Build: one run per day — check what is already done before starting.

**Build type:**
**Current run:**

## Phase 1 — Context & Planning
- [ ] Read `AGENTS.md`, `brief.md`, `specs.md`, `changelog.md`
- [ ] Write `specs.md` (data model, routes, permissions, workflows, assumptions)
- [ ] Break the work below into concrete tasks

## Phase 2 — Development
### Stage 1: Data Modeling
- [ ] Prisma models in `prisma/schema.prisma`
- [ ] `packages/{model}/schema.ts` for each table, registered in `app/schema.ts`
- [ ] Seed data in `prisma/seed.ts`

### Stage 2: Layout & Routing
- [ ] App shell (sidebar, header with user/role/sign out)
- [ ] Dashboard with summary metrics
- [ ] Page skeletons providing their tables (`asAbove`)

### Stage 3: Pages, Forms & Server Actions
- [ ] Create / Update / Filter / Delete forms per table
- [ ] Server actions and complex operations

### Stage 4: Middleware & Authorization
- [ ] `packages/{model}/middleware.ts` per table
- [ ] `app/actions.ts` switched to the middleware
- [ ] Role checks in server actions and UI

### Stage 5: Workflows & Custom Features
- [ ]

## Phase 3 — Verification & Deployment
- [ ] `pnpm typecheck`, `pnpm lint`, `pnpm build` pass
- [ ] Commit and push
- [ ] Deploy to Vercel, database pushed and seeded, production URL returns 200

## Phase 4
- [ ]
