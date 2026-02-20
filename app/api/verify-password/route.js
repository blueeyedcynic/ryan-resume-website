import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { password, project } = await request.json()

    // Get the appropriate password from environment variable based on project
    let correctPassword
    if (project === 'portless') {
      correctPassword = process.env.PORTLESS_PASSWORD
    } else if (project === 'metrc') {
      correctPassword = process.env.METRC_PASSWORD
    } else {
      // Default to METRC for backward compatibility
      correctPassword = process.env.METRC_PASSWORD
    }

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
