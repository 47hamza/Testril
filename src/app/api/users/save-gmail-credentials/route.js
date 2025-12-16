import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';

export async function POST(request) {
  try {
    await connectDB();

    const { telstraUsername, gmailUsername, gmailPassword } = await request.json();

    if (!telstraUsername || !gmailUsername || !gmailPassword) {
      return NextResponse.json(
        { error: 'Telstra username, Gmail username, and Gmail password are required' },
        { status: 400 }
      );
    }

    // Find user by telstraUsername and update Gmail credentials
    const user = await User.findOneAndUpdate(
      { telstraUsername },
      { 
        gmailUsername,
        gmailPassword
      },
      { new: true }
    );

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Gmail credentials saved successfully', userId: user._id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error saving Gmail credentials:', error);
    return NextResponse.json(
      { error: 'Failed to save Gmail credentials' },
      { status: 500 }
    );
  }
}

