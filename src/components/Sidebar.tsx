'use client'

import { Clapperboard, Contact, Film, Frame, Home, Image, Instagram, Linkedin, Mail, PlaySquare, UserRound, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

const primary=[['Home','/',Home],['About Me','/about',UserRound]]
const portfolio=[['Long-form','/long-form',Film],['Short-form','/short-form',PlaySquare],['Motion Design','/motion-design',Clapperboard],['My Frames','/my-frames',Frame],['Poster Designs','/poster-designs',Image]]
const more=[['Contact Me','/contact',Contact]]
const links=[['Instagram','https://instagram.com',Instagram],['LinkedIn','https://linkedin.com',Linkedin],['Email','mailto:samprit2006.sdm@gmail.com',Mail]]

export function Sidebar({open,close,contactEnabled=true}:{open:boolean;close:()=>void;contactEnabled?:boolean}){
  const p=usePathname()
  const block=(items:any[])=>items.map(([n,href,I])=><a onClick={close} key={n} href={href} className={`focus flex items-center gap-6 rounded-lg px-3 py-2.5 text-sm hover:bg-[var(--surface2)] ${p===href?'bg-[var(--surface2)] font-semibold':''}`}><I size={20}/>{n}</a>)
  const desktopMore=contactEnabled?<><hr className="my-3 border-[var(--line)]"/><p className="px-3 py-2 text-xs font-bold text-[var(--muted)]">MORE</p>{block(more)}</>:null
  const mobileMore=contactEnabled?<><hr className="my-3 border-[var(--line)]"/>{block(more)}</>:null
  const desktopConnect=contactEnabled?<><hr className="my-3 border-[var(--line)]"/><p className="px-3 py-2 text-xs font-bold text-[var(--muted)]">CONNECT</p>{block(links)}</>:null
  const mobileConnect=contactEnabled?<><hr className="my-3 border-[var(--line)]"/>{block(links)}</>:null
  return <><aside className="fixed bottom-0 left-0 top-16 z-30 hidden w-60 overflow-y-auto border-r border-[var(--line)] bg-[var(--bg)] px-3 py-3 md:block">{block(primary)}<hr className="my-3 border-[var(--line)]"/><p className="px-3 py-2 text-xs font-bold text-[var(--muted)]">PORTFOLIO</p>{block(portfolio)}{desktopMore}{desktopConnect}</aside><div className={`fixed inset-0 z-50 md:hidden ${open?'':'pointer-events-none'}`}><div onClick={close} className={`absolute inset-0 bg-black/60 transition-opacity ${open?'opacity-100':'opacity-0'}`}/><aside className={`absolute bottom-0 left-0 top-0 w-72 overflow-auto bg-[var(--bg)] p-3 transition-transform ${open?'translate-x-0':'-translate-x-full'}`}><div className="mb-4 flex items-center justify-between px-2"><b>SAMPRIT</b><button onClick={close} className="focus rounded-full p-2"><X/></button></div>{block(primary)}<hr className="my-3 border-[var(--line)]"/><p className="px-3 py-2 text-xs font-bold text-[var(--muted)]">PORTFOLIO</p>{block(portfolio)}{mobileMore}{mobileConnect}</aside></div></>
}
