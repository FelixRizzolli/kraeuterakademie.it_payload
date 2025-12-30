import { spacing } from '@/fields/web'
import { style } from '@/fields/web'
import { CollectionSlug } from '@/lib/constants'
import { Block } from 'payload'

export const WebSwiperSimple: Block = {
  slug: 'web-swiper-simple',
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
                  required: false,
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
                      relationTo: CollectionSlug.PUBLIC_IMAGES,
                    },
                  ],
                },
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
