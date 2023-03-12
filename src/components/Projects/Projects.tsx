import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Icon } from "@iconify/react"
import ChromaticoMobile from "../../assets/projects/ChromaticoMobile.svg"
import styles from "./Projects.module.css"

type Props = {
  project: {
    id: string
    name: string
  }
}

function Projects({ project }: Props) {
  const { name } = project
  return (
    <AnimatePresence>
      <motion.section
        className={styles.container}
        initial={{ x: 1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.2 }}
      >
        <div className={styles.projects}>
          <div className={styles.content}>
            <div className={styles.content_heading}>
              <h2>{name}</h2>
              <h3>A Color Generator </h3>
            </div>
            <div className={styles.content_paragraph}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                dolor iusto atque architecto odio, optio nihil ipsa at aut
                delectus dolorum saepe. Sequi at expedita praesentium ullam
                voluptatem velit, fugit ab! Similique odit necessitatibus velit
                culpa, nulla neque tempore qui voluptate temporibus obcaecati
                earum sint itaque! Exercitationem odit iste ad?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptate quo dicta eaque, labore placeat odio deleniti,
                suscipit tenetur itaque assumenda tempore. Vitae, ipsa?
                Doloribus!
              </p>
            </div>
            <div className={styles.content_navigations}>
              <div>
                <button className={styles.code_btn}>
                  <Icon icon="ph:code" />
                  <p>Source Code</p>
                </button>
                <button>Blog</button>
              </div>
              <button>Go Live</button>
            </div>
            <div className={styles.primary_navigation}>
              <button data-function="prev">
                <Icon icon="ic:baseline-arrow-left" />
                <p>Prev</p>
              </button>
              <button data-function="next">
                <p>Next</p>
                <Icon icon="ic:baseline-arrow-right" />
              </button>
            </div>
          </div>
          <div className={styles.image_container}>
            <a href="https://chromatico.vercel.app" target="_blank">
              <Image src={ChromaticoMobile} alt="Chromatico Mobile" />
            </a>
          </div>
        </div>
        <div className={styles.scroll_text}></div>
      </motion.section>
    </AnimatePresence>
  )
}

export default Projects
