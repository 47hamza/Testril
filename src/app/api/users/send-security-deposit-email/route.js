import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/emailService';
import { getSecurityDepositEmailTemplate } from '@/lib/emailTemplate';

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Send security deposit email
    try {
      const emailSubject = 'Security Deposit Deduction and Reimbursement';
      const emailHtml = getSecurityDepositEmailTemplate();

      await sendEmail(email, emailSubject, emailHtml);
      console.log(`Security deposit email sent successfully to ${email}`);

      return NextResponse.json(
        { message: 'Email sent successfully' },
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
    console.error('Error in send-security-deposit-email:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}

