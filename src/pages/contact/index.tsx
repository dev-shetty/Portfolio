import { FormEvent, useEffect, useRef, useState } from "react"
import Head from "next/head"
import Navbar from "@/components/UIComponents/Navbar/Navbar"
import Blob from "@/components/UIComponents/Blob/Blob"
import Contact from "@/components/Contact/Contact"
import ContactForm from "@/components/Contact/ContactForm"
import styles from "../../styles/Contact.module.css"

function ContactPage() {
  const [details, setDetails] = useState({
    email: "",
    name: "",
    desc: "",
  })

  function onFormSubmit(e: FormEvent) {
    e.preventDefault()
    console.log(details)
  }

  return (
    <>
      <Head>
        <title>Deveesh Shetty - Contact</title>
        <meta name="description" content="Deveesh Shetty Contact Info" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <>
        <Blob />
        <div className={styles.nav}>
          <Navbar />
        </div>
        <main className={styles.main}>
          <Contact />
          <ContactForm
            onSubmit={onFormSubmit}
            details={details}
            setDetails={setDetails}
          />
        </main>
      </>
    </>
  )
}

export default ContactPage
