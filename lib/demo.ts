// Demo accounts shown on the sign-in page and created by prisma/seed.ts.
export type Role = 'ADMIN' | 'MANAGER' | 'STAFF'

export const DEMO_USERS: { username: string, password: string, name: string, role: Role }[] = [
  { username: 'admin', password: 'demo1234', name: 'Alex Morgan', role: 'ADMIN' },
  { username: 'manager', password: 'demo1234', name: 'Jordan Reyes', role: 'MANAGER' },
  { username: 'staff', password: 'demo1234', name: 'Taylor Brooks', role: 'STAFF' },
]
