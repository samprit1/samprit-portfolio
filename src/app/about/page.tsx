import { getSiteSettings } from '@/sanity/projects'
import { AboutExperience } from '@/components/AboutExperience'
export default async function About(){const settings=await getSiteSettings();return <div className="mx-auto w-full max-w-[1500px] pt-4"><AboutExperience title={settings.aboutTitle} body={settings.aboutBody} aboutImageUrl={settings.aboutImageUrl || settings.profileImageUrl} contactEnabled={settings.contactEnabled}/></div>}
