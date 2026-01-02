import { Block } from 'payload'

export const DashboardTextElement: Block = {
  slug: 'dashboard-text-element',
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
    {
      name: 'text',
      label: {
        en: 'Text',
        de: 'Text',
      },
      type: 'text',
      required: true,
    },
  ],
}
