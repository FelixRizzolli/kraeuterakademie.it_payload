import { Field } from 'payload'

export const style: Field = {
  name: 'style',
  label: {
    en: 'Style',
    de: 'Stil',
  },
  type: 'select',
  enumName: 'style_enum',
  options: [
    {
      label: {
        en: 'Light',
        de: 'Hell',
      },
      value: 'light',
    },
    {
      label: {
        en: 'Gray',
        de: 'Grau',
      },
      value: 'gray',
    },
    {
      label: {
        en: 'Dark',
        de: 'Dunkel',
      },
      value: 'dark',
    },
  ],
  defaultValue: 'light',
  required: true,
}
