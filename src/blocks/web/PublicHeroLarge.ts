import { spacing } from '@/fields/web'
import { CollectionSlug } from '@/lib/constants'
import { Block } from 'payload'

export const PublicHeroLarge: Block = {
  slug: 'public-hero-large',
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
              relationTo: CollectionSlug.PUBLIC_IMAGES,
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
          name: 'settings',
          label: {
            en: 'Settings',
            de: 'Einstellungen',
          },
          fields: [spacing],
        },
      ],
    },
  ],
}
