import { useEffect, useState } from "react"
import Link from "next/link"
import styles from "./Navbar.module.css"
import { motion, AnimatePresence } from "framer-motion"
import Bars from "@/assets/icons/Bars"
import Close from "@/assets/icons/Close"

function Navbar() {
  const [navbar, setNavbar] = useState(false)

  const variants = {
    start: { y: "-100%" },
    animate: { y: 0 },
    end: { y: "-5000%" },
  }

  function exitNavbar(e: KeyboardEvent) {
    if (e.key === "Escape") {
      setNavbar(false)
    }
  }

  useEffect(() => {
    document.addEventListener("keyup", exitNavbar)

    return () => {
      document.removeEventListener("keyup", exitNavbar)
    }
  }, [])

  return (
    <>
      <nav className={styles.nav_toggle}>
        <div className={styles.bars} onClick={() => setNavbar(!navbar)}>
          <Bars />
        </div>
      </nav>
      <AnimatePresence mode="wait" initial={false}>
        {navbar && (
          <motion.nav
            className={styles.navbar}
            variants={variants}
            initial="start"
            animate="animate"
            key="navbar"
            exit="end"
            transition={{ duration: 0.2, ease: "easeIn" }}
          >
            <div className={styles.bars} onClick={() => setNavbar(!navbar)}>
              <Close />
            </div>
            <div>
              <ul className={styles.nav_list}>
                <li>
                  <Link onClick={() => setNavbar(false)} href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setNavbar(false)} href="/projects">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setNavbar(false)} href="/art-gallery">
                    Art Gallery
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setNavbar(false)} href="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
