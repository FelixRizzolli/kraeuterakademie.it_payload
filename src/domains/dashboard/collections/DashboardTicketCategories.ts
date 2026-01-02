import type { CollectionConfig } from 'payload'
import { CollectionGroup, CollectionSlug } from '@/lib/constants'
import { administratorWritePublicRead } from '@/lib/access'

export const DashboardTicketCategories: CollectionConfig = {
  slug: CollectionSlug.DASHBOARD_TICKET_CATEGORIES,
  labels: {
    singular: {
      en: 'Dashboard Ticket Category',
      de: 'Dashboard Ticket Kategorie',
    },
    plural: {
      en: 'Dashboard Ticket Categories',
      de: 'Dashboard Ticket Kategorien',
    },
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title'],
    group: CollectionGroup.DASHBOARD_CONTENT,
  },
  access: administratorWritePublicRead,
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: {
        en: 'Title',
        de: 'Titel',
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
}
