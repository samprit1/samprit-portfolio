'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export type LoginState = { error?: string }

export async function login(_: LoginState, formData: FormData): Promise<LoginState> {
  const password = String(formData.get('password') || '')
  const configuredPassword = process.env.ADMIN_PASSWORD

  if (!configuredPassword) return { error: 'Set ADMIN_PASSWORD in your environment before signing in.' }
  if (password !== configuredPassword) return { error: 'That password is not correct.' }

  cookies().set('samprit-admin', configuredPassword, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 12,
  })
  redirect('/studio')
}
