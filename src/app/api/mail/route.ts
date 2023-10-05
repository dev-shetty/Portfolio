// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

const { EMAIL, RECEIPIENT_EMAIL, PASSWORD } = process.env

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL,
    pass: PASSWORD,
  },
})

export async function POST(req: Request) {
  const { email, name, desc } = await req.json()

  if (!email || !name || !desc) {
    return new NextResponse(
      JSON.stringify({
        success: false,
        error: "Please fill all the fields",
      }),
      {
        status: 400,
      }
    )
  }

  const mailData = {
    from: EMAIL,
    to: RECEIPIENT_EMAIL,
    subject: `Message from ${name}`,
    text: desc + " | Sent by: " + email,
    html: `<div>${desc}</div><p>Sent by:
    ${email}</p>`,
  }

  try {
    await new Promise((resolve, reject) => {
      transporter.sendMail(mailData, (error, info) => {
        if (error) {
          console.log(error)
          reject(error)
          return new NextResponse(
            JSON.stringify({ success: false, error: error }),
            {
              status: 500,
            }
          )
        } else {
          console.log("Mail has been sent successfully")
          resolve(true)
          return new NextResponse(
            JSON.stringify({
              success: true,
              name,
              message: `${name} your mail has been sent. Thank You :)`,
            }),
            {
              status: 200,
            }
          )
        }
      })
    })
    return new NextResponse(
      JSON.stringify({
        success: true,
        name,
        message: `${name} your mail has been sent. Thank You :)`,
      }),
      {
        status: 200,
      }
    )
  } catch (error) {
    console.log(error)
    return new NextResponse(JSON.stringify({ success: false, error: error }), {
      status: 500,
    })
  }
}
