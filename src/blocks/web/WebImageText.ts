import { link } from '@/fields/web'
import { spacing } from '@/fields/web'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Block } from 'payload'

export const WebImageText: Block = {
  slug: 'web-image-text',
  fields: [
    {
      type: 'group',
      name: 'data',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'textTop',
          type: 'richText',
          editor: lexicalEditor({}),
        },
        {
          name: 'textHighlight',
          type: 'text',
        },
        {
          name: 'textBottom',
          type: 'richText',
          editor: lexicalEditor({}),
        },
        link,
      ],
    },
    {
      type: 'group',
      name: 'settings',
      fields: [spacing],
    },
  ],
}
