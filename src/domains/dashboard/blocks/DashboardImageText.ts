import { CollectionSlug } from '@/lib/constants'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Block } from 'payload'

export const DashboardImageText: Block = {
  slug: 'dashboard-image-text',
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
              name: 'title',
              label: {
                en: 'Title',
                de: 'Titel',
              },
              type: 'text',
              required: false,
            },
            {
              name: 'image',
              label: {
                en: 'Image',
                de: 'Bild',
              },
              type: 'upload',
              relationTo: CollectionSlug.DASHBOARD_IMAGES,
            },
            {
              name: 'text',
              label: {
                en: 'Text',
                de: 'Text',
              },
              type: 'richText',
              editor: lexicalEditor({}),
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
