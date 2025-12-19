import { Field } from 'payload'

export const link: Field = {
  name: 'link',
  type: 'group',
  fields: [
    { name: 'label', type: 'text', required: true },
    { name: 'url', type: 'text', required: true },
    { name: 'target', type: 'select', options: ['_self', '_blank'], defaultValue: '_self' },
  ],
}
