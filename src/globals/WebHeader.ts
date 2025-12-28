import { link } from '@/fields/shared'
import type { GlobalConfig } from 'payload'

export const WebHeader: GlobalConfig = {
  slug: 'web-header',
  label: {
    en: 'Web Header',
    de: 'Web Header',
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
