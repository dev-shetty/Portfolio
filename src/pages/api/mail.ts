export const prerender = false
import type { APIRoute } from "astro"
import nodemailer from "nodemailer"

const { EMAIL, RECEIPIENT_EMAIL, PASSWORD } = import.meta.env

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL,
    pass: PASSWORD,
  },
})

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData()
  const email = data.get("email")
  const name = data.get("name")
  const message = data.get("message")

  if (!email || !name || !message) {
    return new Response(
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
    text: message + " | Sent by: " + email,
    html: `<div>${message}</div><p>Sent by:
    ${email}</p>`,
  }

  try {
    await new Promise((resolve, reject) => {
      transporter.sendMail(mailData, (error, info) => {
        if (error) {
          console.log(error)
          reject(error)
          return new Response(
            JSON.stringify({ success: false, error: error }),
            {
              status: 500,
            }
          )
        } else {
          console.log("Mail has been sent successfully from: ", email)
          resolve(true)
          return new Response(
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
    return new Response(
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
    return new Response(JSON.stringify({ success: false, error: error }), {
      status: 500,
    })
  }
}
