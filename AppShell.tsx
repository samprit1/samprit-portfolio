'use client'
import { ReactNode, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Header } from './Header'
import { Sidebar } from './Sidebar'
import { Footer } from './Footer'
export function AppShell({children,logoUrl,profileImageUrl}:{children:ReactNode;logoUrl?:string;profileImageUrl?:string}){const [open,setOpen]=useState(false);const pathname=usePathname();if(pathname.startsWith('/admin')||pathname.startsWith('/studio'))return <>{children}</>;return <><Header onMenu={()=>setOpen(true)} logoUrl={logoUrl} profileImageUrl={profileImageUrl}/><Sidebar open={open} close={()=>setOpen(false)}/><main className="min-h-screen px-3 pb-4 pt-20 md:ml-60 md:px-7 lg:px-7">{children}<Footer/></main></>}
