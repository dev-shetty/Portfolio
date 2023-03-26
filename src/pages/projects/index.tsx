import { useState } from "react"
import Projects from "@/components/Projects/Projects"
import Blob from "@/components/UIComponents/Blob/Blob"
import Navbar from "@/components/UIComponents/Navbar/Navbar"
import Head from "next/head"
import { projects } from "@/lib/projects"
import styles from "../../styles/Projects.module.css"

function ProjectPage() {
  const [index, setIndex] = useState(0)

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
        <main className={styles.main}>
          {projects.map(
            (project, i) =>
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
