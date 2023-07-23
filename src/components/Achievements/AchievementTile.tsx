import Image, { StaticImageData } from "next/image"
import styles from "./Achievements.module.css"

interface AchievementTileProps {
  image: StaticImageData
  orgName: string
  role: string
  tenure: string
  description: string
  orgLink: string
}

function AchievementTile({
  image,
  orgName,
  role,
  tenure,
  description,
  orgLink,
}: AchievementTileProps) {
  return (
    <div className={styles.card}>
      <Image
        src={image}
        alt={`${orgName} + image`}
        onClick={() => window.open(orgLink)}
      />
      <div className={styles.card_body}>
        <div>
          <h2 className={styles.card_title}>{role}</h2>
          <p>{tenure}</p>
        </div>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default AchievementTile
