import Home from "@/components/home"
import Achievements from "@/components/Achievements/Achievements"
import TechStack from "@/components/tech-stack"
import Projects from "@/components/projects"

export default function LandingPage() {
  return (
    <>
      {/* <Blob /> */}
      <main className="container">
        {/* <Landing /> */}
        <Home />
        <TechStack />
        <Projects />
        {/* <Achievements /> */}
      </main>
    </>
  )
}
