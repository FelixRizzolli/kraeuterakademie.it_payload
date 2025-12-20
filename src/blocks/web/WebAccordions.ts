import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Block } from 'payload'
import { spacing } from '@/fields/web'
import { style } from '@/fields/web'

export const WebAccordions: Block = {
  slug: 'web-accordions',
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
          name: 'title',
          label: {
            en: 'Title',
            de: 'Titel',
          },
          type: 'text',
          required: false,
        },
        {
          name: 'items',
          label: {
            en: 'Accordion Items',
            de: 'Akkordeon Elemente',
          },
          type: 'array',
          fields: [
            {
              name: 'title',
              label: {
                en: 'Accordion Title',
                de: 'Elementtitel',
              },
              type: 'text',
              required: true,
            },
            {
              name: 'content',
              label: {
                en: 'Accordion Content',
                de: 'Elementinhalt',
              },
              type: 'richText',
              editor: lexicalEditor({}),
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
