import Contact from "@/components/Contact/contact"
import ContactForm from "@/components/Contact/contact-form"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Deveesh Shetty | Contact",
  description: "Deveesh Shetty Contact Info",
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
