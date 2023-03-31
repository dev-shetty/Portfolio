import Head from "next/head"
import Navbar from "@/components/UIComponents/Navbar/Navbar"
import Blob from "@/components/UIComponents/Blob/Blob"
import Contact from "@/components/Contact/Contact"
import ContactForm from "@/components/Contact/ContactForm"
import styles from "../../styles/Contact.module.css"

export async function getStaticProps() {
  return {
    props: {},
  }
}

function ContactPage() {
  return (
    <>
      <Head>
        <title>Deveesh Shetty - Contact</title>
        <meta name="description" content="Deveesh Shetty Contact Info" />
      </Head>
      <>
        <Blob />
        <div className={styles.nav}>
          <Navbar />
        </div>
        <main className={styles.main}>
          <Contact />
          <ContactForm />
        </main>
      </>
    </>
  )
}

export default ContactPage
