import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

// ✅ BOTH regex literals are now properly terminated
const emailRE = /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const phoneRE = /^\+?[0-9\-()\s]{7,20}$/;

export async function POST(request: Request) {
  // ---- 1. pull data off the multipart/form‑data body ----------
  const form = await request.formData();

  const data: ContactPayload = {
    name: (form.get('name') ?? '').toString(),
    email: (form.get('email') ?? '').toString(),
    phone: (form.get('phone') ?? '').toString(),
    message: (form.get('message') ?? '').toString(),
  };

  // ---- 2. basic validation ------------------------------------
  if (!emailRE.test(data.email)) {
    return NextResponse.json({ error: 'Invalid e‑mail address.' }, { status: 422 });
  }
  if (data.phone && !phoneRE.test(data.phone)) {
    return NextResponse.json({ error: 'Invalid phone number.' }, { status: 422 });
  }

  // ---- 3. send the mail via Nodemailer ------------------------
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,              // e.g. "smtp.mailgun.org"
    port: Number(process.env.EMAIL_PORT ?? 587),
    secure: false,                             // upgrade with STARTTLS
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"${data.name}" <${data.email}>`,
    to: process.env.EMAIL_TO,                  // set this in .env.local
    subject: `Jupiter Marketing enquiry from ${data.name}`,
    text: `Phone: ${data.phone || 'n/a'}\n\n${data.message}`,
  });

  return NextResponse.json({ ok: true });
}
