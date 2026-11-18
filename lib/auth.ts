import type { NextAuthOptions } from 'next-auth'
import { getServerSession } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
import { prisma } from '@/app/prisma'
import type { Role } from './demo'

export const authOptions: NextAuthOptions = {
  session: { strategy: 'jwt' },
  pages: { signIn: '/login' },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) return null
        const user = await prisma.user.findUnique({ where: { username: credentials.username } })
        if (!user) return null
        const valid = await bcrypt.compare(credentials.password, user.passwordHash)
        if (!valid) return null
        return { id: user.id, name: user.name, username: user.username, role: user.role }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.username = user.username
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      session.user = { ...session.user, id: token.id, username: token.username, role: token.role }
      return session
    },
  },
}

export const auth = () => getServerSession(authOptions)

/** Throws unless there is a signed-in user (optionally with one of `roles`). */
export async function requireUser(...roles: Role[]) {
  const session = await auth()
  if (!session?.user) throw new Error('Unauthorized')
  if (roles.length && !roles.includes(session.user.role)) throw new Error('Forbidden')
  return session.user
}
