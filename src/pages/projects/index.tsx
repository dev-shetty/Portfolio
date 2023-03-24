import { useEffect, useRef, useState } from "react"
import Projects from "@/components/Projects/Projects"
import Blob from "@/components/UIComponents/Blob/Blob"
import Navbar from "@/components/UIComponents/Navbar/Navbar"
import Head from "next/head"
import { projects } from "@/lib/projects"
import styles from "../../styles/Projects.module.css"

function ProjectPage() {
  const [index, setIndex] = useState(0)

  const mainRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mainHeight = mainRef.current!.clientHeight

    if (window.innerWidth <= 767) return
    containerRef.current!.style.height = `${projects.length * 100}%`

    window.onscroll = () => {
      const { scrollY } = window
      setIndex((prev) => (prev = Math.floor(scrollY / mainHeight)))
    }
  }, [])

  return (
    <>
      <Head>
        <title>Deveesh Shetty - Projects</title>
        <meta
          name="description"
          content="Projects built by Deveesh Shetty showcased in my portfolio site"
        />
      </Head>
      <>
        <div className={styles.nav}>
          <Navbar />
        </div>
        <Blob />
        <div className={styles.container} ref={containerRef}></div>
        <main className={styles.main} ref={mainRef}>
          {projects.map(
            (project, i) =>
              // index === i && <Projects key={project.id} project={project} />
              index === i && (
                <Projects
                  key={project.id}
                  project={project}
                  index={index}
                  setIndex={setIndex}
                />
              )
          )}
        </main>
      </>
    </>
  )
}

export default ProjectPage
