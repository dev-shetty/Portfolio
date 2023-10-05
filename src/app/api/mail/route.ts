// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiResponse } from "next"
import nodemailer from "nodemailer"

type Data = {
  success: boolean
  message?: string
  name?: string
  error?: any
}

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
    return Response.json({ success: false, message: "Fill all the fields!!" })
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
          return Response.json({ success: false, error: error })
        } else {
          console.log("Mail has been sent successfully")
          resolve(true)
          return Response.json({
            success: true,
            name,
            message: `${name} your mail has been sent.   Thank You :)`,
          })
        }
      })
    })
    return Response.json({
      success: true,
      name,
      message: `${name} your mail has been sent.   Thank You :)`,
    })
  } catch (error) {
    console.log(error)
    return Response.json({ success: false, error: error })
  }
}
