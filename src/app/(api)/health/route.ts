import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { NextResponse } from 'next/server'

export const GET = async () => {
  try {
    const payload = await getPayload({
      config: configPromise,
    })

    // Check database connection
    if (!payload.db.connect) {
      throw new Error('Database connection not available')
    }
    const dbHealth = await payload.db.connect()

    return NextResponse.json(
      {
        status: 'healthy',
        timestamp: new Date().toISOString(),
        database: 'connected',
      },
      { status: 200 },
    )
  } catch (error) {
    return NextResponse.json(
      {
        status: 'unhealthy',
        timestamp: new Date().toISOString(),
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 503 },
    )
  }
}
