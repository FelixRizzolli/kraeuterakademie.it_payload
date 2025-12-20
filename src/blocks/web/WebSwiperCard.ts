import { link } from '@/fields/web'
import { spacing } from '@/fields/web'
import { style } from '@/fields/web'
import { CollectionSlug } from '@/lib/constants'
import { Block } from 'payload'

export const WebSwiperCard: Block = {
  slug: 'web-swiper-card',
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
          name: 'cards',
          label: {
            en: 'Cards',
            de: 'Karten',
          },
          type: 'array',
          fields: [
            {
              name: 'image',
              label: {
                en: 'Image',
                de: 'Bild',
              },
              type: 'upload',
              relationTo: CollectionSlug.WEB_MEDIA,
            },
            {
              name: 'info',
              label: {
                en: 'Info',
                de: 'Info',
              },
              type: 'text',
            },
            {
              name: 'date',
              label: {
                en: 'Date',
                de: 'Datum',
              },
              type: 'date',
            },
            {
              name: 'title',
              label: {
                en: 'Title',
                de: 'Titel',
              },
              type: 'text',
            },
            link,
          ],
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
      fields: [spacing, style],
    },
  ],
}
