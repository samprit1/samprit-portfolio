'use server'
import { revalidatePath } from 'next/cache'
import { sanityClient } from '@/sanity/client'
export async function incrementLike(id:string){try{const token=process.env.SANITY_API_WRITE_TOKEN;if(!token)throw new Error('Missing write token');const client=sanityClient.withConfig({token,useCdn:false});const result=await client.patch(id).inc({likes:1}).commit();const likes=Number(result.likes||0);revalidatePath('/');revalidatePath(`/watch/${id}`);return {likes}}catch{return {likes:null}}}
