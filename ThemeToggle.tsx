'use client'
import { Moon, Sun } from 'lucide-react'; import { useEffect, useState } from 'react'
export function ThemeToggle(){const [dark,setDark]=useState(true);useEffect(()=>{document.documentElement.dataset.theme=dark?'dark':'light'},[dark]);return <button aria-label="Toggle theme" className="focus rounded-full p-2 hover:bg-[var(--surface2)]" onClick={()=>setDark(!dark)}>{dark?<Sun size={19}/>:<Moon size={19}/>}</button>}
