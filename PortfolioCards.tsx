'use client'

import { motion } from 'framer-motion'
import { MoreVertical } from 'lucide-react'
import { Project } from '@/data/projects'
import { HoverPreview } from './HoverPreview'
import { ProjectArt } from './ProjectArt'
import { VideoTitle } from './VideoTitle'

const watchHref = (project:Project) => `/watch/${project.slug || project.id}`

export function VideoCard({project}:{project:Project}){return <motion.article initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}}><a href={watchHref(project)} className="focus group block"><div className="aspect-video overflow-hidden rounded-lg bg-[var(--surface2)] transition group-hover:brightness-110"><div className="h-full transition duration-300 group-hover:scale-[1.035]"><HoverPreview project={project}/></div></div><div className="relative pt-2 pr-6"><VideoTitle project={project} className="line-clamp-1 font-semibold leading-5"/><p className="mt-0.5 text-xs text-[var(--muted)]">{project.client} <span className="px-1">•</span> {project.year} <span className="px-1">•</span> {project.category}</p><MoreVertical className="absolute right-0 top-2" size={17}/></div></a></motion.article>}

export function ShortCard({project,compact=false}:{project:Project;compact?:boolean}){return <motion.article initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className={`${compact?'w-[166px] shrink-0 sm:w-[calc((100%-60px)/6)]':'w-full'} min-w-0`}><a href={watchHref(project)} className="focus group block"><div className="relative aspect-[9/16] overflow-hidden rounded-lg border border-[var(--line)]"><div className="h-full transition duration-300 group-hover:scale-[1.035]"><HoverPreview project={project} vertical/></div><p className="pointer-events-none absolute bottom-2 left-2 z-10 text-[11px] font-bold text-white">{project.views}</p><MoreVertical className="pointer-events-none absolute bottom-1.5 right-1 z-10 rounded bg-black/55 p-0.5 text-white" size={20}/></div><VideoTitle project={project} className="mt-2 line-clamp-1 font-semibold"/><p className="mt-0.5 text-xs text-[var(--muted)]">{project.year}</p></a></motion.article>}

export function ArtCard({project}:{project:Project}){const poster=project.type==='poster';return <article><a href={watchHref(project)} className="focus group block"><div className={`${poster?'aspect-[1/1.414]':'aspect-video'} overflow-hidden rounded-lg border border-[var(--line)]`}><div className="h-full transition duration-300 group-hover:scale-[1.035]"><ProjectArt project={project}/></div></div><h3 className="mt-2 font-semibold">{project.title}</h3><p className="text-xs text-[var(--muted)]">{project.client} • {project.year}</p></a></article>}
