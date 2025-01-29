import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email, password } = await req.json();
  
  // Replace with actual database check
  if (email === 'test@example.com' && password === '12345678') {
    return NextResponse.json({ success: true });
  }
  
  return NextResponse.json(
    { error: 'Invalid credentials' },
    { status: 401 }
  );
}