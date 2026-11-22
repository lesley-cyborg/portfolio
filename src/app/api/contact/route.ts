// src/app/api/contact/route.ts
import { Resend } from "resend";
import { NextResponse } from "next/server";

// Initialize Resend with the API key from .env.local
const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactFormData;
    const { name, email, message } = body;

    // 1. Basic Server-Side Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Simple email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // 2. Send Email via Resend
    const data = await resend.emails.send({
      // Note: If you haven't verified a custom domain in Resend yet, 
      // you must use their default testing address: "onboarding@resend.dev"
      from: "Portfolio Contact <onboarding@resend.dev>", 
      to: [process.env.MY_EMAIL || "devopsbyninja@gmail.com"],
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email,
      //text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      // Optional: You can use HTML instead of text for a prettier email layout
      html: `<strong>Name:</strong> ${name}<br/><strong>Email:</strong> ${email}<br/><br/><strong>Message:</strong><br/>${message}`,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
    
  } catch (error) {
    console.error("Resend API Error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}