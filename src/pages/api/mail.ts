// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import nodemailer from "nodemailer"
import { google } from "googleapis"

type Data = {
  success: boolean
  message?: string
  name?: string
  error?: any
}

const { CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN, REDIRECT_URI } = process.env
const { EMAIL, RECEIPIENT_EMAIL } = process.env

const OAuth2 = google.auth.OAuth2
const oAuth2Client = new OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)

oAuth2Client.setCredentials({
  refresh_token: REFRESH_TOKEN,
})

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: EMAIL,
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    refreshToken: REFRESH_TOKEN,
  },
  secure: true,
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { email, name, desc } = req.body
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
    transporter.sendMail(mailData, (error, info) => {
      if (error) {
        console.log(error)
        return res.status(500).json({ success: false, error: error })
      } else {
        console.log("Mail has been sent successfully")
        return res.status(200).json({
          success: true,
          name,
          message: `${name} your mail has been sent, I will reach back to you soon`,
        })
      }
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ success: false, error: error })
  }
}
