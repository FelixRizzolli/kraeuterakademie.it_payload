import { NextRequest, NextResponse } from 'next/server'
import config from '@payload-config'
import { getPayload } from 'payload'
import { corsHeaders, handleCorsOptions } from '@/lib/cors'

/**
 * OPTIONS /api/users/set-password
 * Handle preflight requests
 */
export const OPTIONS = handleCorsOptions

/**
 * POST /api/users/set-password
 * Set password for user with invitation token (completes registration)
 */
export async function POST(req: NextRequest) {
  try {
    const payload = await getPayload({ config })
    const body = await req.json()
    const { userId, password, invitationToken } = body

    if (!userId || !password || !invitationToken) {
      return NextResponse.json(
        {
          errors: [{ message: 'User ID, password, and invitation token are required' }],
        },
        { status: 400, headers: corsHeaders },
      )
    }

    // Get the user to verify invitation token
    const user = await payload.findByID({
      collection: 'users',
      id: userId,
      depth: 2,
    })

    if (!user) {
      return NextResponse.json(
        {
          errors: [{ message: 'User not found' }],
        },
        { status: 404, headers: corsHeaders },
      )
    }

    // Verify invitation token matches
    if ((user as any).invitationToken !== invitationToken) {
      return NextResponse.json(
        {
          errors: [{ message: 'Invalid invitation token' }],
        },
        { status: 401, headers: corsHeaders },
      )
    }

    // Check if user already has a password set
    if ((user as any).password) {
      return NextResponse.json(
        {
          errors: [{ message: 'This invitation token has already been used' }],
        },
        { status: 400, headers: corsHeaders },
      )
    }

    // Update user with password and clear invitation token
    const updatedUser = await payload.update({
      collection: 'users',
      id: userId,
      data: {
        password,
        invitationToken: '', // Clear the token after use
      },
    })

    // Generate login token for the user
    const token = await payload.login({
      collection: 'users',
      data: {
        email: updatedUser.email,
        password,
      },
    })

    // Return user and token
    return NextResponse.json(
      {
        user: {
          id: updatedUser.id,
          email: updatedUser.email,
          firstName: (updatedUser as any).firstName,
          lastName: (updatedUser as any).lastName,
          roles: (updatedUser as any).roles,
        },
        token: token.token,
        exp: token.exp,
      },
      { headers: corsHeaders },
    )
  } catch (error: any) {
    console.error('Set password error:', error)
    return NextResponse.json(
      {
        errors: [{ message: error.message || 'An error occurred while setting password' }],
      },
      { status: 500, headers: corsHeaders },
    )
  }
}
