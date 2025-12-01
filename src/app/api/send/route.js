// src/app/api/send/route.js
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const { name, email, message } = await request.json();

  try {
    const data = await resend.emails.send({
      from: "Zana Portfolio <contact@resend.dev>", // آدرس مجاز Resend
      to: "zana.sanndaji@gmail.com", // ایمیل واقعی خودت
      replyTo: email, // که بتونی جواب بدی
      subject: `Portfolio: ${name} sent you a message`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f8f9fa; border-radius: 16px; border: 1px solid #e2e8f0;">
          <h2 style="color: #7c3aed; margin-bottom: 16px;">New Message from Portfolio</h2>
          <div style="background: white; padding: 20px; border-radius: 12px; border-left: 4px solid #7c3aed;">
            <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #7c3aed;">${email}</a></p>
            <p style="margin: 16px 0 8px 0;"><strong>Message:</strong></p>
            <p style="background: #f1f5f9; padding: 16px; border-radius: 8px; white-space: pre-wrap;">
              ${message.replace(/\n/g, "<br>")}
            </p>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #64748b;">
            Sent from <a href="https://zana-portfolio.vercel.app" style="color: #7c3aed;">zana-portfolio.vercel.app</a>
          </p>
        </div>
      `,
    });

    console.log("Email sent successfully:", data);
    return Response.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return Response.json(
      { error: error.message || "Failed to send email" },
      { status: 500 }
    );
  }
}
