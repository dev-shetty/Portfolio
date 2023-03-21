import { Github, Linkedin, Twitter } from "@/assets/icons/SocialIcons"
import styles from "./Socials.module.css"

function Socials() {
  return (
    <aside className={styles.socials}>
      <a href="https://github.com/Deveesh-Shetty" target="_blank">
        <div>
          <Github />
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/deveesh-shetty-908539214"
        target="_blank"
      >
        <div>
          <Linkedin />
        </div>
      </a>
      <a href="https://twitter.com/shettydeveesh" target="_blank">
        <div>
          <Twitter />
        </div>
      </a>
    </aside>
  )
}

export default Socials
