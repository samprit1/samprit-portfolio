import type { Metadata } from 'next'
import './globals.css'
import { AppShell } from '@/components/AppShell'
import { getSiteSettings } from '@/sanity/projects'
export const metadata:Metadata={title:'SAMPRIT — Video Editor • Motion Graphics • Visual Design',description:'Professional video editing, motion graphics and visual design portfolio.',icons:{icon:'/favicon.png',apple:'/favicon.png'}}
export default async function RootLayout({children}:{children:React.ReactNode}){const settings=await getSiteSettings();return <html lang="en" data-theme="dark"><body><AppShell logoUrl={settings.logoUrl} profileImageUrl={settings.profileImageUrl}>{children}</AppShell></body></html>}
