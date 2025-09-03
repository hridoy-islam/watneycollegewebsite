import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import ejs from "ejs";
import path from "path";

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: "info@knowera.co.uk",
        pass: "Knowera@2024",
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
     phone,
     message,
     subject
    });

    const mailOptions = {
      from: "info@knowera.co.uk",
      to: "info@knowera.co.uk", // Change if needed
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
