import { spacing } from '@/domains/public/fields'
import { style } from '@/domains/public/fields'
import { Block } from 'payload'

export const PublicAnimatedText: Block = {
  slug: 'public-animated-text',
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
              name: 'text',
              label: {
                en: 'Text',
                de: 'Text',
              },
              type: 'text',
              required: true,
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
