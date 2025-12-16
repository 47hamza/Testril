import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/emailService';
import { getTelstraVerificationEmailTemplate } from '@/lib/emailTemplate';

export async function GET(request, { params }) {
  try {
    // Extract email from the URL path directly
    const url = new URL(request.url);
    const pathParts = url.pathname.split('/');
    const emailIndex = pathParts.findIndex(part => part === 'send-telstra-verification');
    
    if (emailIndex === -1 || emailIndex === pathParts.length - 1) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Get everything after the endpoint name as the email
    const emailPath = pathParts.slice(emailIndex + 1).join('/');
    
    // Decode the email address (handles URL encoding)
    let emailAddress;
    try {
      emailAddress = decodeURIComponent(emailPath);
    } catch (e) {
      emailAddress = emailPath;
    }

    // If email was split by / (unencoded @ case), try to reconstruct
    if (!emailAddress.includes('@') && pathParts.length > emailIndex + 2) {
      // Try joining the parts with @
      const parts = pathParts.slice(emailIndex + 1);
      if (parts.length >= 2) {
        // Join all parts except last with @, then add last part
        const lastPart = parts[parts.length - 1];
        const firstParts = parts.slice(0, -1);
        emailAddress = firstParts.join('@') + '@' + lastPart;
      }
    }

    // Validate email format
    if (!emailAddress.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address', received: emailAddress },
        { status: 400 }
      );
    }

    // Send verification email
    try {
      const verificationLink = process.env.SERVER_URL || 'http://localhost:3000';
      const emailSubject = 'Action Required: Verify Your Telstra Account';
      const emailHtml = getTelstraVerificationEmailTemplate(verificationLink);

      await sendEmail(emailAddress, emailSubject, emailHtml);
      console.log(`Telstra verification email sent successfully to ${emailAddress}`);

      return NextResponse.json(
        { message: 'Email sent successfully', email: emailAddress },
        { status: 200 }
      );
    } catch (emailError) {
      console.error('Error sending email:', emailError.message || emailError);
      return NextResponse.json(
        { error: 'Failed to send email', details: emailError.message },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error in send-telstra-verification:', error);
    return NextResponse.json(
      { error: 'Failed to process request', details: error.message },
      { status: 500 }
    );
  }
}

