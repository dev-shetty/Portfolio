import Image from "next/image"
import styles from "./Achievements.module.css"
import Startupreneur from "../../assets/images/startupreneur.jpeg"
import SOSC from "../../assets/images/SOSC.jpeg"

function Achievements() {
  return (
    <section className={styles.container}>
      <div className={styles.heading}>
        <h2>Achievements and Experience</h2>
        <h3>My achievements and experience in volutneering</h3>
      </div>
      <div className={styles.card_container}>
        <div className={styles.card}>
          <Image src={Startupreneur} alt="Startupreneur Logo" />
          <div className={styles.card_body}>
            <div>
              <h2 className={styles.card_title}>
                Developer Intern at Startupreneur
              </h2>
              <p>Sep 2022 - Jan 2023</p>
            </div>
            <p>
              Worked on frontend for 2 e-commerce website and built a single
              page application. Gained experience in working with a team, how to
              manage the tasks. Built my skills in frontend technologies and
              also gained in depth knowledge of Git and Github.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <Image src={SOSC} alt="SOSC Logo" />
          <div className={styles.card_body}>
            <div>
              <h2 className={styles.card_title}>President</h2>
              <p>June 2023 - Present</p>
            </div>
            <p>
              SOSC is a community driven by Tech Enthusiasts, where our prime
              goal is to learn and share our knowledge to other members, and
              guide other students in the technical fields by building projects,
              conducting workshops and hackathons
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements
