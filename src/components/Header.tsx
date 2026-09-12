'use client'
import { Bell, Menu, Search, Plus, Play } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'
import { ThemeToggle } from './ThemeToggle'

export function Header({onMenu,logoUrl,profileImageUrl}:{onMenu:()=>void;logoUrl?:string;profileImageUrl?:string}){
  const [q,setQ]=useState('')
  const r=useRouter()
  function submit(e:FormEvent){e.preventDefault();r.push('/search?q='+encodeURIComponent(q))}
  return <header className="fixed inset-x-0 top-0 z-40 flex h-16 items-center gap-2 border-b border-[var(--line)] bg-[var(--bg)] px-2 sm:gap-3 sm:px-3 md:px-5">
    <button onClick={onMenu} aria-label="Open menu" className="focus shrink-0 rounded-full p-2 hover:bg-[var(--surface2)]"><Menu size={22}/></button>
    <a href="/" aria-label="SAMPRIT home" className="flex shrink-0 items-center gap-1.5 font-bold text-[16px] tracking-tight">{logoUrl?<img src={logoUrl} alt="SAMPRIT logo" className="hidden h-7 max-w-28 object-contain sm:block"/>:<><img src="/logo-light.png" alt="SAMPRIT logo" className="site-logo-for-dark hidden h-7 max-w-28 object-contain sm:block"/><img src="/logo-dark.png" alt="SAMPRIT logo" className="site-logo-for-light hidden h-7 max-w-28 object-contain sm:block"/><img src="/favicon.png" alt="SAMPRIT" className="h-7 w-7 rounded-[7px] object-cover sm:hidden"/></>}<span className="hidden sm:inline">{logoUrl?'SAMPRIT':''}</span></a>
    <form onSubmit={submit} className="mx-auto flex min-w-0 max-w-[640px] flex-1"><input value={q} onChange={e=>setQ(e.target.value)} aria-label="Search projects" placeholder="Search" className="focus h-10 min-w-0 w-full rounded-l-full border border-[var(--line)] bg-[var(--surface)] px-3 text-xs outline-none sm:px-5 sm:text-sm"/><button aria-label="Search" className="focus flex w-10 shrink-0 items-center justify-center rounded-r-full border border-l-0 border-[var(--line)] bg-[var(--surface2)] sm:w-16"><Search size={19}/></button></form>
    <div className="flex shrink-0 items-center gap-0.5 sm:gap-1"><button className="focus hidden rounded-full p-2 hover:bg-[var(--surface2)] sm:block" aria-label="Create"><Plus size={21}/></button><button className="focus hidden rounded-full p-2 hover:bg-[var(--surface2)] sm:block" aria-label="Notifications"><Bell size={19}/></button><ThemeToggle/>{profileImageUrl?<img src={profileImageUrl} alt="Profile" className="hidden h-8 w-8 rounded-full object-cover sm:block"/>:<span className="hidden h-8 w-8 rounded-full bg-gradient-to-br from-orange-300 via-red-500 to-purple-700 sm:block"/>}<a href="/contact" className="focus rounded-full bg-[#e93434] px-2.5 py-2 text-[11px] font-bold text-white hover:bg-[#f04444] sm:px-4 sm:text-xs">Hire Me</a></div>
  </header>
}
