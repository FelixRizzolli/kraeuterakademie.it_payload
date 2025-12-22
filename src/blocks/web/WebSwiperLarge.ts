import { spacing } from '@/fields/web'
import { style } from '@/fields/web'
import { link } from '@/fields/shared'
import { CollectionSlug } from '@/lib/constants'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Block } from 'payload'

export const WebSwiperLarge: Block = {
  slug: 'web-swiper-large',
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
                en: 'Heading',
                de: 'Titel',
              },
              type: 'text',
            },
            {
              name: 'items',
              label: {
                en: 'Items',
                de: 'Elemente',
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
                  name: 'infos',
                  label: {
                    en: 'Infos',
                    de: 'Infos',
                  },
                  type: 'text',
                },
                {
                  name: 'title',
                  label: {
                    en: 'Title',
                    de: 'Titel',
                  },
                  type: 'text',
                },
                {
                  name: 'description',
                  label: {
                    en: 'Description',
                    de: 'Beschreibung',
                  },
                  type: 'richText',
                  editor: lexicalEditor({}),
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
