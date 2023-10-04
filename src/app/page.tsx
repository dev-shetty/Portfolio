import Home from "@/components/home"
import Skills from "@/components/Skills/Skills"
import styles from "../styles/Landing.module.css"
import Achievements from "@/components/Achievements/Achievements"

export default function LandingPage() {
  return (
    <>
      {/* <Blob /> */}
      <main className={styles.main}>
        {/* <Landing /> */}
        <Home />
        <Achievements />
        <Skills />
      </main>
    </>
  )
}
