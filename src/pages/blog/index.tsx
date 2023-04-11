import Blob from "@/components/UIComponents/Blob/Blob"
import Navbar from "@/components/UIComponents/Navbar/Navbar"
import Head from "next/head"

function index() {
  return (
    <>
      <Head>
        <title>Blog by Deveesh</title>
        <meta name="description" content="Blogs written by Deveesh Shetty" />
      </Head>
      <>
        <Blob />
        <Navbar />
      </>
    </>
  )
}

export default index
