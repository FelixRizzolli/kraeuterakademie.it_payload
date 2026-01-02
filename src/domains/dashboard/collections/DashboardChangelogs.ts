import { CollectionConfig } from 'payload'
import { CollectionGroup, CollectionSlug } from '@/lib/constants'
import { administratorWritePublicRead } from '@/lib/access'
import { dashboardBlocks } from '@/domains/dashboard/blocks'

export const DashboardChangelogs: CollectionConfig = {
  slug: CollectionSlug.DASHBOARD_CHANGELOGS,
  labels: {
    singular: {
      en: 'Dashboard Changelog',
      de: 'Dashboard Änderungsprotokoll',
    },
    plural: {
      en: 'Dashboard Changelogs',
      de: 'Dashboard Änderungsprotokolle',
    },
  },
  admin: {
    useAsTitle: 'version',
    group: CollectionGroup.DASHBOARD_CONTENT,
  },
  access: administratorWritePublicRead,
  fields: [
    {
      name: 'version',
      label: {
        en: 'Version',
        de: 'Version',
      },
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'releaseDate',
      label: {
        en: 'Release Date',
        de: 'Veröffentlichungsdatum',
      },
      type: 'date',
      required: true,
      admin: {
        position: 'sidebar',
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
