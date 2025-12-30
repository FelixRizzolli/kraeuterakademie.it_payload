import { link } from '@/fields/shared'
import type { GlobalConfig } from 'payload'

export const PublicHeader: GlobalConfig = {
  slug: 'public-header',
  label: {
    en: 'Public Header',
    de: 'Public Header',
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
