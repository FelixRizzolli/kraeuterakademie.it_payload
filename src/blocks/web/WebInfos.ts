import { spacing } from '@/fields/web'
import { style } from '@/fields/web'
import { link } from '@/fields/shared'
import { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const WebInfos: Block = {
  slug: 'web-infos',
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
