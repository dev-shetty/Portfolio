import Image from "next/image"
import ProfileImg from "../../assets/images/Deveesh.jpg"
import SOSC from "../../assets/misc/sosc.png"
import styles from "./Home.module.css"
// import { Icon } from "@iconify/react"
function Home() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.details}>
          <h1>Deveesh Shetty</h1>
          <div>
            <p>
              React Developer, to be Full Stack Developer. Constantly exploring
              new concepts and ideas in the world of Web Development, building
              projects daily to enhance my skills and get better bit by bit.
              Looking forward to contribute to open source and build a
              community.
            </p>
            <q>
              2nd year CSE Student, Developer by passion and an Artist by hobby.
            </q>
          </div>
        </div>
        <div className={styles.tag_holder}>
          <a href="https://sosc.org.in" target="_blank">
            <li className={styles.tag} data-role="sosc">
              <Image src={SOSC} alt="SOSC Logo" />
              <p>President</p>
            </li>
          </a>
        </div>
        <a
          href="Resume.pdf"
          download="Deveesh Resume.pdf"
          className={styles.resume}
        >
          <button>Resume</button>
          <p>{/* <Icon icon="material-symbols:download" /> */}</p>
        </a>
      </div>
      <div className={styles.image}>
        <div>
          <Image src={ProfileImg} alt="Deveesh Profile" priority />
        </div>
      </div>
    </section>
  )
}

export default Home
