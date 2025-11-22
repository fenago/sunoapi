import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const headerKey = request.headers.get('x-suno-api-key')?.trim();
  const defaultKey = process.env.SUNOAPI_KEY;
  const token = headerKey || defaultKey;

  if (!token) {
    return NextResponse.json({ error: 'Missing Suno API key' }, { status: 400 });
  }

  try {
    const response = await fetch('https://api.sunoapi.org/api/v1/generate/credit', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (data.code !== 200) {
      return NextResponse.json(
        { error: data.msg || 'Failed to get credits' },
        { status: 500 }
      );
    }

    return NextResponse.json({ credits: data.data });

  } catch (error) {
    console.error('Credits check error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
