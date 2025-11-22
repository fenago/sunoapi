import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const taskId = searchParams.get('taskId');
    const apiKey = request.headers.get('x-suno-api-key');

    if (!taskId) {
      return NextResponse.json(
        { error: 'taskId is required' },
        { status: 400 }
      );
    }

    if (!apiKey) {
      return NextResponse.json(
        { error: 'Missing Suno API key' },
        { status: 401 }
      );
    }

    const response = await fetch(`https://api.sunoapi.org/api/v1/mp4/record-info?taskId=${taskId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
      },
    });

    const data = await response.json();

    if (data.code !== 200) {
      return NextResponse.json(
        { error: data.msg || 'Failed to get video status' },
        { status: data.code || 500 }
      );
    }

    return NextResponse.json({
      status: data.data.successFlag,
      videoUrl: data.data.response?.videoUrl || null,
      errorMessage: data.data.errorMessage || null,
      completeTime: data.data.completeTime || null
    });

  } catch (error) {
    console.error('Video status check error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Internal server error';
    return NextResponse.json(
      { error: `Server error: ${errorMessage}` },
      { status: 500 }
    );
  }
}
