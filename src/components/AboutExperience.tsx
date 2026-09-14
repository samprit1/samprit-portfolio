'use client'

import { useState } from 'react'
import { ArrowUpRight, BriefcaseBusiness, MousePointer2, Sparkles, Wrench } from 'lucide-react'
import { experience, tools } from '@/data/profile'

export function AboutExperience({title,body,aboutImageUrl,contactEnabled=true}:{title:string;body:string;aboutImageUrl?:string;contactEnabled?:boolean}){
  const [pos,setPos] = useState({x:50,y:50})
  const [activeTool,setActiveTool] = useState(0)
  const [activeExperience,setActiveExperience] = useState<number | null>(null)
  const imageUrl = aboutImageUrl || ''
  const progress = activeExperience === null ? 0 : (activeExperience + 1) / experience.length

  return <div onPointerMove={e=>{const r=e.currentTarget.getBoundingClientRect();setPos({x:((e.clientX-r.left)/r.width)*100,y:((e.clientY-r.top)/r.height)*100})}} className="about-experience" style={{'--mx':`${pos.x}%`,'--my':`${pos.y}%`} as React.CSSProperties}>
    <div className="about-orb"/><div className="about-grid-lines"/>
    <div className="relative z-10 grid items-end gap-10 lg:grid-cols-[1.08fr_.92fr]">
      <div>
        <p className="flex items-center gap-2 text-xs font-bold tracking-[.18em] text-[#DF1730]"><Sparkles size={14}/> ABOUT SAMPRIT</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight md:text-7xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">{body}</p>
        {contactEnabled?<a href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#DF1730] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(223,23,48,.35)]">Let’s work together <ArrowUpRight size={17}/></a>:<button type="button" disabled className="mt-8 cursor-not-allowed rounded-full bg-zinc-700 px-5 py-3 text-sm font-bold text-zinc-400">Let’s work together</button>}
      </div>
      <figure className="about-image">
        {imageUrl ? <img src={imageUrl} alt="Samprit creating visual work"/> : <div className="about-image-placeholder" aria-hidden="true"/>}
        <figcaption className="about-image-glass"><span className="text-[10px] font-bold tracking-[.18em] text-[#DF1730]">SAMPRIT / VISUAL ARCHIVE</span><span className="text-xs text-white/75">Edit · Motion · Stories</span></figcaption>
      </figure>
    </div>
    <div className="relative z-10 mt-14 grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
      <section><p className="flex items-center gap-2 text-xs font-bold tracking-[.18em] text-[#DF1730]"><Wrench size={14}/> TOOLS I KNOW</p><div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">{tools.map((tool,i)=><button type="button" key={tool} onMouseEnter={()=>setActiveTool(i)} onFocus={()=>setActiveTool(i)} className={`tool-card ${activeTool===i?'is-active':''}`}><span>{String(i+1).padStart(2,'0')}</span><b>{tool}</b></button>)}</div><div className="mt-4 rounded-xl border border-[var(--line)] bg-black/20 p-4 text-sm text-[var(--muted)]"><MousePointer2 size={16} className="mb-2 text-[#DF1730]"/>Hover a tool to shift the atmosphere.</div></section>
      <section><p className="flex items-center gap-2 text-xs font-bold tracking-[.18em] text-[#DF1730]"><BriefcaseBusiness size={14}/> EXPERIENCE</p><div className="experience-timeline" style={{'--experience-progress':progress} as React.CSSProperties}><span className="experience-line" aria-hidden="true"/><span className="experience-line-fill" aria-hidden="true"/>{experience.map((item,i)=><article key={item.company} tabIndex={0} onMouseEnter={()=>setActiveExperience(i)} onMouseLeave={()=>setActiveExperience(null)} onFocus={()=>setActiveExperience(i)} onBlur={()=>setActiveExperience(null)} className={`experience-card ${activeExperience===i?'is-active':''}`} style={{'--i':i} as React.CSSProperties}><span className="experience-dot"/><div><p className="text-xs font-bold text-[#DF1730]">{item.period}</p><h3 className="mt-1 text-base font-bold">{item.role}</h3><p className="mt-1 text-sm text-[var(--muted)]">{item.company}</p></div></article>)}</div></section>
    </div>
  </div>
}
