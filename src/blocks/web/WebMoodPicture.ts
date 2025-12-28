import { spacing } from '@/fields/web'
import { style } from '@/fields/web'
import { CollectionSlug } from '@/lib/constants'
import { Block } from 'payload'

export const WebMoodPicture: Block = {
  slug: 'web-mood-picture',
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
              relationTo: CollectionSlug.WEB_IMAGES,
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
