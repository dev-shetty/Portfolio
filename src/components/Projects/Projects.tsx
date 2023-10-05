"use client"

import styles from "@/styles/Projects.module.css"
import { useState } from "react"
import { projectsOG } from "@/lib/projects"
import Project from "@/components/Projects/Project"

export default function Projects() {
  const [index, setIndex] = useState(0)

  return (
    <main className={styles.main}>
      {projectsOG.map(
        (project, i) =>
          index === i && (
            <Project
              key={project.id}
              project={project}
              index={index}
              setIndex={setIndex}
            />
          )
      )}
    </main>
  )
}
