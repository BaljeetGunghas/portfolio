// app/api/send-email/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!|| '');
export async function POST(request: NextRequest) {
  try {
    const { from_name, email, message } = await request.json();

    if (!from_name || !email || !message) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    const toEmail = process.env.CONTACT_RECEIVER_EMAIL||'';
    if (!toEmail) {
      throw new Error('Receiver email is not configured in environment');
    }


    await resend.emails.send({
      from: `onboarding@resend.dev`, // use your verified sender
      to: toEmail,
      subject: `New message from ${from_name}`,
      html: '<p>It works!</p>',
    });


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
