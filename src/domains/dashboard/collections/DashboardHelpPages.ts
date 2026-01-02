import { CollectionConfig } from 'payload'
import { CollectionGroup, CollectionSlug } from '@/lib/constants'
import { administratorWritePublicRead } from '@/lib/access'
import { dashboardBlocks } from '@/domains/dashboard/blocks'

export const DashboardHelpPages: CollectionConfig = {
  slug: CollectionSlug.DASHBOARD_HELP_PAGES,
  labels: {
    singular: {
      en: 'Dashboard Help Page',
      de: 'Dashboard Hilfeseite',
    },
    plural: {
      en: 'Dashboard Help Pages',
      de: 'Dashboard Hilfeseiten',
    },
  },
  admin: {
    useAsTitle: 'title',
    group: CollectionGroup.DASHBOARD_CONTENT,
  },
  access: administratorWritePublicRead,
  fields: [
    {
      name: 'title',
      label: {
        en: 'Title',
        de: 'Titel',
      },
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'slug',
      label: {
        en: 'Slug',
        de: 'Slug',
      },
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [
          ({ value, operation }) => {
            if (operation === 'create' && !value) {
              // Auto-generate slug on create if not provided
              return 'new-page'
            }
            return value
          },
        ],
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: {
            en: 'Content',
            de: 'Inhalt',
          },
          fields: [
            {
              name: 'blocks',
              type: 'blocks',
              blocks: dashboardBlocks,
              required: false,
            },
          ],
        },
      ],
    },
  ],
}
