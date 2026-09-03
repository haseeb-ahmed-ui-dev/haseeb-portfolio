import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);

  const name = (body?.name ?? "").toString().trim();
  const email = (body?.email ?? "").toString().trim();
  const company = (body?.company ?? "").toString().trim();
  const number = (body?.number ?? "").toString().trim();
  const message = (body?.message ?? "").toString().trim();

  if (!name || !message || !EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { message: "Please complete the form and try again." },
      { status: 400 },
    );
  }

  const { GMAIL_USER, GMAIL_APP_PASSWORD } = process.env;
  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
    return NextResponse.json(
      { message: "Email is not configured on the server yet." },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
  });

  try {
    const lines = [
      `Name: ${name}`,
      `Email: ${email}`,
      company && `Company: ${company}`,
      number && `Phone: ${number}`,
      "",
      "Message:",
      message,
    ].filter(Boolean);

    await transporter.sendMail({
      from: `"Portfolio Contact" <${GMAIL_USER}>`,
      to: GMAIL_USER,
      replyTo: email,
      subject: `New hiring inquiry from ${name}${company ? ` (${company})` : ""}`,
      text: lines.join("\n"),
    });

    return NextResponse.json({
      message: "Thank you! Your message has been sent.",
    });
  } catch {
    return NextResponse.json(
      { message: "Oops! Something went wrong and we couldn't send your message." },
      { status: 500 },
    );
  }
}
