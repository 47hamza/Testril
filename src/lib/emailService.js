import nodemailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';

const createTransporter = () => {
  // Validate required environment variables
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    throw new Error('SMTP configuration is missing. Please set SMTP_HOST, SMTP_USER, and SMTP_PASS in your environment variables.');
  }

  const port = parseInt(process.env.SMTP_PORT || '465');
  const isSecure = port === 465; // Port 465 uses SSL, port 587 uses STARTTLS

  const config = {
    host: process.env.SMTP_HOST,
    port: port,
    secure: isSecure, // true for port 465 (SSL), false for port 587 (STARTTLS)
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    // Add connection timeout and retry options
    connectionTimeout: 10000, // 10 seconds
    greetingTimeout: 10000,
    socketTimeout: 10000,
    // For port 587 (STARTTLS), require TLS
    ...(port === 587 && { requireTLS: true }),
    // Disable certificate validation if needed (not recommended for production)
    // tls: {
    //   rejectUnauthorized: false
    // }
  };

  console.log('Creating SMTP transporter with config:', {
    host: config.host,
    port: config.port,
    secure: config.secure,
    user: config.auth.user,
  });

  return nodemailer.createTransport(smtpTransport(config));
};

export async function sendEmail(to, subject, html) {
  try {
    // Validate email address
    if (!to || !to.includes('@')) {
      throw new Error(`Invalid email address: ${to}`);
    }

    const transporter = createTransporter();
    
    // Verify connection before sending
    try {
      await transporter.verify();
      console.log('SMTP server connection verified');
    } catch (verifyError) {
      console.error('SMTP connection verification failed:', verifyError);
      throw new Error(`Cannot connect to SMTP server: ${verifyError.message}`);
    }
    
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: to,
      subject: subject,
      html: html,
    };

    console.log(`Attempting to send email to: ${to}`);
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    
    // Provide more helpful error messages
    if (error.code === 'ECONNECTION') {
      throw new Error(`Connection failed to SMTP server. Please check:
        - SMTP_HOST is correct (e.g., smtp.gmail.com)
        - SMTP_PORT is correct (465 for SSL, 587 for TLS)
        - Your network/firewall allows connections to the SMTP server
        - SMTP credentials are correct`);
    } else if (error.code === 'EAUTH') {
      throw new Error('SMTP authentication failed. Please check your SMTP_USER and SMTP_PASS credentials.');
    } else if (error.message) {
      throw error;
    } else {
      throw new Error(`Failed to send email: ${error.message || error}`);
    }
  }
}

