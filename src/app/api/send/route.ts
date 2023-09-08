import Email from '../../emails/welcome';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(request: Request) {
   const { firstName,email } = await request.json();
   await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email, 
      subject: 'Nos pondremos en contacto pronto',
      react: Email({
        firstName,
      }),
    });

    return NextResponse.json({
        status: 'success',
    });
  
}
