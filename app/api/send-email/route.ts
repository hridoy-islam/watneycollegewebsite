import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import ejs from "ejs";
import path from "path";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // Contact mail goes out from the no-reply mailbox over Google SMTP.
    const senderEmail =
      process.env.NO_REPLY_EMAIL || "no-reply@watneycollege.co.uk";

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: senderEmail,
        pass: process.env.NO_REPLY_EMAIL_PASSWORD,
      },
    });

    // Render ejs template
    const templatePath = path.join(
      process.cwd(),
      "static/email_template/contact_template.ejs"
    );
    const html = await ejs.renderFile(templatePath, {
      name,
      email,
      message,
      subject,
    });

    const mailOptions = {
      from: `Watney College <${senderEmail}>`,
      to: "info@watneycollege.co.uk",
      // to: "mahitasnimul2@gmail.com",

      subject: `New Contact Form Submission from ${name}`,
      html,
    };

    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, info });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
