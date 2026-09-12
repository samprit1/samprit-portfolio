export type ProjectType = 'long-form' | 'short-form' | 'motion-design' | 'frame' | 'poster'
export type Project = { id:string; slug:string; title:string; client?:string; year:number; category:string; type:ProjectType; thumbnail:string; videoUrl?:string; videoType?:'youtube'|'vimeo'|'mp4'; duration?:string; views?:string; likes?:number; sortOrder?:number; description?:string; tags?:string[]; accent:string }
// Add a project by duplicating one entry below and replacing its individual videoUrl.
// Supported links: YouTube, Vimeo, or a local MP4 in public/projects (e.g. "/projects/reel.mp4").
const videoKind=(url:string):Project['videoType']=>url.includes('vimeo.com')?'vimeo':url.endsWith('.mp4')?'mp4':'youtube'
const make = (id:string, title:string, client:string, year:number, category:string, type:ProjectType, accent:string, duration?:string, views?:string, videoUrl='https://www.youtube.com/watch?v=dQw4w9WgXcQ'):Project => ({ id, slug:id, title, client, year, category, type, accent, thumbnail:'', duration, views, videoUrl, videoType:videoKind(videoUrl), description:`A carefully crafted ${category.toLowerCase()} piece created for ${client}. Built around pace, atmosphere and detail.`, tags:[category.toLowerCase(), 'editing', 'visual design'] })
export const projects: Project[] = [
 make('drivado-luxury-mobility','Drivado — Luxury Mobility','Drivado',2026,'Commercial','long-form','amber','04:28','12K views','https://youtu.be/3qgH_RlRvgo'),
 make('where-land-meets-water','Where Land Meets Water','Aether Studio',2025,'Travel Film','long-form','ocean','03:16','8.4K views','https://youtu.be/pSP4amQtzdE'),
 make('vanta-after-hours','VANTA / After Hours','VANTA',2025,'Brand Film','long-form','violet','02:42','17K views','https://youtu.be/jKX6LhG2e1g'),
 make('long-form-four','Long-form Project 04','SAMPRIT',2026,'Long-form','long-form','red','03:00','New','https://youtu.be/P1ZOZ5Ut4rA'),
 make('one-minute-escape','One Minute Escape','Wander',2026,'Travel','short-form','sunset','00:31','92K views','https://youtube.com/shorts/AZjDGrtfOGE?feature=share'),
 make('form-in-motion','Form in Motion','NOVA',2025,'Product','short-form','lime','00:18','48K views','https://youtube.com/shorts/zYnNJK5ZvIc?feature=share'),
 make('midnight-ritual','Midnight Ritual','Luna',2025,'Fashion','short-form','pink','00:24','61K views','https://youtube.com/shorts/LFjlso_Rgx4?feature=share'),
 make('signal-motion-reel','Signal / Motion Reel','Signal',2026,'Motion Graphics','motion-design','cyan','01:12','19K views','https://www.youtube.com/watch?v=YOUR_MOTION_1_ID'),
 make('object-form-function','Object / Form / Function','Atelier 17',2025,'3D Motion','motion-design','orange','00:58','11K views','https://www.youtube.com/watch?v=YOUR_MOTION_2_ID'),
 make('weekend-state-of-mind','Weekend State of Mind','Kite',2025,'Title Sequence','motion-design','purple','01:04','22K views','https://www.youtube.com/watch?v=YOUR_MOTION_3_ID'),
 make('quiet-tide','Quiet Tide','Personal',2025,'Cinematic Frame','frame','tide'), make('blue-hour','Blue Hour','Personal',2025,'Cinematic Frame','frame','indigo'), make('last-light','Last Light','Personal',2024,'Cinematic Frame','frame','gold'),
 make('after-dark','After Dark','VANTA',2025,'Poster Design','poster','black'), make('new-world','New World','Aether',2025,'Poster Design','poster','cream'), make('kinetic','Kinetic','Signal',2026,'Poster Design','poster','mint')
]
export const typeLabels:Record<ProjectType,string> = {'long-form':'Long-form','short-form':'Short-form','motion-design':'Motion Design',frame:'My Frames',poster:'Poster Designs'}
