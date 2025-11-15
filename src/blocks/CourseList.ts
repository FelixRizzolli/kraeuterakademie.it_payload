import { link } from '@/fields/link'
import { spacing } from '@/fields/spacing'
import { style } from '@/fields/style'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Block } from 'payload/types'

export const CourseList: Block = {
  slug: 'courseList',
  fields: [
    {
      type: 'group',
      name: 'data',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: false,
        },
        {
          name: 'courses',
          type: 'array',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'place',
              type: 'text',
              required: false,
            },
            {
              name: 'description',
              type: 'richText',
              editor: lexicalEditor({}),
            },
            link,
          ],
        },
      ],
    },
    {
      type: 'group',
      name: 'settings',
      fields: [spacing, style],
    },
  ],
}
