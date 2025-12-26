import { contentCreatorWritePublicRead } from '@/lib/access'
import type { Field, GlobalConfig } from 'payload'

const contactLink: Field = {
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
      ],
    },
  ],
}

export const Contact: GlobalConfig = {
  slug: 'contact',
  label: {
    en: 'Contact',
    de: 'Kontakt',
  },
  access: contentCreatorWritePublicRead,
  fields: [
    {
      type: 'group',
      label: {
        en: 'Contact Person',
        de: 'Kontaktperson',
      },
      fields: [
        {
          name: 'name',
          label: {
            en: 'Name',
            de: 'Name',
          },
          type: 'text',
        },
      ],
    },
    {
      ...contactLink,
      name: 'phone',
      label: {
        en: 'Phone',
        de: 'Telefon',
      },
    },
    {
      ...contactLink,
      name: 'mail',
      label: {
        en: 'Email',
        de: 'E-Mail',
      },
    },
    {
      name: 'address',
      label: {
        en: 'Address',
        de: 'Adresse',
      },
      type: 'group',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'place',
              label: {
                en: 'Place',
                de: 'Ort',
              },
              type: 'text',
            },
            {
              name: 'street',
              label: {
                en: 'Street',
                de: 'Straße',
              },
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
}
