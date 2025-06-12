
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { from_name, email, message } = await request.json();

    if (!from_name || !email || !message) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    const toEmail = process.env.CONTACT_RECEIVER_EMAIL;
    if (!toEmail) {
      throw new Error('Receiver email is not configured in environment');
    }


    const response = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: toEmail,
      subject: 'Test Email',
      html: '<p>Hello from Next.js API route!</p>',
    });
    console.log('Resend send email response:', response);


    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error: unknown) {
    const err = error as Error;
    console.error('Error sending email:', err.message);

    return NextResponse.json(
      { message: 'Failed to send email', error: err.message },
      { status: 500 }
    );
  }
}
