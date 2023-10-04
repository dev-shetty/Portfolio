import Home from "@/components/home"
import Achievements from "@/components/Achievements/Achievements"
import TechStack from "@/components/tech-stack"

export default function LandingPage() {
  return (
    <>
      {/* <Blob /> */}
      <main className="container px-4">
        {/* <Landing /> */}
        <Home />
        <TechStack />
        {/* <Achievements /> */}
      </main>
    </>
  )
}
