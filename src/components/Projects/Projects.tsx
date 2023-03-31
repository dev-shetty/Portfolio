import { Dispatch, SetStateAction, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Icon } from "@iconify/react"
import { ProjectObject } from "@/lib/types"
import { projectsLength } from "@/lib/projects"
import styles from "./Projects.module.css"

type Props = {
  index: number
  setIndex: Dispatch<SetStateAction<number>>
  project: ProjectObject
}

function Projects({ project, setIndex, index }: Props) {
  const {
    name,
    tagline,
    sourceCode,
    liveUrl,
    blogUrl,
    descriptionOne,
    descriptionTwo,
    img,
  } = project

  function next() {
    setIndex((prev) => (prev + 1) % projectsLength)
  }

  function prev() {
    if (index === 0) setIndex((prev) => (prev = projectsLength - 1))
    else setIndex((prev) => prev - 1)
  }

  function handleToggle(e: KeyboardEvent) {
    if (e.key === "ArrowLeft") prev()
    else if (e.key == "ArrowRight") next()
  }

  useEffect(() => {
    document.addEventListener("keyup", handleToggle)

    return () => {
      document.removeEventListener("keyup", handleToggle)
    }
  }, [])

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
              <h3>{tagline}</h3>
            </div>
            <div className={styles.content_paragraph}>
              <p>{descriptionOne}</p>
              <p>{descriptionTwo}</p>
            </div>
            <div className={styles.content_navigations}>
              <div>
                <button className={styles.code_btn}>
                  <Icon icon="ph:code" />
                  <a href={sourceCode!} target="_blank">
                    <p>Source Code</p>
                  </a>
                </button>
                <button className={styles.blog_btn}>
                  <a href={blogUrl!} target="_blank">
                    Blog
                  </a>
                </button>
              </div>
              <button className={styles.live_btn}>
                <a href={liveUrl!} target="_blank">
                  Go Live
                </a>
              </button>
            </div>
            <div className={styles.primary_navigation}>
              <button data-function="prev" onClick={prev}>
                <Icon icon="ic:baseline-arrow-left" />
                <p>Prev</p>
              </button>
              <button data-function="next" onClick={next}>
                <p>Next</p>
                <Icon icon="ic:baseline-arrow-right" />
              </button>
            </div>
          </div>
          <div className={styles.image_container}>
            <a href={liveUrl!} target="_blank">
              <Image src={img} alt="Chromatico Mobile" />
            </a>
          </div>
        </div>
        <div className={styles.scroll_text_container}>
          <div className={styles.scroll_text}>
            <p>{name}</p>
            <p>&bull;</p>
            <p>{name}</p>
            <p>&bull;</p>
            <p>{name}</p>
            <p>&bull;</p>
          </div>
          <div className={styles.scroll_text}>
            <p>{name}</p>
            <p>&bull;</p>
            <p>{name}</p>
            <p>&bull;</p>
            <p>{name}</p>
            <p>&bull;</p>
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  )
}

export default Projects
