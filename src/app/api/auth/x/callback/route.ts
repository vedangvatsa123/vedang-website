import { getXAccessToken } from '@/lib/x';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get('code');
  const state = searchParams.get('state');

  if (!code) {
    return NextResponse.json(
      { error: 'No authorization code provided' },
      { status: 400 }
    );
  }

  try {
    const accessToken = await getXAccessToken(code, {
      clientId: process.env.X_CLIENT_ID || '',
      clientSecret: process.env.X_CLIENT_SECRET || '',
      redirectUri: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/auth/x/callback`,
    });

    // In production, store this token securely in database
    // For now, return it to user to store in .env
    return NextResponse.json({
      success: true,
      message: 'X authentication successful',
      access_token: accessToken.access_token,
      instructions:
        'Add this to your .env.local: X_ACCESS_TOKEN=' + accessToken.access_token,
    });
  } catch (error) {
    console.error('X OAuth error:', error);
    return NextResponse.json(
      {
        error: 'Failed to authenticate with X',
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
