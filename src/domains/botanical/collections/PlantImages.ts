import type { CollectionConfig } from 'payload'
import { CollectionGroup, CollectionSlug } from '@/lib/constants'
import { administratorWritePublicRead } from '@/lib/access'

export const PlantImages: CollectionConfig = {
  slug: CollectionSlug.PLANT_IMAGES,
  labels: {
    singular: {
      en: 'Plant Image',
      de: 'Pflanzen Bild',
    },
    plural: {
      en: 'Plant Images',
      de: 'Pflanzen Bilder',
    },
  },
  admin: {
    group: CollectionGroup.BOTANICAL,
  },
  access: administratorWritePublicRead,
  fields: [
    {
      name: 'plant',
      type: 'relationship',
      relationTo: CollectionSlug.PLANTS,
      required: true,
      label: {
        en: 'Plant',
        de: 'Pflanze',
      },
      admin: {
        description: {
          en: 'The plant this image belongs to (one plant per image)',
          de: 'Die Pflanze, zu der dieses Bild gehört (ein Bild gehört immer zu genau einer Pflanze)',
        },
      },
    },
    {
      name: 'recognitionFeatures',
      type: 'relationship',
      relationTo: CollectionSlug.PLANT_RECOGNITION_FEATURES,
      hasMany: true,
      label: {
        en: 'Recognition Features',
        de: 'Erkennungsmerkmale',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: {
        en: 'Description',
        de: 'Beschreibung',
      },
    },
  ],
  upload: {
    staticDir: 'data/images/plant-images',
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
