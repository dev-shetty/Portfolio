import Home from "@/components/home"
import TechStack from "@/components/tech-stack"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Talks from "@/components/talks"

export type SearchParamsType = { [key: string]: string | string[] | undefined }
type HomePageProps = {
  searchParams: SearchParamsType
}

export default function HomePage({ searchParams }: HomePageProps) {
  return (
    <>
      {/* <Blob /> */}
      <main className="py-24">
        {/* <Landing /> */}
        <Home />
        <TechStack />
        <Projects params={searchParams} />
        <Experience />
        <Talks />
      </main>
    </>
  )
}
