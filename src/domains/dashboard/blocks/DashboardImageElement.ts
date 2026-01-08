import { CollectionSlug } from '@/lib/constants'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Block } from 'payload'

export const DashboardImageElement: Block = {
  slug: 'dashboard-image-element',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          name: 'content',
          label: {
            en: 'Content',
            de: 'Inhalt',
          },
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
        },
        {
          name: 'settings',
          label: {
            en: 'Settings',
            de: 'Einstellungen',
          },
          fields: [],
        },
      ],
    },
  ],
}
