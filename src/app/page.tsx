import Home from "@/components/home"
import TechStack from "@/components/tech-stack"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Talks from "@/components/talks"
import Achievements from "@/components/achievements"

export type SearchParamsType = { [key: string]: string | string[] | undefined }
type HomePageProps = {
  searchParams: SearchParamsType
}

export default function HomePage({ searchParams }: HomePageProps) {
  return (
    <div className="container mx-auto lg:px-48 md:px-24 px-8">
      <Home />
      <TechStack />
      <Projects params={searchParams} />
      <Experience />
      <Talks />
      <Achievements params={searchParams} />
    </div>
  )
}
