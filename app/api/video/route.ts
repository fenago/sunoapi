import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { taskId, audioId, apiKey, author, domainName } = await request.json();

    if (!taskId || !audioId) {
      return NextResponse.json(
        { error: 'taskId and audioId are required' },
        { status: 400 }
      );
    }

    if (!apiKey) {
      return NextResponse.json(
        { error: 'Missing Suno API key' },
        { status: 401 }
      );
    }

    // Create video generation request
    const response = await fetch('https://api.sunoapi.org/api/v1/mp4/generate', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        taskId,
        audioId,
        callBackUrl: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/video-callback`,
        author: author || 'Resonance',
        domainName: domainName || 'resonance.app'
      }),
    });

    const data = await response.json();

    if (data.code !== 200) {
      return NextResponse.json(
        { error: data.msg || 'Failed to create video' },
        { status: data.code || 500 }
      );
    }

    return NextResponse.json({
      taskId: data.data.taskId,
      message: 'Video generation started'
    });

  } catch (error) {
    console.error('Video generation error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Internal server error';
    return NextResponse.json(
      { error: `Server error: ${errorMessage}` },
      { status: 500 }
    );
  }
}
