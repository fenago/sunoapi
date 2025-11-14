import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const taskId = searchParams.get('taskId');
  const headerKey = request.headers.get('x-suno-api-key')?.trim();
  const defaultKey = process.env.SUNOAPI_KEY;
  const token = headerKey || defaultKey;

  if (!taskId) {
    return NextResponse.json({ error: 'Task ID is required' }, { status: 400 });
  }

  if (!token) {
    return NextResponse.json({ error: 'Missing Suno API key' }, { status: 400 });
  }

  try {
    const checkResponse = await fetch(
      `https://api.sunoapi.org/api/v1/generate/record-info?taskId=${taskId}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      }
    );

    const checkData = await checkResponse.json();
    
    // Log the full response for debugging
    console.log('Status check response:', JSON.stringify(checkData, null, 2));

    if (checkData.code !== 200) {
      console.error('API returned error:', checkData);
      return NextResponse.json(
        { error: checkData.msg || 'Failed to check status' },
        { status: 500 }
      );
    }

    const status = checkData.data?.status;
    const tracks = checkData.data?.response?.sunoData; // FIXED: It's sunoData, not data!
    
    console.log('Parsed status:', status, 'Has tracks:', !!tracks, tracks);

    // Handle SENSITIVE_WORD_ERROR status
    if (status === 'SENSITIVE_WORD_ERROR') {
      return NextResponse.json({
        status: 'FAILED',
        error: 'Content contains sensitive words or inappropriate content. Please modify your prompt and try again.',
        sensitiveWordError: true
      });
    }

    return NextResponse.json({
      status,
      audioUrl: status === 'SUCCESS' && tracks?.[0]?.audioUrl ? tracks[0].audioUrl : null,
      title: status === 'SUCCESS' && tracks?.[0]?.title ? tracks[0].title : null,
    });

  } catch (error) {
    console.error('Status check error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
