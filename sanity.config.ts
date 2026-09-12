'use client'
import { defineConfig, defineField, defineType } from 'sanity'
import { structureTool } from 'sanity/structure'

const project = defineType({
  name: 'project', title: 'Portfolio Project', type: 'document',
  fields: [
    defineField({name:'title', title:'Video / project title', type:'string', validation:r=>r.required()}),
    defineField({name:'slug', title:'Page URL', type:'slug', options:{source:'title'}, validation:r=>r.required()}),
    defineField({name:'client', title:'Client', type:'string'}),
    defineField({name:'year', title:'Year', type:'number'}),
    defineField({name:'category', title:'Category', type:'string'}),
    defineField({name:'type', title:'Portfolio shelf', type:'string', options:{list:[
      {title:'Long-form',value:'long-form'},{title:'Short-form',value:'short-form'},{title:'Motion Design',value:'motion-design'},{title:'My Frames',value:'frame'},{title:'Poster Designs',value:'poster'}
    ]}, validation:r=>r.required()}),
    defineField({name:'thumbnail', title:'Custom thumbnail URL (optional)', type:'url', description:'Paste an image URL to override the YouTube thumbnail.'}),
    defineField({name:'likes', title:'Likes', type:'number', readOnly:true}),
    defineField({name:'sortOrder', title:'Display order', type:'number', description:'Lower numbers appear first within the home page shelves.'}),
    defineField({name:'videoUrl', title:'YouTube, Vimeo, or MP4 link', type:'url'}),
    defineField({name:'videoType', title:'Video service', type:'string', options:{list:['youtube','vimeo','mp4']}}),
    defineField({name:'duration', title:'Duration shown on card', type:'string', readOnly:true, description:'Calculated from the linked video automatically.'}),
    defineField({name:'views', title:'Views shown on card', type:'string'}),
    defineField({name:'description', title:'Project description', type:'text', rows:5}),
    defineField({name:'tags', title:'Tags', type:'array', of:[{type:'string'}]}),
    defineField({name:'accent', title:'Fallback artwork color', type:'string', options:{list:['amber','ocean','violet','sunset','lime','pink','cyan','orange','purple','tide','indigo','gold','black','cream','mint']}}),
  ],
  preview:{select:{title:'title',subtitle:'type'}}
})
const siteSettings = defineType({name:'siteSettings',title:'Site Settings',type:'document',fields:[
  defineField({name:'name',title:'Name',type:'string'}), defineField({name:'handle',title:'Handle',type:'string'}), defineField({name:'role',title:'Role line',type:'string'}), defineField({name:'bio',title:'Homepage bio',type:'text'}), defineField({name:'channelSubtitle',title:'Homepage channel subtitle',type:'string'}), defineField({name:'aboutTitle',title:'About page title',type:'string'}), defineField({name:'aboutBody',title:'About page text',type:'text'}), defineField({name:'contactTitle',title:'Contact page title',type:'string'}), defineField({name:'contactBody',title:'Contact page text',type:'text'}), defineField({name:'logoUrl',title:'Logo image URL',type:'url'}), defineField({name:'profileImageUrl',title:'Profile image URL',type:'url'}), defineField({name:'heroBackgroundUrl',title:'Homepage hero background URL',type:'url'}), defineField({name:'aboutImageUrl',title:'About page image URL',type:'url'}), defineField({name:'email',title:'Email',type:'string'}), defineField({name:'instagram',title:'Instagram URL',type:'url'}), defineField({name:'youtube',title:'YouTube URL',type:'url'}), defineField({name:'behance',title:'Behance URL',type:'url'}), defineField({name:'linkedin',title:'LinkedIn URL',type:'url'})
]})

export default defineConfig({name:'default',title:'Samprit Portfolio Editor',projectId:'vsndp9vh',dataset:'production',basePath:'/studio',plugins:[structureTool()],schema:{types:[project,siteSettings]}})
