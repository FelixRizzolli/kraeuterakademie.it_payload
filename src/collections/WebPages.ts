import { CollectionConfig, TextField } from 'payload'
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
    MetaTitleField({
      hasGenerateFn: true,
      overrides: {
        admin: {
          ...MetaTitleField({}).admin,
          position: 'sidebar',
        },
      },
    }),
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
