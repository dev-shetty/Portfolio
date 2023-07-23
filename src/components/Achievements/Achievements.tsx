import Image from "next/image"
import styles from "./Achievements.module.css"
import Startupreneur from "../../assets/images/startupreneur.jpeg"
import SOSC from "../../assets/images/SOSC.jpeg"
import ThaniyaTech from "../../assets/images/ThaniyaTech.jpeg"
import CommitToSuccess from "../../assets/achievements/Commit-to-Success.jpeg"
import AchievementTile from "@/components/Achievements/AchievementTile"

function Achievements() {
  return (
    <section className={styles.container}>
      <div className={styles.heading}>
        <h2>Experience and Achievements</h2>
      </div>
      <div className={styles.card_container}>
        <AchievementTile
          image={Startupreneur}
          orgName="The Startupreneur"
          role="Developer Intern"
          tenure="Sep 2022 - Jan 2023"
          description="Worked on frontend for two e-commerce websites and built a single
          page application. Gained experience in working with a team, how to
          manage the tasks. Built my skills in frontend technologies and
          also gained in depth knowledge of Git and Github."
          orgLink="https://thestartupreneur.co/"
        />
        <AchievementTile
          image={ThaniyaTech}
          orgName="Thaniya Technologies"
          role="Technical Trainer"
          tenure="Apr 2022 - Jun 2023"
          description="Taught Web Development with React and also basics of Full Stack
          Application by building projects using MongoDB Atlas and
          ExpressJS."
          orgLink="https://thaniyatech.com/"
        />
        <AchievementTile
          image={SOSC}
          orgName="Sahyadri Open Source Community (SOSC)"
          role="President"
          tenure="Jun 2023 - Present"
          description="SOSC is a community driven by Tech Enthusiasts, where our prime
          goal is to learn and share our knowledge to other members, and
          guide other students in the technical fields by building projects,
          conducting workshops and hackathons."
          orgLink="https://sosc.org.in/"
        />
      </div>
      <div className={styles.heading}>
        <h2>Activities and Interests</h2>
        <div className={styles.activity_container}>
          <div className={styles.activity_card}>
            <Image
              src={CommitToSuccess}
              alt="Commit To Success - Workshop on Git and GitHub"
            />
            <div className={styles.activity_card_body}>
              <p>
                Sahyadri Open Source Community (SOSC) organized a workshop
                entitled “Commit to Success” - a workshop detailing Git and
                GitHub. The workshop was headed by Deveesh Shetty, President of
                SOSC.
              </p>
              <p>
                The event commenced with a short introduction to Git and GitHub
                and in what ways they are different from each other. Among
                points of discussion were: How these tools help in effective
                collaboration between coders and developers, how Git practices
                version control and how these platforms are flag-bearers of
                open-source.
              </p>
              <p>
                This event covered topics like, "add-commit-push", working in
                branches, and to send a pull request and contribute to others
                project in GitHub.
              </p>
              <p>
                Checkout the blog about Git and GitHub -{" "}
                <a
                  href="https://dev.to/devshetty/git-and-github-for-beginners-the-basics-d3n"
                  className={styles.link}
                  target="_blank"
                >
                  Here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements
