import { NextRequest, NextResponse } from 'next/server'
import config from '@payload-config'
import { getPayload } from 'payload'
import { corsHeaders, handleCorsOptions } from '@/lib/cors'

/**
 * OPTIONS /api/users/verify-invitation
 * Handle preflight requests
 */
export const OPTIONS = handleCorsOptions

/**
 * POST /api/users/verify-invitation
 * Verify an invitation token for a user
 */
export async function POST(req: NextRequest) {
  try {
    const payload = await getPayload({ config })
    const body = await req.json()
    const { email, invitationToken } = body

    if (!email || !invitationToken) {
      return NextResponse.json(
        {
          errors: [{ message: 'Email and invitation token are required' }],
        },
        { status: 400, headers: corsHeaders },
      )
    }

    // Find user by email and invitation token
    const users = await payload.find({
      collection: 'users',
      where: {
        and: [
          {
            email: {
              equals: email,
            },
          },
          {
            invitationToken: {
              equals: invitationToken,
            },
          },
        ],
      },
      depth: 2,
    })

    if (!users.docs || users.docs.length === 0) {
      return NextResponse.json(
        {
          errors: [{ message: 'Invalid invitation token or email' }],
        },
        { status: 401, headers: corsHeaders },
      )
    }

    const user = users.docs[0]

    // Check if user already has a password set
    if ((user as any).password) {
      return NextResponse.json(
        {
          errors: [{ message: 'This invitation token has already been used' }],
        },
        { status: 400, headers: corsHeaders },
      )
    }

    // Return user info (without password)
    return NextResponse.json(
      {
        user: {
          id: user.id,
          email: user.email,
          firstName: (user as any).firstName,
          lastName: (user as any).lastName,
          roles: (user as any).roles,
        },
      },
      { headers: corsHeaders },
    )
  } catch (error: any) {
    console.error('Verify invitation error:', error)
    return NextResponse.json(
      {
        errors: [{ message: error.message || 'An error occurred during verification' }],
      },
      { status: 500, headers: corsHeaders },
    )
  }
}
