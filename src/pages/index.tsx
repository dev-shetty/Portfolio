import Head from "next/head"
import Landing from "@/components/Landing/Landing"
import Navbar from "@/components/UIComponents/Navbar/Navbar"
import styles from "../styles/Landing.module.css"
import Blob from "@/components/UIComponents/Blob/Blob"
import Home from "@/components/Home/Home"

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>Deveesh Shetty</title>
        <meta name="description" content="Portfolio Site of Deveesh Shetty" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Blob />
        <Navbar />
        <main className={styles.main}>
          <Landing />
          <Home />
        </main>
      </>
    </>
  )
}
