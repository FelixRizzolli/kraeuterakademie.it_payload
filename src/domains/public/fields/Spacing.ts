import { GroupField } from 'payload'

export const spacing: GroupField = {
  type: 'group',
  name: 'spacing',
  label: {
    en: 'Spacing',
    de: 'Abstände',
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'marginTop',
          label: {
            en: 'Margin Top',
            de: 'Abstand Oben',
          },
          type: 'select',
          enumName: 'spacing_enum',
          options: [
            {
              label: {
                en: 'None',
                de: 'Kein',
              },
              value: 'none',
            },
            {
              label: {
                en: 'Small',
                de: 'Klein',
              },
              value: 'small',
            },
            {
              label: {
                en: 'Medium',
                de: 'Mittel',
              },
              value: 'medium',
            },
            {
              label: {
                en: 'Large',
                de: 'Groß',
              },
              value: 'large',
            },
            {
              label: {
                en: 'XLarge',
                de: 'Sehr Groß',
              },
              value: 'xlarge',
            },
          ],
          defaultValue: 'none',
          required: true,
        },
        {
          name: 'marginBottom',
          label: {
            en: 'Margin Bottom',
            de: 'Abstand Unten',
          },
          type: 'select',
          enumName: 'spacing_enum',
          options: [
            {
              label: {
                en: 'None',
                de: 'Kein',
              },
              value: 'none',
            },
            {
              label: {
                en: 'Small',
                de: 'Klein',
              },
              value: 'small',
            },
            {
              label: {
                en: 'Medium',
                de: 'Mittel',
              },
              value: 'medium',
            },
            {
              label: {
                en: 'Large',
                de: 'Groß',
              },
              value: 'large',
            },
            {
              label: {
                en: 'XLarge',
                de: 'Sehr Groß',
              },
              value: 'xlarge',
            },
          ],
          defaultValue: 'large',
          required: true,
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'paddingTop',
          label: {
            en: 'Padding Top',
            de: 'Innenabstand Oben',
          },
          type: 'select',
          enumName: 'spacing_enum',
          options: [
            {
              label: {
                en: 'None',
                de: 'Kein',
              },
              value: 'none',
            },
            {
              label: {
                en: 'Small',
                de: 'Klein',
              },
              value: 'small',
            },
            {
              label: {
                en: 'Medium',
                de: 'Mittel',
              },
              value: 'medium',
            },
            {
              label: {
                en: 'Large',
                de: 'Groß',
              },
              value: 'large',
            },
            {
              label: {
                en: 'XLarge',
                de: 'Sehr Groß',
              },
              value: 'xlarge',
            },
          ],
          defaultValue: 'none',
          required: true,
        },
        {
          name: 'paddingBottom',
          label: {
            en: 'Padding Bottom',
            de: 'Innenabstand Unten',
          },
          type: 'select',
          enumName: 'spacing_enum',
          options: [
            {
              label: {
                en: 'None',
                de: 'Kein',
              },
              value: 'none',
            },
            {
              label: {
                en: 'Small',
                de: 'Klein',
              },
              value: 'small',
            },
            {
              label: {
                en: 'Medium',
                de: 'Mittel',
              },
              value: 'medium',
            },
            {
              label: {
                en: 'Large',
                de: 'Groß',
              },
              value: 'large',
            },
            {
              label: {
                en: 'XLarge',
                de: 'Sehr Groß',
              },
              value: 'xlarge',
            },
          ],
          defaultValue: 'none',
          required: true,
        },
      ],
    },
  ],
}
