import { GroupField } from 'payload'

export const imageLink: GroupField = {
  name: 'image-link',
  type: 'group',
  fields: [
    { name: 'label', type: 'text', required: true },
    { name: 'url', type: 'text', required: true },
    { name: 'image', type: 'upload', relationTo: 'media', required: true },
  ],
}
