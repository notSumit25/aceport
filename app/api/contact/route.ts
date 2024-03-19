import { transporter } from "@/lib/nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const response = await req.json();
    const { firstname, lastname, email, message } = response;
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL,
      subject: `New message from ${firstname} ${lastname}`,
      text: message,
    });
    console.log(firstname, lastname, email, message);
    return new NextResponse("POST request successful");
  } catch (error) {
    return new NextResponse("POST request failed");
  }
}
