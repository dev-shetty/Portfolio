// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import nodemailer from "nodemailer"
import { google } from "googleapis"
const OAuth2 = google.auth.OAuth2

const clientId = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET
const refreshToken = process.env.REFRESH_TOKEN
const accessToken = process.env.ACCESS_TOKEN

const oAuth2Client = new OAuth2({
  clientId,
  clientSecret,
  redirectUri: "https://developers.google.com/oauthplayground",
})

oAuth2Client.setCredentials({
  refresh_token: refreshToken,
})

type Data = {
  success: boolean
  message?: string
  details?: {
    name: string
    email: string
    desc: string
  }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { email, name, desc } = req.body
  if (!email || !name) {
    res
      .status(400)
      .json({ success: false, message: "Fill both name and email fields" })
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL,
      clientId,
      clientSecret,
      refreshToken,
      accessToken: accessToken,
    },
    secure: true,
  })

  const mailData = {
    from: process.env.EMAIL,
    to: "deveeshshetty@gmail.com",
    subject: `Message from ${name}`,
    text: desc + " | Sent from: " + email,
    html: `<div>${desc}</div><p>Sent from:
    ${email}</p>`,
  }

  transporter.sendMail(mailData, (error, info) => {
    if (error) {
      console.log(error)
    } else {
      console.log(info)
    }
  })

  res.status(200).json({ success: true, details: { name, email, desc } })
}
