import { Project } from '@/data/projects'
export function VideoTitle({project,className=''}:{project:Project;className?:string}){return <h3 className={className}>{project.title}</h3>}
