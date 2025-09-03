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
      "static/email_template/contact_user_template.ejs"
    );
    const html = await ejs.renderFile(templatePath, {
     name,
     email,
     message,
     subject
    });

    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      // to: "mahitasnimul2@gmail.com",
      tp: email,
      subject: `Thank You for Contacting Watney College`,
      html,
    };

    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, info });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
