import { administratorWritePublicRead } from '@/lib/access'
import { CollectionSlug } from '@/lib/constants'
import type { GlobalConfig } from 'payload'

export const DashboardGlobals: GlobalConfig = {
  slug: 'dashboard-globals',
  label: {
    en: 'Dashboard Globals',
    de: 'Dashboard Globals',
  },
  access: administratorWritePublicRead,
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: {
            en: 'Auth',
            de: 'Auth',
          },
          fields: [
            {
              name: 'loginImage',
              label: {
                en: 'Login Image URL',
                de: 'Login Bild URL',
              },
              type: 'upload',
              hasMany: false,
              relationTo: CollectionSlug.DASHBOARD_IMAGES,
            },
            {
              name: 'registerImage',
              label: {
                en: 'Register Image URL',
                de: 'Registrieren Bild URL',
              },
              type: 'upload',
              hasMany: false,
              relationTo: CollectionSlug.DASHBOARD_IMAGES,
            },
          ],
        },
      ],
    },
  ],
}
