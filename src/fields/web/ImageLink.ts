import { CollectionSlug } from '@/lib/constants'
import { GroupField } from 'payload'

export const imageLink: GroupField = {
  name: 'image-link',
  type: 'group',
  fields: [
    {
      name: 'text',
      label: {
        en: 'Text',
        de: 'Text',
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
      name: 'image',
      label: {
        en: 'Image',
        de: 'Bild',
      },
      type: 'upload',
      relationTo: CollectionSlug.PUBLIC_IMAGES,
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
