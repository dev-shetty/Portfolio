// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"

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
  res.status(200).json({ success: true, details: { name, email, desc } })
}
