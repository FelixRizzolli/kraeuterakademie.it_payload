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
            {
              name: 'keywords',
              label: {
                en: 'Keywords',
                de: 'Schlüsselwörter',
              },
              type: 'text',
              hasMany: true,
              admin: {
                description: {
                  en: 'Relevant keywords for this page (one per line)',
                  de: 'Relevante Schlüsselwörter für diese Seite (eines pro Zeile)',
                },
              },
            },
            {
              name: 'noIndex',
              label: {
                en: 'No Index',
                de: 'Nicht indexieren',
              },
              type: 'checkbox',
              defaultValue: false,
              admin: {
                description: {
                  en: 'Prevent search engines from indexing this page',
                  de: 'Suchmaschinen daran hindern, diese Seite zu indexieren',
                },
              },
            },
            {
              name: 'canonical',
              label: {
                en: 'Canonical URL',
                de: 'Kanonische URL',
              },
              type: 'text',
              admin: {
                description: {
                  en: 'The canonical URL for this page (leave empty to use current URL)',
                  de: 'Die kanonische URL für diese Seite (leer lassen für aktuelle URL)',
                },
              },
            },
            {
              name: 'schemaType',
              label: {
                en: 'Schema Type',
                de: 'Schema-Typ',
              },
              type: 'select',
              defaultValue: 'WebPage',
              options: [
                { label: 'Web Page', value: 'WebPage' },
                { label: 'Article', value: 'Article' },
                { label: 'Blog Posting', value: 'BlogPosting' },
                { label: 'Course', value: 'Course' },
                { label: 'About Page', value: 'AboutPage' },
                { label: 'Contact Page', value: 'ContactPage' },
                { label: 'FAQ Page', value: 'FAQPage' },
              ],
              admin: {
                description: {
                  en: 'The schema.org type for structured data',
                  de: 'Der schema.org-Typ für strukturierte Daten',
                },
              },
            },
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
