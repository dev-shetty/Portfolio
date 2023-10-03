import Landing from "@/components/Landing/Landing"
import Navbar from "@/components/UIComponents/Navbar/Navbar"
import Blob from "@/components/UIComponents/Blob/Blob"
import Home from "@/components/Home/Home"
import Skills from "@/components/Skills/Skills"
import styles from "../styles/Landing.module.css"
import Achievements from "@/components/Achievements/Achievements"

export default function LandingPage() {
  return (
    <>
      <Blob />
      <Navbar />
      <main className={styles.main}>
        <Landing />
        <Home />
        <Achievements />
        <Skills />
      </main>
    </>
  )
}