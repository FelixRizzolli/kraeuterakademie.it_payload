import { link } from '@/fields/web'
import { spacing } from '@/fields/web'
import { style } from '@/fields/web'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Block } from 'payload'

export const WebCourseList: Block = {
  slug: 'web-course-list',
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
