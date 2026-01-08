import { Block } from 'payload'

export const DashboardTitleElement: Block = {
  slug: 'dashboard-title-element',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          name: 'content',
          label: {
            en: 'Content',
            de: 'Inhalt',
          },
          fields: [
            {
              name: 'icon',
              label: {
                en: 'Lucide Icon Name',
                de: 'Lucide Icon Name',
              },
              type: 'text',
              required: false,
            },
            {
              name: 'title',
              label: {
                en: 'Title',
                de: 'Titel',
              },
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'settings',
          label: {
            en: 'Settings',
            de: 'Einstellungen',
          },
          fields: [],
        },
      ],
    },
  ],
}
