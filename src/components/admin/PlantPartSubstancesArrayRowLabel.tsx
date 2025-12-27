'use client'

import React from 'react'
import { useRowLabel, useConfig } from '@payloadcms/ui'

function useAdminEntity(collection: string, id?: string | number) {
  const { config } = useConfig()
  const [entity, setEntity] = React.useState<any>()

  React.useEffect(() => {
    if (!id) {
      setEntity(undefined)
      return
    }

    let mounted = true
    const apiURL = `${config.serverURL}${config.routes.api}/${collection}/${id}`

    fetch(apiURL, {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP error! status: ${r.status}`)
        return r.json()
      })
      .then((d) => {
        if (mounted) setEntity(d)
      })
      .catch((err) => {
        console.error(`Error fetching ${collection}/${id}:`, err)
      })

    return () => {
      mounted = false
    }
  }, [collection, id, config.routes.api, config.serverURL])

  return entity
}

export const PlantPartSubstancesArrayRowLabel: React.FC = () => {
  const { data } = useRowLabel<{
    plantPart?: number
    plantSubstance?: number
    plantEffect?: number
  }>()

  const partResp = useAdminEntity('plant-parts', data?.plantPart)
  const substanceResp = useAdminEntity('plant-substances', data?.plantSubstance)
  const effectResp = useAdminEntity('plant-effects', data?.plantEffect)

  const label = `${partResp?.name || '—'} - ${substanceResp?.name || '—'} - ${effectResp?.name || '—'}`

  return <div>{label}</div>
}
