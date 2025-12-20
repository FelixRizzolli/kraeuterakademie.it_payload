import { spacing } from '@/fields/web'
import { link } from '@/fields/web'
import { CollectionSlug } from '@/lib/constants'
import { Block } from 'payload'

export const WebHeroSmall: Block = {
  slug: 'web-hero-small',
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
          required: false,
        },
        {
          name: 'title',
          label: {
            en: 'Title',
            de: 'Titel',
          },
          type: 'text',
          required: true,
        },
        link,
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
