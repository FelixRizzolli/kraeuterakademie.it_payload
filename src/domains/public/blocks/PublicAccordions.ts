import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Block } from 'payload'
import { spacing } from '@/domains/public/fields'
import { style } from '@/domains/public/fields'

export const PublicAccordions: Block = {
  slug: 'public-accordions',
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
