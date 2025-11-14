import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log('Received Suno callback:', JSON.stringify(data));
    return NextResponse.json({ status: 'received' }, { status: 200 });
  } catch (error) {
    console.error('Callback error:', error);
    return NextResponse.json({ status: 'error' }, { status: 200 });
  }
}
