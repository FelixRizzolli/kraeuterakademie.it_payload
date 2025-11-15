import { link } from '@/fields/link'
import { spacing } from '@/fields/spacing'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Block } from 'payload/types'

export const ImageText: Block = {
  slug: 'imageText',
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
