import { hasDashboardAccess, isAdministrator } from '@/lib/access'
import { CollectionGroup, CollectionSlug } from '@/lib/constants'
import type { CollectionConfig } from 'payload'

export const DashboardTextBlocks: CollectionConfig = {
  slug: CollectionSlug.DASHBOARD_TEXT_BLOCKS,
  labels: {
    singular: {
      en: 'Dashboard Text Block',
      de: 'Dashboard Textblock',
    },
    plural: {
      en: 'Dashboard Text Blocks',
      de: 'Dashboard Textblöcke',
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
      name: 'slug',
      type: 'text',
      required: true,
    },
    {
      name: 'value',
      type: 'text',
      required: true,
    },
  ],
}
