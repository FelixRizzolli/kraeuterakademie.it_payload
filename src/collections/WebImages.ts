import { contentCreatorWritePublicRead } from '@/lib/access'
import { CollectionGroup, CollectionSlug } from '@/lib/constants'
import type { CollectionConfig } from 'payload'

export const WebImages: CollectionConfig = {
  slug: CollectionSlug.WEB_IMAGES,
  labels: {
    singular: {
      en: 'Web Image',
      de: 'Web Bild',
    },
    plural: {
      en: 'Web Images',
      de: 'Web Bilder',
    },
  },
  admin: {
    group: CollectionGroup.WEB_CONTENT,
  },
  access: contentCreatorWritePublicRead,
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: CollectionSlug.WEB_IMAGE_CATEGORIES,
      hasMany: true,
      label: {
        en: 'Category',
        de: 'Kategorie',
      },
    },
  ],
  upload: {
    // Only accept image files
    mimeTypes: [
      'image/jpeg',
      'image/png',
      'image/webp',
      'image/avif',
      'image/gif',
      'image/svg+xml',
    ],
    // Convert the stored "original" to PNG and constrain its width so we don't keep the huge uploads.
    formatOptions: {
      format: 'png',
    },
    resizeOptions: {
      width: 1920,
    },
    imageSizes: [
      {
        name: 'thumbnail_jpeg',
        width: 400,
        height: 300,
        position: 'centre',
        formatOptions: {
          format: 'jpeg',
          options: { quality: 80 },
        },
      },
      {
        name: 'thumbnail_webp',
        width: 400,
        height: 300,
        position: 'centre',
        formatOptions: {
          format: 'webp',
          options: { quality: 80 },
        },
      },
      {
        name: 'thumbnail_avif',
        width: 400,
        height: 300,
        position: 'centre',
        formatOptions: {
          format: 'avif',
          options: { quality: 75 },
        },
      },
      {
        name: 'mobile_jpeg',
        width: 768,
        height: undefined,
        position: 'centre',
        formatOptions: {
          format: 'jpeg',
          options: { quality: 80 },
        },
      },
      {
        name: 'mobile_webp',
        width: 768,
        height: undefined,
        position: 'centre',
        formatOptions: {
          format: 'webp',
          options: { quality: 80 },
        },
      },
      {
        name: 'mobile_avif',
        width: 768,
        height: undefined,
        position: 'centre',
        formatOptions: {
          format: 'avif',
          options: { quality: 75 },
        },
      },
      {
        name: 'tablet_jpeg',
        width: 1024,
        height: undefined,
        position: 'centre',
        formatOptions: {
          format: 'jpeg',
          options: { quality: 80 },
        },
      },
      {
        name: 'tablet_webp',
        width: 1024,
        height: undefined,
        position: 'centre',
        formatOptions: {
          format: 'webp',
          options: { quality: 80 },
        },
      },
      {
        name: 'tablet_avif',
        width: 1024,
        height: undefined,
        position: 'centre',
        formatOptions: {
          format: 'avif',
          options: { quality: 75 },
        },
      },
      {
        name: 'desktop_jpeg',
        width: 1920,
        height: undefined,
        position: 'centre',
        formatOptions: {
          format: 'jpeg',
          options: { quality: 80 },
        },
      },
      {
        name: 'desktop_webp',
        width: 1920,
        height: undefined,
        position: 'centre',
        formatOptions: {
          format: 'webp',
          options: { quality: 80 },
        },
      },
      {
        name: 'desktop_avif',
        width: 1920,
        height: undefined,
        position: 'centre',
        formatOptions: {
          format: 'avif',
          options: { quality: 75 },
        },
      },
    ],
  },
}
