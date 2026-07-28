import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // Log the contact form submission (production: save to Firebase/DB)
  console.log("📬 Contact Form Submission:", { name, email, subject, message, timestamp: new Date().toISOString() });

  // Optional: Send email via Resend/SendGrid when API key is configured
  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "portfolio@rajam.dev",
          to: "rajam4658m@gmail.com",
          subject: `Portfolio Contact: ${subject || "New Message"} from ${name}`,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #4F46E5;">New Portfolio Contact</h2>
              <p><strong>From:</strong> ${name} (${email})</p>
              <p><strong>Subject:</strong> ${subject || "—"}</p>
              <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin-top: 16px;">
                <p style="white-space: pre-wrap;">${message}</p>
              </div>
            </div>
          `,
        }),
      });
    } catch (err) {
      console.error("Email send failed:", err);
    }
  }

  return NextResponse.json({ success: true, message: "Message received! Raja will reply soon." });
}
