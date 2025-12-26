import { Field } from 'payload'

export const link: Field = {
  name: 'link',
  label: {
    en: 'Link',
    de: 'Link',
  },
  type: 'group',
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'text',
          label: {
            en: 'Text',
            de: 'Text',
          },
          type: 'text',
        },
        {
          name: 'href',
          label: {
            en: 'URL',
            de: 'URL',
          },
          type: 'text',
        },
        {
          name: 'target',
          enumName: 'link_target_enum',
          label: {
            en: 'Target',
            de: 'Ziel',
          },
          type: 'select',
          options: ['_self', '_blank', '_parent', '_top', '_unfencedTop'],
          defaultValue: '_self',
        },
      ],
    },
  ],
}
