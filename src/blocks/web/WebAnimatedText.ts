import { spacing } from '@/fields/web'
import { style } from '@/fields/web'
import { Block } from 'payload'

export const WebAnimatedText: Block = {
  slug: 'web-animatedText',
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
