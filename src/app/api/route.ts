import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  console.log('from route handler');
  return NextResponse.json({ name: 'louai' });
}
