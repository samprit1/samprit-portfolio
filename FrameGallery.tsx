'use client'
import type { Project } from '@/data/projects'
import { MediaMarquee } from './MediaMarquee'
export function FrameGallery({projects}:{projects:Project[]}){return <MediaMarquee projects={projects} kind="frame"/>}
