import { hasDashboardAccess, isAdministrator } from '@/lib/access'
import { CollectionGroup, CollectionSlug } from '@/lib/constants'
import type { CollectionConfig } from 'payload'

export const DashboardImages: CollectionConfig = {
  slug: CollectionSlug.DASHBOARD_IMAGES,
  labels: {
    singular: {
      en: 'Dashboard Image',
      de: 'Dashboard Bild',
    },
    plural: {
      en: 'Dashboard Images',
      de: 'Dashboard Bilder',
    },
  },
  admin: {
    group: CollectionGroup.DASHBOARD_CONTENT,
  },
  access: {
    read: hasDashboardAccess,
    create: isAdministrator,
    update: isAdministrator,
    delete: isAdministrator,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    staticDir: 'data/images/dashboard-images',
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
