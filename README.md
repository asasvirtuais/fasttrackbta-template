# FastTrack BTA — App Template

Starter for FastTrack BTA client builds. Overwritten with the client delivery document at the end of each build (see `CLAUDE.md`).

## Stack
- Next.js 16 (App Router) + Tailwind CSS v4
- NextAuth v4 (Credentials, JWT) — `lib/auth.ts`, route protection in `proxy.ts`
- `asasvirtuais` v6 forms on top of tables — see `AGENTS.md`
- Prisma 7 + PostgreSQL via `asasvirtuais-prisma` — `prisma/schema.prisma`, `app/db.ts`

## Setup
```bash
pnpm install
cp .env.example .env   # set DATABASE_URL and NEXTAUTH_SECRET
pnpm db:push
pnpm db:seed
pnpm dev
```

Demo accounts (`lib/demo.ts`): `admin`, `manager`, `staff` — password `demo1234`.
