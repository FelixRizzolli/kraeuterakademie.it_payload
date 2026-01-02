import { NextResponse } from 'next/server'

/**
 * CORS headers for custom API routes
 * These headers allow cross-origin requests from the frontend
 */
export const corsHeaders = {
  'Access-Control-Allow-Origin': process.env.FRONTEND_URL || 'http://localhost:3000',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Allow-Credentials': 'true',
}

/**
 * Standard OPTIONS handler for CORS preflight requests
 * Use this in any custom API route that needs CORS support
 *
 * @example
 * ```typescript
 * export { handleCorsOptions as OPTIONS } from '@/lib/cors'
 * ```
 */
export async function handleCorsOptions() {
  return NextResponse.json({}, { status: 200, headers: corsHeaders })
}
