import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (req) => {
  const { name, email, message } = await req.json();
  console.log(name, email, message);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_ID,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.USER,
    to: email,
    bcc: [process.env.USER, "syedshaon99@gmail.com"],
    subject: `Website Submission from ${name}`,
    replyTo: email,
    html: `
      <p>Name:   ${name} </p>
      <p>Email:   ${email} </p>
      <p>Message:</p>
      <p>  ${message} </p>
      
      
    `,
    text: `${message} Send from ${email}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ status: "Ok" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
};
