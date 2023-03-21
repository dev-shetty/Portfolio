import { Icon } from "@iconify/react"
import { useState } from "react"
import Link from "next/link"
import styles from "./Navbar.module.css"
import { motion, AnimatePresence } from "framer-motion"

function Navbar() {
  const [navbar, setNavbar] = useState(false)

  const variants = {
    start: { y: "-100%" },
    animate: { y: 0 },
    end: { y: "-5000%" },
  }

  return (
    <>
      <nav className={styles.nav_toggle}>
        <div className={styles.bars} onClick={() => setNavbar(!navbar)}>
          <Icon icon="heroicons:bars-3" />
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
              <Icon icon="material-symbols:close" />
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
