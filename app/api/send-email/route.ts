import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import ejs from "ejs";
import path from "path";
import { google } from "googleapis";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    const oAuth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      "https://developers.google.com/oauthplayground"
    );

    oAuth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
    });

    const accessToken = await oAuth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      // host: "smtp.ionos.co.uk",
      // port: 587,
      // secure: false,
      service: "Gmail",
      auth: {
        type: "OAuth2",
        user: process.env.SENDER_EMAIL,
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
        accessToken: accessToken?.token || "",
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
      from: `Watney College <${process.env.SENDER_EMAIL}>`,
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
