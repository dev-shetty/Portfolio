import { Icon } from "@iconify/react"
import styles from "./Socials.module.css"

function Socials() {
  return (
    <aside className={styles.socials}>
      <div>
        <Icon icon="lucide:github" color="var(--clr-primary-100)" />
      </div>
      <div>
        <Icon icon="lucide:linkedin" color="var(--clr-primary-100)" />
      </div>
      <div>
        <Icon icon="lucide:twitter" color="var(--clr-primary-100)" />
      </div>
    </aside>
  )
}

export default Socials
