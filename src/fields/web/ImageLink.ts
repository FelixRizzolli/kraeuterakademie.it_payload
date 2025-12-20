import { CollectionSlug } from '@/lib/constants'
import { GroupField } from 'payload'

export const imageLink: GroupField = {
  name: 'image-link',
  type: 'group',
  fields: [
    { name: 'label', type: 'text', required: true },
    { name: 'url', type: 'text', required: true },
    { name: 'image', type: 'upload', relationTo: CollectionSlug.WEB_MEDIA, required: true },
    { name: 'target', type: 'select', options: ['_self', '_blank'], defaultValue: '_self' },
  ],
}
