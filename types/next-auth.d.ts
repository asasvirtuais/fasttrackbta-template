import type { DefaultSession } from 'next-auth'
import type { Role } from '@/lib/demo'

declare module 'next-auth' {
  interface User {
    username: string
    role: Role
  }
  interface Session {
    user: DefaultSession['user'] & { id: string, username: string, role: Role }
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string
    username: string
    role: Role
  }
}
