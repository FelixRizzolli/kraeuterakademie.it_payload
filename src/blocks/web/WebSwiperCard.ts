import { link } from '@/fields/shared'
import { spacing } from '@/fields/web'
import { style } from '@/fields/web'
import { CollectionSlug } from '@/lib/constants'
import { Block } from 'payload'

export const WebSwiperCard: Block = {
  slug: 'web-swiper-card',
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
                  relationTo: CollectionSlug.PUBLIC_IMAGES,
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
          name: 'settings',
          label: {
            en: 'Settings',
            de: 'Einstellungen',
          },
          fields: [spacing, style],
        },
      ],
    },
  ],
}
