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
          label: 'Content',
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
          label: 'SEO',
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
