import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { taskId, apiKey } = body;

    if (!taskId || !apiKey) {
      return NextResponse.json(
        { error: 'Missing required fields: taskId and apiKey' },
        { status: 400 }
      );
    }

    // Call Suno API to generate cover
    const response = await fetch('https://api.sunoapi.org/api/v1/suno/cover/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        taskId: taskId,
        callBackUrl: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/cover-callback`
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Cover generation API error:', data);
      return NextResponse.json(
        { error: data.msg || 'Failed to generate cover' },
        { status: response.status }
      );
    }

    return NextResponse.json({
      taskId: data.data?.taskId,
      message: 'Cover generation started'
    });

  } catch (error) {
    console.error('Cover generation error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
