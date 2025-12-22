import { link } from '@/fields/shared'
import { contentCreatorWritePublicRead } from '@/lib/access'
import { CollectionGroup, CollectionSlug } from '@/lib/constants'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import type { CollectionConfig } from 'payload'

export const WebBooks: CollectionConfig = {
  slug: CollectionSlug.WEB_BOOKS,
  labels: {
    singular: {
      en: 'Web Book',
      de: 'Web Buch',
    },
    plural: {
      en: 'Web Books',
      de: 'Web Bücher',
    },
  },
  admin: {
    group: CollectionGroup.WEB_CONTENT,
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
      relationTo: CollectionSlug.WEB_MEDIA,
    },
    link,
  ],
  upload: true,
}
