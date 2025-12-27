import { link } from '@/fields/shared'
import type { GlobalConfig, GroupField, RowField } from 'payload'

export const Sidebar: GlobalConfig = {
  slug: 'sidebar',
  label: {
    en: 'Sidebar',
    de: 'Seitenleiste',
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
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'icon',
              label: {
                en: 'Icon',
                de: 'Icon',
              },
              type: 'text',
            },
            ...((link as GroupField)?.fields?.[0] as RowField)?.fields,
          ],
        },
      ],
      admin: {
        components: {
          RowLabel: '@/components/admin/LinkArrayRowLabel#LinkArrayRowLabel',
        },
      },
    },
    {
      name: 'logoLink',
      label: {
        en: 'Logo Link',
        de: 'Logo Link',
      },
      type: 'group',
      fields: link.type === 'group' ? link.fields : [],
    },
  ],
}
