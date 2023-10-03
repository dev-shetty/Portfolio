import Projects from "@/components/Projects/Projects"
import Blob from "@/components/UIComponents/Blob/Blob"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Deveesh Shetty - Projects",
  description:
    "Projects built by Deveesh Shetty showcased in my portfolio site",
}

function ProjectPage() {
  return (
    <>
      {/* <Navbar /> */}
      <Blob />
      <Projects />
    </>
  )
}

export default ProjectPage
