import nodemailer from 'nodemailer';
import ejs from 'ejs';

export const sendEmail = async (subject: string,body:string,) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true, 
   
    
    auth: {
      user: "info@knowera.co.uk", 
      pass: "Knowera@2024",
    },

  });

  try {
    const html = await ejs.renderFile(
      __dirname + "/../static/email_template/" + "welcome_template" + ".ejs",
      {  body: body }
    );

    const mailOptions = {
      from:'info@knowera.co.uk', 
      to:'thmahi3@gmail.com', 
      subject,
      html: html,
    };

    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};