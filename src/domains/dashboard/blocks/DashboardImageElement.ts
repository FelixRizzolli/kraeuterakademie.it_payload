import { CollectionSlug } from '@/lib/constants'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Block } from 'payload'

export const DashboardImageElement: Block = {
  slug: 'dashboard-image-element',
  fields: [
    {
      name: 'image',
      label: {
        en: 'Image',
        de: 'Bild',
      },
      type: 'upload',
      relationTo: CollectionSlug.DASHBOARD_IMAGES,
    },
  ],
}
