import { spacing } from '@/fields/web'
import { link } from '@/fields/shared'
import { CollectionSlug } from '@/lib/constants'
import { Block } from 'payload'

export const PublicHeroSmall: Block = {
  slug: 'public-hero-small',
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
