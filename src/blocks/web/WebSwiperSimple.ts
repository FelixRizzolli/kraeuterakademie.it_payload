import { spacing } from '@/fields/web'
import { style } from '@/fields/web'
import { CollectionSlug } from '@/lib/constants'
import { Block } from 'payload'

export const WebSwiperSimple: Block = {
  slug: 'web-swiper-simple',
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
          name: 'slides',
          label: {
            en: 'Slides',
            de: 'Folien',
          },
          type: 'array',
          fields: [
            {
              name: 'title',
              label: {
                en: 'Title',
                de: 'Titel',
              },
              type: 'text',
            },
            {
              name: 'images',
              label: {
                en: 'Images',
                de: 'Bilder',
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
              ],
            },
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
