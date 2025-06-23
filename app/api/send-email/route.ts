
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { from_name, email, phone, role, message } = await request.json();

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
    const htmlContent = `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; background-color: #f9f9f9;">
    <h2 style="color: #333;">New Contact Submission</h2>
    <table style="width: 100%; max-width: 600px; border-collapse: collapse;">
      <tr>
        <td style="font-weight: bold; padding: 8px;">Name:</td>
        <td style="padding: 8px;">${from_name}</td>
      </tr>
      <tr>
        <td style="font-weight: bold; padding: 8px;">Email:</td>
        <td style="padding: 8px;">${email}</td>
      </tr>
      <tr>
        <td style="font-weight: bold; padding: 8px;">Phone:</td>
        <td style="padding: 8px;">${phone}</td>
      </tr>
      <tr>
        <td style="font-weight: bold; padding: 8px;">Role:</td>
        <td style="padding: 8px;">${role}</td>
      </tr>
      <tr>
        <td style="font-weight: bold; padding: 8px;">Message:</td>
        <td style="padding: 8px;">${message}</td>
      </tr>
    </table>
    <p style="margin-top: 20px; color: #555;">This message was sent via your Portfolio contact form.</p>
  </div>
    `;

    const response = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: toEmail,
      subject: `Message from ${from_name} - ${role}`,
      html: htmlContent,
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
