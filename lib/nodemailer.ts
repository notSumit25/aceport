import nodemailer from "nodemailer";

  // Create a transporter object
 export const transporter = nodemailer.createTransport({
    // Specify your email service provider
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });
