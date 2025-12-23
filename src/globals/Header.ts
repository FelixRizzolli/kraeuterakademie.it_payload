import { link } from '@/fields/shared'
import type { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
  slug: 'header',
  label: {
    en: 'Header',
    de: 'Header',
  },
  access: {
    read: () => true,
  },
  fields: [
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
