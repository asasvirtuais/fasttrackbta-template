'use client'
import { SessionProvider } from 'next-auth/react'
import { InterfaceProvider } from 'asasvirtuais/context'
import { unwrap } from '@/lib/action'
import * as actions from './actions'

const crud = unwrap(actions)

export default function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <InterfaceProvider {...crud}>{children}</InterfaceProvider>
    </SessionProvider>
  )
}
