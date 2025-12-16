import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';

export async function POST(request) {
  try {
    await connectDB();

    const { telstraUsername } = await request.json();

    if (!telstraUsername) {
      return NextResponse.json(
        { error: 'Username is required' },
        { status: 400 }
      );
    }

    // Check if user with this username already exists
    let user = await User.findOne({ telstraUsername });

    if (user) {
      // User exists, return success
      return NextResponse.json(
        { message: 'Username saved', userId: user._id },
        { status: 200 }
      );
    }

    // Create new user with username
    user = await User.create({
      telstraUsername,
    });

    return NextResponse.json(
      { message: 'Username saved', userId: user._id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error saving username:', error);
    return NextResponse.json(
      { error: 'Failed to save username' },
      { status: 500 }
    );
  }
}

