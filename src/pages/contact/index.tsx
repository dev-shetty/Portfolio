import Head from "next/head"
import Navbar from "@/components/UIComponents/Navbar/Navbar"
import Blob from "@/components/UIComponents/Blob/Blob"
import Contact from "@/components/Contact/Contact"
import styles from "../../styles/Contact.module.css"
import { useEffect } from "react"

function ContactPage() {
  useEffect(() => {
    document.documentElement.style.setProperty("--blob-clr-1", "hotpink")
    document.documentElement.style.setProperty("--blob-clr-2", "turquoise")
  }, [])
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
        </main>
      </>
    </>
  )
}

export default ContactPage
