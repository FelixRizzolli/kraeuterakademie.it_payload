import { link } from '@/domains/shared/fields'
import { contentCreatorWritePublicRead } from '@/lib/access'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import type { GlobalConfig } from 'payload'

export const PublicFooter: GlobalConfig = {
  slug: 'public-footer',
  label: {
    en: 'Public Footer',
    de: 'Public Footer',
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
          RowLabel: '@/domains/shared/components/LinkArrayRowLabel#LinkArrayRowLabel',
        },
      },
    },
  ],
}
