"use client"

import { FormEvent, useState, ChangeEvent } from "react"
import axios from "axios"
import { useToast } from "@/hooks/use-toast"
import Loading from "@/components/ui/loading/loading"
import { H1 } from "@/components/ui/headers"
import Button from "@/components/ui/button"

function ContactForm() {
  const [details, setDetails] = useState({
    email: "",
    name: "",
    desc: "",
  })
  const [loading, setLoading] = useState(false)

  const { toast } = useToast()

  async function handleFormSubmit(e: FormEvent) {
    e.preventDefault()
    if (!details.email || !details.name || !details.desc) {
      return toast({
        variant: "destructive",
        title: "Please fill the fields",
      })
    }

    try {
      setLoading(true)
      const response = await axios("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: details,
      })

      if (response.data.success) {
        console.log(response.data)
        setDetails({
          email: "",
          name: "",
          desc: "",
        })
        toast({
          variant: "success",
          title: "Your mail has been sent! I will reply back soon ✨",
        })
      } else {
        return toast({
          variant: "destructive",
          title: "Sorry, couldn't send the mail",
        })
      }
    } catch (error) {
      console.log(error)
      return toast({
        variant: "destructive",
        title: "Sorry, couldn't send the mail",
      })
    } finally {
      setLoading(false)
    }
  }

  function onChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const detailsCopy = details
    setDetails({ ...detailsCopy, [e.target.name]: e.target.value })
  }

  return (
    <div className="flex flex-col gap-8 w-4/5 mx-auto">
      <H1>Contact Me</H1>
      <form
        className="flex flex-col w-full gap-4 justify-between"
        method="post"
        onSubmit={handleFormSubmit}
      >
        <div className="flex flex-col gap-1 justify-between">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={onChange}
            className="bg-slate-800 rounded-md p-2 outline-slate-700"
            placeholder="developer@developer.com"
            value={details.email}
          />
        </div>
        <div className="flex flex-col gap-1 justify-between">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={onChange}
            className="bg-slate-800 rounded-md p-2 outline-slate-700"
            placeholder="Developer X"
            value={details.name}
          />
        </div>
        <div className="flex flex-col gap-1 justify-between">
          <label htmlFor="desc">Description</label>
          <textarea
            name="desc"
            id="desc"
            onChange={onChange}
            placeholder="What's up?"
            className="bg-slate-800 rounded-md p-2 outline-slate-700 resize-none"
            value={details.desc}
            rows={6}
          ></textarea>
        </div>
        <div className="mx-auto mt-2">
          <Button type="submit" disabled={loading} className="relative h-10">
            <span>{loading ? <Loading /> : "Send"}</span>
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
