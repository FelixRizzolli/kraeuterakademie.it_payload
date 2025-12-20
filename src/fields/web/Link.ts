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
      name: 'label',
      label: {
        en: 'Label',
        de: 'Label',
      },
      type: 'text',
      required: true,
    },
    {
      name: 'url',
      label: {
        en: 'URL',
        de: 'URL',
      },
      type: 'text',
      required: true,
    },
    {
      name: 'target',
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
