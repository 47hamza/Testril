import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';

export async function POST(request) {
  try {
    await connectDB();

    const { telstraUsername, telstrapassword } = await request.json();

    if (!telstraUsername || !telstrapassword) {
      return NextResponse.json(
        { error: 'Username and password are required' },
        { status: 400 }
      );
    }

    // Find user by username and update password
    const user = await User.findOneAndUpdate(
      { telstraUsername },
      { telstrapassword },
      { new: true }
    );

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Password saved successfully', userId: user._id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error saving password:', error);
    return NextResponse.json(
      { error: 'Failed to save password' },
      { status: 500 }
    );
  }
}

