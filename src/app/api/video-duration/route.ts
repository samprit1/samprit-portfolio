import { NextResponse } from 'next/server'
import { formatDuration, getYoutubeId } from '@/lib/utils'

export const revalidate = 3600

function vimeoId(url:string) { return url.match(/vimeo\.com\/(?:video\/)?(\d+)/)?.[1] }

export async function GET(request:Request) {
  const rawUrl = new URL(request.url).searchParams.get('url') || ''
  let source:URL
  try { source = new URL(rawUrl) } catch { return NextResponse.json({error:'Invalid video URL'}, {status:400}) }

  const hostname = source.hostname.replace(/^www\./, '')
  const youtube = hostname === 'youtube.com' || hostname === 'youtu.be' || hostname === 'm.youtube.com'
  const vimeo = hostname === 'vimeo.com' || hostname === 'player.vimeo.com'
  if (!youtube && !vimeo) return NextResponse.json({error:'Unsupported video host'}, {status:400})

  try {
    const id = youtube ? getYoutubeId(rawUrl) : vimeoId(rawUrl)
    if (!id) return NextResponse.json({error:'Video ID not found'}, {status:400})
    const pageUrl = youtube ? `https://www.youtube.com/watch?v=${id}&hl=en&gl=US` : `https://vimeo.com/${id}`
    const response = await fetch(pageUrl, {headers:{'User-Agent':'Mozilla/5.0','Accept-Language':'en-US,en;q=0.9'}, next:{revalidate:86400}})
    if (!response.ok) return NextResponse.json({error:'Video metadata unavailable'}, {status:502})
    const html = await response.text()
    const match = youtube ? html.match(/"lengthSeconds"\s*:\s*"?(\d+)"?/) : html.match(/"duration"\s*:\s*(\d+)/)
    if (!match) return NextResponse.json({error:'Duration unavailable'}, {status:404})
    return NextResponse.json({duration:formatDuration(Number(match[1]))}, {headers:{'Cache-Control':'public, max-age=3600, stale-while-revalidate=86400'}})
  } catch { return NextResponse.json({error:'Could not read video metadata'}, {status:502}) }
}
