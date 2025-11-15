import { GroupField } from 'payload'

export const spacing: GroupField = {
  type: 'group',
  name: 'spacing',
  fields: [
    {
      name: 'marginTop',
      type: 'select',
      dbName: 'mt',
      enumName: 'spacing_enum',
      options: [
        { label: 'None', value: 'none' },
        { label: 'Small', value: 'small' },
        { label: 'Medium', value: 'medium' },
        { label: 'Large', value: 'large' },
        { label: 'XLarge', value: 'xlarge' },
      ],
      defaultValue: 'none',
      required: true,
    },
    {
      name: 'marginBottom',
      type: 'select',
      dbName: 'mb',
      enumName: 'spacing_enum',
      options: [
        { label: 'None', value: 'none' },
        { label: 'Small', value: 'small' },
        { label: 'Medium', value: 'medium' },
        { label: 'Large', value: 'large' },
        { label: 'XLarge', value: 'xlarge' },
      ],
      defaultValue: 'large',
      required: true,
    },
    {
      name: 'paddingTop',
      type: 'select',
      dbName: 'pt',
      enumName: 'spacing_enum',
      options: [
        { label: 'None', value: 'none' },
        { label: 'Small', value: 'small' },
        { label: 'Medium', value: 'medium' },
        { label: 'Large', value: 'large' },
        { label: 'XLarge', value: 'xlarge' },
      ],
      defaultValue: 'none',
      required: true,
    },
    {
      name: 'paddingBottom',
      type: 'select',
      dbName: 'pb',
      enumName: 'spacing_enum',
      options: [
        { label: 'None', value: 'none' },
        { label: 'Small', value: 'small' },
        { label: 'Medium', value: 'medium' },
        { label: 'Large', value: 'large' },
        { label: 'XLarge', value: 'xlarge' },
      ],
      defaultValue: 'none',
      required: true,
    },
  ],
}
