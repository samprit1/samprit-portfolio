'use client'

import { useEffect, useState } from 'react'
import { formatDuration } from '@/lib/utils'
import type { Project } from '@/data/projects'

export function VideoDuration({project}:{project:Project}) {
  const [duration,setDuration] = useState<string | null>(null)

  useEffect(() => {
    const url = project.videoUrl
    if (!url || url.includes('YOUR_')) return
    let cancelled = false

    if (project.videoType === 'mp4') {
      const video = document.createElement('video')
      video.preload = 'metadata'
      video.src = url
      video.onloadedmetadata = () => { if (!cancelled && Number.isFinite(video.duration)) setDuration(formatDuration(video.duration)) }
      return () => { cancelled = true; video.removeAttribute('src'); video.load() }
    }

    fetch(`/api/video-duration?url=${encodeURIComponent(url)}`)
      .then(response => response.ok ? response.json() : null)
      .then(data => { if (!cancelled && data?.duration) setDuration(data.duration) })
      .catch(() => undefined)
    return () => { cancelled = true }
  }, [project.videoType,project.videoUrl])

  if (!duration) return null
  return <span className="video-duration" aria-label={`Duration ${duration}`}>{duration}</span>
}
