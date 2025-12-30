import { link } from '@/fields/shared'
import { contentCreatorWritePublicRead } from '@/lib/access'
import { CollectionGroup, CollectionSlug } from '@/lib/constants'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import type { CollectionConfig } from 'payload'

export const PublicBooks: CollectionConfig = {
  slug: CollectionSlug.PUBLIC_BOOKS,
  labels: {
    singular: {
      en: 'Public Book',
      de: 'Public Buch',
    },
    plural: {
      en: 'Public Books',
      de: 'Public Bücher',
    },
  },
  admin: {
    group: CollectionGroup.PUBLIC_CONTENT,
  },
  access: contentCreatorWritePublicRead,
  fields: [
    {
      name: 'title',
      label: {
        en: 'Title',
        de: 'Titel',
      },
      type: 'text',
      required: true,
    },
    {
      name: 'infos',
      label: {
        en: 'Infos',
        de: 'Infos',
      },
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: {
        en: 'Description',
        de: 'Beschreibung',
      },
      type: 'richText',
      editor: lexicalEditor({}),
    },
    {
      name: 'cover',
      label: {
        en: 'Cover Image',
        de: 'Cover Bild',
      },
      type: 'upload',
      relationTo: CollectionSlug.PUBLIC_IMAGES,
    },
    link,
  ],
  upload: true,
}
