import { NextResponse } from "next/server";
import UserModel from "../../../../mongodbConnect";
import nodemailer from "nodemailer";

export async function POST(request) {
  const { email, depositMethod, amount, transactionStatus, name, image } =
    await request.json();
  const lowerEmail = email.toLowerCase();

  try {
    // Search for the user with the provided email
    const user = await UserModel.findOne({ email: lowerEmail });

    if (!user) {
      return NextResponse.json({ success: false, message: "User not found" });
    }

    // Generate current date in the desired format
    const currentDate = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    // Add the deposit history to the user's depositHistory array
    console.log({
      dateAdded: currentDate,
      depositMethod,
      amount,
      transactionStatus,
      dep: user.depositHistory,
    });
    user.depositHistory.push({
      dateAdded: currentDate,
      depositMethod,
      amount,
      transactionStatus,
    });

    // Save the changes to the user
    await user.save();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "osr.cty@gmail.com",
        pass: "btzbcklyxerxvkiy",
      },
    });

    // Define email options
    const mailOptions = {
      from: "osr.cty@gmail.com",
      to: "samsonrichfield@gmail.com",
      subject: "Deposit Confirmation",
      html: `
        <p>Hello Admin,</p>
        <p>Please confirm the  deposit of $${amount} using ${depositMethod} as at ${currentDate}. Please do well to verify</p>
        <p>Congrats and more wins 🥂🎉🎊</p>
        <p>Here's the image</p>
      <img src="${image}"/>
      `,
    };

    // Send the email asynchronously
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent:", info.response);
    } catch (error) {
      console.error("Error sending email:", error);
    }
    return NextResponse.json({
      success: true,
      message: user,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "An error occurred: " + error,
    });
  }
}
