import { Icon } from "@iconify/react"
import styles from "./Socials.module.css"

function Socials() {
  return (
    <aside className={styles.socials}>
      <a href="https://github.com/Deveesh-Shetty" target="_blank">
        <div>
          <Icon icon="lucide:github" />
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/deveesh-shetty-908539214"
        target="_blank"
      >
        <div>
          <Icon icon="lucide:linkedin" />
        </div>
      </a>
      <a href="https://twitter.com/shettydeveesh" target="_blank">
        <div>
          <Icon icon="lucide:twitter" />
        </div>
      </a>
    </aside>
  )
}

export default Socials
