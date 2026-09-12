import { createClient } from '@sanity/client'
// Disable Sanity's CDN so edits made in the editor appear on the public site immediately.
export const sanityClient = createClient({projectId:'vsndp9vh',dataset:'production',apiVersion:'2026-09-08',useCdn:false})
