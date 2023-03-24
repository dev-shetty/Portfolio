// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { email, name, desc } = req.body

  if (req.method !== "POST") {
    return res
      .status(404)
      .json({ success: false, message: "The method is not defined" })
  }

  if (!email || !name) {
    return res
      .status(400)
      .json({ success: false, message: "Fill both name and email fields" })
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
          return res.status(500).json({ success: false, error: error })
        } else {
          console.log("Mail has been sent successfully")
          resolve(true)
          return res.status(200).json({
            success: true,
            name,
            message: `${name} your mail has been sent.   Thank You :)`,
          })
        }
      })
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ success: false, error: error })
  }
}
