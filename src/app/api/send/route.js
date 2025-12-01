// src/app/api/send/route.js
import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY); // این خط باید باشه
const resend = { emails: { send: () => Promise.resolve() } }; // موقت
export async function POST(request) {
  const { name, email, message } = await request.json();

  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "zanaprivate30@gmail.com", // ایمیل خودت
      replyTo: email,
      subject: `New message from ${name}`,
      text: message,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
