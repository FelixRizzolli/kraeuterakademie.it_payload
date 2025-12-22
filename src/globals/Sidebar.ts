import { link } from '@/fields/shared'
import type { GlobalConfig } from 'payload'

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
          name: 'href',
          label: {
            en: 'URL',
            de: 'URL',
          },
          type: 'text',
        },
        {
          name: 'text',
          label: {
            en: 'Text',
            de: 'Text',
          },
          type: 'text',
        },
        {
          name: 'target',
          enumName: 'sidebar_link_target_enum',
          label: {
            en: 'Target',
            de: 'Ziel',
          },
          type: 'select',
          options: ['_self', '_blank'],
          defaultValue: '_self',
        },
      ],
    },
    {
      name: 'logoLink',
      label: {
        en: 'Logo Link',
        de: 'Logo Link',
      },
      type: 'group',
      fields: [
        {
          name: 'href',
          label: {
            en: 'URL',
            de: 'URL',
          },
          type: 'text',
        },
        {
          name: 'text',
          label: {
            en: 'Text',
            de: 'Text',
          },
          type: 'text',
        },
        {
          name: 'target',
          enumName: 'sidebar_logo_target_enum',
          label: {
            en: 'Target',
            de: 'Ziel',
          },
          type: 'select',
          options: ['_self', '_blank'],
          defaultValue: '_self',
        },
      ],
    },
  ],
}
