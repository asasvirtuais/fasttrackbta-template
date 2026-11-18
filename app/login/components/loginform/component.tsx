'use client'
import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { Form } from 'asasvirtuais/form'
import { DEMO_USERS } from '@/lib/demo'

export default function LoginForm() {
  const router = useRouter()
  const callbackUrl = useSearchParams().get('callbackUrl') ?? '/'
  const [defaults] = useState({ username: DEMO_USERS[0].username, password: DEMO_USERS[0].password })

  async function login(credentials: { username: string, password: string }) {
    const result = await signIn('credentials', { ...credentials, redirect: false })
    if (!result?.ok) throw new Error('Invalid username or password')
    return result
  }

  return (
    <Form defaults={defaults} action={login} onResult={() => { router.push(callbackUrl); router.refresh() }}>
      {credentials => (
        <form onSubmit={credentials.submit} className="w-full max-w-sm space-y-4 rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-xl font-semibold">Sign in</h1>
          <label className="block text-sm">
            <span className="font-medium">Username</span>
            <input
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
              value={credentials.fields.username}
              onChange={e => credentials.setField('username', e.target.value)}
              autoComplete="username"
            />
          </label>
          <label className="block text-sm">
            <span className="font-medium">Password</span>
            <input
              type="password"
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
              value={credentials.fields.password}
              onChange={e => credentials.setField('password', e.target.value)}
              autoComplete="current-password"
            />
          </label>
          {credentials.error && <p className="text-sm text-red-600">{credentials.error.message}</p>}
          <button
            type="submit"
            disabled={credentials.loading}
            className="w-full rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700 disabled:opacity-50"
          >
            {credentials.loading ? 'Signing in…' : 'Sign in'}
          </button>
          <div className="border-t border-slate-200 pt-4">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Demo accounts</p>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {DEMO_USERS.map(user => (
                <button
                  key={user.username}
                  type="button"
                  disabled={credentials.loading}
                  onClick={() => credentials.setFields({ username: user.username, password: user.password })}
                  className="rounded-md border border-slate-300 px-2 py-1.5 text-xs font-medium hover:bg-slate-100"
                >
                  {user.role.charAt(0) + user.role.slice(1).toLowerCase()}
                </button>
              ))}
            </div>
            <p className="mt-2 text-xs text-slate-500">Password for all demo accounts: <code>{DEMO_USERS[0].password}</code></p>
          </div>
        </form>
      )}
    </Form>
  )
}
