import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { getPortfolioProjects, getSiteSettings } from '@/sanity/projects'
import { Editor } from './Editor'
export default async function EditorPage(){if(!process.env.ADMIN_PASSWORD||cookies().get('samprit-admin')?.value!==process.env.ADMIN_PASSWORD)redirect('/admin');const [projects,settings]=await Promise.all([getPortfolioProjects(),getSiteSettings()]);return <Editor projects={projects} settings={settings}/>}
