# Technical Specification

> Always reflects the exact current state of the app: data models, routes, permissions, workflows. Update before and during coding.

## Overview
<!-- One paragraph: what the app does and for whom. -->

## Roles
| Role | Description | Demo username |
| :--- | :--- | :--- |
| `ADMIN` | | `admin` |
| `MANAGER` | | `manager` |
| `STAFF` | | `staff` |

Demo password for all accounts: `demo1234` (see `lib/demo.ts`).

## Data Model
<!-- One section per table. Table name is lowercase plural; Prisma model is the singular PascalCase. -->

### `{model}s` → `{Model}`
| Field | Type | Readable | Writable | Notes |
| :--- | :--- | :---: | :---: | :--- |
| `id` | `string` (cuid) | ✓ | | |

## Routes
| Route | Page | Tables provided | Roles |
| :--- | :--- | :--- | :--- |
| `/login` | Sign in with demo accounts | — | Public |
| `/` | Dashboard | | All |

## Permissions (Table Middleware)
| Table | find | list | create | update | remove |
| :--- | :--- | :--- | :--- | :--- | :--- |

## Server Actions & Complex Operations
| Action | Location | What it does | Authorization |
| :--- | :--- | :--- | :--- |

## Workflows
<!-- Status transitions, calculations, approvals, automations. For each: states, who moves it, what triggers each transition. -->

## Seed Data
<!-- What the seed creates so the app looks alive on first open. -->

## Assumptions
<!-- Every decision made where brief.md was vague or silent. Carried into README.md. -->
-
