import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const { email, amount } = await request.json();

  // Create a Nodemailer transporter with your email credentials
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "osr.cty@gmail.com",
      pass: "btzbcklyxerxvkiy",
    },
  });

  // Define the email content
  const mailOptions = {
    from: "osr.cty@example.com", // Sender's email address
    to: email, // Recipient's email address
    subject: "Deposit Confirmation",
    html: `
      <html>
        <head>
          <style>
            /* Add your custom CSS styles here */
            body {
              font-family: Arial, sans-serif;
              background-color: #f0f0f0;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #fff;
              border-radius: 5px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            h1 {
              color: #333;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Deposit Confirmation</h1>
            <p>Dear User,</p>
            <p>Your deposit of $${amount} has been successfully received.</p>
            <p>Thank you for choosing our services.</p>
          </div>
        </body>
      </html>
    `,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);

    return new NextResponse({
      status: 200,
      body: "Deposit confirmation email sent successfully",
    });
  } catch (error) {
    console.error("Error while sending email:", error);
    return new NextResponse({
      status: 500,
      body: "Internal Server Error",
    });
  }
}
