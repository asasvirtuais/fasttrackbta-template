import { unstable_rethrow } from 'next/navigation'

type Failure = { error: string }

export function action<A extends any[], R>(fn: (...args: A) => Promise<R>) {
  return async (...args: A): Promise<R | Failure> => {
    try { return await fn(...args) }
    catch (error) { unstable_rethrow(error); return { error: (error as Error).message } }
  }
}

export function ok<R>(result: R | Failure): R {
  if (result && typeof result === 'object' && 'error' in result) throw new Error(result.error)
  return result as R
}

export function unwrap<T extends Record<string, (...args: any[]) => Promise<any>>>(actions: T) {
  return Object.fromEntries(
    Object.entries(actions).map(([name, fn]) => [name, async (...args: any[]) => ok(await fn(...args))])
  ) as { [K in keyof T]: (...args: Parameters<T[K]>) => Promise<Exclude<Awaited<ReturnType<T[K]>>, Failure>> }
}
