'use client'

import { useRowLabel } from '@payloadcms/ui'
import React from 'react'

export const LinkArrayRowLabel: React.FC = () => {
  const { data } = useRowLabel<{ text?: string }>()
  return <div>{data?.text || 'Link'}</div>
}
