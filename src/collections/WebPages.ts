import { CollectionConfig } from 'payload'
import { webBlocks } from '../blocks/web'
import { CollectionGroup, CollectionSlug } from '@/lib/constants'
import { contentCreatorWritePublicRead } from '@/lib/access'
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

export const WebPages: CollectionConfig = {
  slug: CollectionSlug.WEB_PAGES,
  labels: {
    singular: {
      en: 'Web Page',
      de: 'Web Seite',
    },
    plural: {
      en: 'Web Pages',
      de: 'Web Seiten',
    },
  },
  admin: {
    useAsTitle: 'title',
    group: CollectionGroup.WEB_CONTENT,
  },
  access: contentCreatorWritePublicRead,
  fields: [
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
              blocks: webBlocks,
              required: false,
            },
          ],
        },
        {
          label: {
            en: 'SEO',
            de: 'SEO',
          },
          fields: [
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaDescriptionField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: CollectionSlug.WEB_MEDIA,
            }),
            PreviewField({
              hasGenerateFn: true,
            }),
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
          ],
        },
      ],
    },
  ],
}
