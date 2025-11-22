import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const taskId = searchParams.get('taskId');
    const apiKey = request.headers.get('x-suno-api-key');

    if (!taskId || !apiKey) {
      return NextResponse.json(
        { error: 'Missing taskId or API key' },
        { status: 400 }
      );
    }

    // Call Suno API to get cover status
    const response = await fetch(`https://api.sunoapi.org/api/v1/suno/cover/record-info?taskId=${taskId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
      },
    });

    const data = await response.json();
    
    console.log('Suno cover status API response:', JSON.stringify(data, null, 2));

    if (!response.ok) {
      console.error('Cover status API error:', data);
      return NextResponse.json(
        { error: data.msg || 'Failed to get cover status' },
        { status: response.status }
      );
    }

    // The API returns: { code, msg, data: { taskId, response: { images }, successFlag } }
    // successFlag: 0=Pending, 1=Success, 2=Generating, 3=Failed
    const coverData = data.data || {};
    const images = coverData.response?.images || [];
    const successFlag = coverData.successFlag;
    
    // Map successFlag to status string
    let status = 'PENDING';
    if (successFlag === 1) status = 'SUCCESS';
    else if (successFlag === 2) status = 'GENERATING';
    else if (successFlag === 3) status = 'FAILED';
    
    return NextResponse.json({
      status,
      images,
      taskId: coverData.taskId || taskId,
      successFlag,
      code: data.code,
      msg: data.msg
    });

  } catch (error) {
    console.error('Cover status check error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
