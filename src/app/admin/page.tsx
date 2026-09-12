import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { LockKeyhole, SlidersHorizontal } from 'lucide-react'
import { LoginForm } from './LoginForm'

export default function AdminLogin() {
  if (cookies().get('samprit-admin')?.value === process.env.ADMIN_PASSWORD && process.env.ADMIN_PASSWORD) redirect('/studio')
  return <main className="flex min-h-screen items-center justify-center bg-[#0c0c0d] p-5 text-white"><section className="w-full max-w-md rounded-2xl border border-zinc-800 bg-[#171719] p-7 shadow-2xl shadow-black/30"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/15 text-red-400"><SlidersHorizontal size={22}/></div><p className="mt-6 text-xs font-bold tracking-[0.18em] text-red-400">SAMPRIT PORTFOLIO</p><h1 className="mt-2 text-2xl font-bold">Content editor</h1><p className="mt-2 leading-6 text-zinc-400">Sign in to manage videos, thumbnails, project details, and page copy.</p><LoginForm/><div className="mt-6 flex items-center gap-2 border-t border-zinc-800 pt-5 text-xs text-zinc-500"><LockKeyhole size={14}/> This area is private to the portfolio owner.</div></section></main>
}
