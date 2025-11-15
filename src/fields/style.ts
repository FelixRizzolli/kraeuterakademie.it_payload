import { Field } from 'payload'

export const style: Field = {
  name: 'style',
  type: 'select',
  enumName: 'style_enum',
  options: [
    { label: 'Light', value: 'light' },
    { label: 'Gray', value: 'gray' },
    { label: 'Dark', value: 'dark' },
  ],
  defaultValue: 'light',
  required: true,
}
