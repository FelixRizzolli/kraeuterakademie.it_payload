import { link } from '@/fields/shared'
import { contentCreatorWritePublicRead } from '@/lib/access'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import type { GlobalConfig } from 'payload'

export const WebFooter: GlobalConfig = {
  slug: 'web-footer',
  label: {
    en: 'Web Footer',
    de: 'Web Footer',
  },
  access: contentCreatorWritePublicRead,
  fields: [
    {
      name: 'text1',
      label: {
        en: 'Text 1',
        de: 'Text 1',
      },
      type: 'richText',
      editor: lexicalEditor({}),
    },
    {
      name: 'text2',
      label: {
        en: 'Text 2',
        de: 'Text 2',
      },
      type: 'richText',
      editor: lexicalEditor({}),
    },
    {
      name: 'links',
      label: {
        en: 'Links',
        de: 'Links',
      },
      type: 'array',
      fields: link.type === 'group' ? link.fields : [],
      admin: {
        components: {
          RowLabel: '@/components/admin/LinkArrayRowLabel#LinkArrayRowLabel',
        },
      },
    },
  ],
}
