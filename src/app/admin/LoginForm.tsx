'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { login, type LoginState } from './actions'

const initialState: LoginState = {}

function SubmitButton() {
  const { pending } = useFormStatus()
  return <button disabled={pending} className="mt-5 w-full rounded-lg bg-[#ed3d3d] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#ff5050] disabled:opacity-60">{pending ? 'Signing in…' : 'Open editor'}</button>
}

export function LoginForm() {
  const [state, action] = useFormState(login, initialState)
  return <form action={action} className="mt-7"><label htmlFor="password" className="text-sm font-medium text-zinc-300">Owner password</label><input id="password" name="password" type="password" autoComplete="current-password" required className="mt-2 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-3 text-white outline-none ring-red-400 placeholder:text-zinc-600 focus:ring-2" placeholder="Enter your password"/>{state.error&&<p role="alert" className="mt-3 text-sm text-red-300">{state.error}</p>}<SubmitButton/></form>
}
