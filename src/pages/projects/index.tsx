import Blob from "@/components/UIComponents/Blob/Blob"
import Head from "next/head"
import { useEffect, useRef } from "react"
import styles from "../../styles/Projects.module.css"
function ProjectPage() {
  useEffect(() => {
    document.documentElement.style.setProperty("--blob-clr-1", "hotpink")
    document.documentElement.style.setProperty("--blob-clr-2", "turquoise")
  }, [])

  return (
    <>
      <Head>
        <title>Deveesh Shetty - Projects</title>
        <meta
          name="description"
          content="Projects built by Deveesh Shetty showcased in my portfolio site"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Blob />
        <main className={styles.main}>aklsdnasjdb</main>
      </>
    </>
  )
}

export default ProjectPage
