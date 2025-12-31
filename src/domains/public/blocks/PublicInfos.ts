import { spacing } from '@/domains/public/fields'
import { style } from '@/domains/public/fields'
import { link } from '@/domains/shared/fields'
import { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const PublicInfos: Block = {
  slug: 'public-infos',
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
              name: 'infos',
              label: {
                en: 'Infos',
                de: 'Infos',
              },
              type: 'array',
              fields: [
                {
                  type: 'group',
                  required: true,
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
                      name: 'text',
                      label: {
                        en: 'Text',
                        de: 'Text',
                      },
                      type: 'richText',
                      editor: lexicalEditor({}),
                      required: false,
                    },
                  ],
                },
              ],
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
          fields: [spacing, style],
        },
      ],
    },
  ],
}
