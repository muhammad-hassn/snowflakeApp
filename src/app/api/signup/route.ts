import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { name, email, password } = await req.json();
  
  // Add database logic here
  console.log('New user:', { name, email, password });
  
  return NextResponse.json(
    { success: true, message: 'User created' },
    { status: 201 }
  );
}


