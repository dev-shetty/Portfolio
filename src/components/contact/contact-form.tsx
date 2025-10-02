import { type FormEvent, useState, type ChangeEvent, useRef } from "react"
import axios from "axios"
import { useToast } from "@/hooks/use-toast"
import Button from "@/components/ui/button"

interface FormErrors {
  email?: string
  name?: string
  message?: string
}

function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({})
  const formRef = useRef<HTMLFormElement>(null)
  const { toast } = useToast()

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case "email":
        if (!value) return "Email is required"
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return "Please enter a valid email address"
        break
      case "name":
        if (!value) return "Name is required"
        if (value.length < 2) return "Name must be at least 2 characters"
        break
      case "message":
        if (!value) return "Message is required"
        if (value.length < 10) return "Message must be at least 10 characters"
        break
    }
    return undefined
  }

  const handleBlur = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setTouched({ ...touched, [name]: true })
    const error = validateField(name, value)
    setErrors({ ...errors, [name]: error })
  }

  async function handleFormSubmit(e: FormEvent) {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const email = formData.get("email") as string
    const name = formData.get("name") as string
    const message = formData.get("message") as string

    // Mark all fields as touched
    setTouched({ email: true, name: true, message: true })

    // Validate all fields
    const newErrors: FormErrors = {
      email: validateField("email", email),
      name: validateField("name", name),
      message: validateField("message", message),
    }

    setErrors(newErrors)

    // Check if there are any errors
    if (Object.values(newErrors).some((error) => error)) {
      return toast({
        variant: "destructive",
        title: "Please fix the errors in the form",
        duration: 5000,
      })
    }

    try {
      setLoading(true)
      const response = await axios("/api/mail", {
        method: "POST",
        data: formData,
      })

      if (response.data.success) {
        toast({
          variant: "success",
          title: "Received your mail, I will reply back soon ✨",
          duration: 5000,
        })
        console.log("[SUCCESS] Mail sent by: ", email)
        formRef.current?.reset()
        setErrors({})
        setTouched({})
      } else {
        console.log("[ERROR] Send Mail API Response: ", response.data)
        return toast({
          variant: "destructive",
          title: "Sorry, couldn't send the mail",
          duration: 5000,
        })
      }
    } catch (error) {
      console.log("[ERROR] Send Mail API: ", error)
      return toast({
        variant: "destructive",
        title: "Sorry, couldn't send the mail",
        duration: 5000,
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      className="flex flex-col w-full gap-4"
      method="post"
      ref={formRef}
      onSubmit={handleFormSubmit}
    >
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-gray-200">
            Email <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            aria-required="true"
            aria-invalid={touched.email && errors.email ? "true" : "false"}
            aria-describedby={
              touched.email && errors.email ? "email-error" : undefined
            }
            className={`bg-gray-800 rounded-md p-2 outline-none transition-all ${
              touched.email && errors.email
                ? "border-2 border-red-500 focus-visible:ring-2 focus-visible:ring-red-500"
                : "border-2 border-gray-700 focus-visible:ring-2 focus-visible:ring-blue-500"
            } focus-visible:border-transparent`}
            placeholder="developer@domain.com"
            onBlur={handleBlur}
          />
          {touched.email && errors.email && (
            <span id="email-error" className="text-red-400 text-sm mt-1">
              {errors.email}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-gray-200">
            Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            aria-required="true"
            aria-invalid={touched.name && errors.name ? "true" : "false"}
            aria-describedby={
              touched.name && errors.name ? "name-error" : undefined
            }
            className={`bg-gray-800 rounded-md p-2 outline-none transition-all ${
              touched.name && errors.name
                ? "border-2 border-red-500 focus-visible:ring-2 focus-visible:ring-red-500"
                : "border-2 border-gray-700 focus-visible:ring-2 focus-visible:ring-blue-500"
            } focus-visible:border-transparent`}
            placeholder="Developer X"
            onBlur={handleBlur}
          />
          {touched.name && errors.name && (
            <span id="name-error" className="text-red-400 text-sm mt-1">
              {errors.name}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <label htmlFor="message" className="block mb-1 text-gray-200">
            Message <span className="text-red-400">*</span>
          </label>
          <textarea
            name="message"
            id="message"
            required
            aria-required="true"
            aria-invalid={touched.message && errors.message ? "true" : "false"}
            aria-describedby={
              touched.message && errors.message ? "message-error" : undefined
            }
            placeholder="What's up?"
            className={`w-full bg-gray-800 rounded-md p-2 outline-none transition-all resize-none ${
              touched.message && errors.message
                ? "border-2 border-red-500 focus-visible:ring-2 focus-visible:ring-red-500"
                : "border-2 border-gray-700 focus-visible:ring-2 focus-visible:ring-blue-500"
            } focus-visible:border-transparent`}
            rows={3}
            onBlur={handleBlur}
          ></textarea>
          {touched.message && errors.message && (
            <span
              id="message-error"
              className="text-red-400 text-sm mt-1 block"
            >
              {errors.message}
            </span>
          )}
        </div>
        <div className="flex justify-end">
          <Button
            type="submit"
            disabled={loading}
            className="w-32 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send"}
          </Button>
        </div>
      </div>
    </form>
  )
}

export default ContactForm
