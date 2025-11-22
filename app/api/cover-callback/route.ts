import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { code, msg, data } = body;

    console.log('Cover generation callback received:', {
      taskId: data?.taskId,
      status: code,
      message: msg,
      images: data?.images
    });

    // In a production app, you would:
    // 1. Store the cover images in your database
    // 2. Associate them with the song task
    // 3. Notify the frontend via WebSocket or similar

    if (code === 200 && data?.images) {
      console.log('Cover generation successful:', data.images);
    } else {
      console.error('Cover generation failed:', msg);
    }

    return NextResponse.json({ status: 'received' });

  } catch (error) {
    console.error('Cover callback error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
