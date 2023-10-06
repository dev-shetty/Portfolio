import Contact from "@/components/contact/contact"
import ContactForm from "@/components/contact/contact-form"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact me via socials or send me an email by filling the form!",
}

function ContactPage() {
  return (
    <main className="min-h-screen flex justify-center items-center md:-my-24">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 md:gap-0">
        <Contact />
        <ContactForm />
      </div>
    </main>
  )
}

export default ContactPage
