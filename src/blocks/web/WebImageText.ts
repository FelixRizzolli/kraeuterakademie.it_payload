import { link } from '@/fields/web'
import { spacing } from '@/fields/web'
import { CollectionSlug } from '@/lib/constants'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Block } from 'payload'

export const WebImageText: Block = {
  slug: 'web-image-text',
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
            },
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
              name: 'textTop',
              label: {
                en: 'Text Top',
                de: 'Text Oben',
              },
              type: 'richText',
              editor: lexicalEditor({}),
            },
            {
              name: 'textHighlight',
              label: {
                en: 'Text Highlight',
                de: 'Text Hervorhebung',
              },
              type: 'text',
            },
            {
              name: 'textBottom',
              label: {
                en: 'Text Bottom',
                de: 'Text Unten',
              },
              type: 'richText',
              editor: lexicalEditor({}),
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
