import { spacing } from '@/fields/web'
import { CollectionSlug } from '@/lib/constants'
import { Block } from 'payload'

export const WebHeroLarge: Block = {
  slug: 'web-hero-large',
  fields: [
    {
      type: 'group',
      name: 'data',
      label: {
        en: 'Data',
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
          relationTo: CollectionSlug.WEB_MEDIA,
          required: true,
        },
        {
          name: 'title',
          label: {
            en: 'Title',
            de: 'Titel',
          },
          required: true,
          type: 'text',
        },
      ],
    },
    {
      type: 'group',
      name: 'settings',
      label: {
        en: 'Settings',
        de: 'Einstellungen',
      },
      fields: [spacing],
    },
  ],
}
