import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const { taskId, audioId } = body;
  const headerKey = request.headers.get('x-suno-api-key')?.trim();
  const defaultKey = process.env.SUNOAPI_KEY;
  const token = headerKey || defaultKey;

  if (!taskId || !audioId) {
    return NextResponse.json({ error: 'Task ID and Audio ID are required' }, { status: 400 });
  }

  if (!token) {
    return NextResponse.json({ error: 'Missing Suno API key' }, { status: 400 });
  }

  try {
    const response = await fetch('https://api.sunoapi.org/api/v1/generate/get-timestamped-lyrics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        taskId,
        audioId,
      }),
    });

    const data = await response.json();

    if (data.code !== 200) {
      console.error('Lyrics API error:', data);
      return NextResponse.json(
        { error: data.msg || 'Failed to fetch lyrics' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      alignedWords: data.data?.alignedWords || [],
      waveformData: data.data?.waveformData || [],
      hootCer: data.data?.hootCer || 0,
      isStreamed: data.data?.isStreamed || false,
    });

  } catch (error) {
    console.error('Lyrics fetch error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
