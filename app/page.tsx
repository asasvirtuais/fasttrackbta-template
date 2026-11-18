'use client'
import { signOut, useSession } from 'next-auth/react'

export default function Home() {
  const { data: session } = useSession()
  return (
    <main className="flex flex-1 items-center justify-center p-8">
      <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-xl font-semibold">Template ready</h1>
        <p className="mt-2 text-sm text-slate-600">
          Signed in as {session?.user.name ?? '…'} ({session?.user.role ?? '…'}). Replace this page with the app dashboard.
        </p>
        <button
          onClick={() => signOut({ callbackUrl: '/login' })}
          className="mt-6 rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
        >
          Sign out
        </button>
      </div>
    </main>
  )
}
