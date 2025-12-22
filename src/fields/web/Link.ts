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
      name: 'text',
      label: {
        en: 'Label',
        de: 'Label',
      },
      type: 'text',
      required: true,
    },
    {
      name: 'href',
      label: {
        en: 'URL',
        de: 'URL',
      },
      type: 'text',
      required: true,
    },
    {
      name: 'target',
      enumName: 'link_target_enum',
      label: {
        en: 'Target',
        de: 'Ziel',
      },
      type: 'select',
      options: ['_self', '_blank'],
      defaultValue: '_self',
    },
  ],
}
