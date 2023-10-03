import Navbar from "@/components/UIComponents/Navbar/Navbar"
import Blob from "@/components/UIComponents/Blob/Blob"
import Contact from "@/components/Contact/Contact"
import ContactForm from "@/components/Contact/ContactForm"
import styles from "../../styles/Contact.module.css"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Deveesh Shetty - Contact",
  description: "Deveesh Shetty Contact Info",
}

function ContactPage() {
  return (
    <>
      <Blob />
      <Navbar />
      <main className={styles.main}>
        <Contact />
        <ContactForm />
      </main>
    </>
  )
}

export default ContactPage
