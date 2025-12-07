import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { password } = await request.json()

    // Get the password from environment variable
    const correctPassword = process.env.METRC_PASSWORD

    if (!correctPassword) {
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    // Check if password matches
    const isValid = password === correctPassword

    return NextResponse.json({ valid: isValid })
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    )
  }
}
