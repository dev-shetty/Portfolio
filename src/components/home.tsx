import Image from "next/image"
import ProfileImg from "@/assets/images/Deveesh.jpg"
import Link from "next/link"
import { icons as Icon } from "@/lib/icons"
import { H1 } from "@/components/ui/headers"
import Button from "@/components/ui/button"
import { siteConfig } from "@/lib/config"

function Home() {
  return (
    <main className="flex flex-col-reverse xl:flex-row items-center gap-16 py-8">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <H1>Deveesh Shetty</H1>
          <div className="flex flex-col gap-4">
            <p>
              I am a Frontend Developer working with modern frontend libraries
              and frameworks, including React and Next.js. Skilled in
              translating design into responsive and interactive web interfaces.
            </p>
            <p>
              I love exploring new technologies, mess around with them, and
              build applications for fun. Developer by passion and artist by
              hobby.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="flex gap-4 text-xl md:text-2xl">
            <Link
              href={siteConfig.socials.github}
              target="_blank"
              className="hover:text-slate-300 transition-colors"
            >
              <Icon.GitHub />
            </Link>
            <Link
              href={siteConfig.socials.linkedin}
              target="_blank"
              className="hover:text-slate-300 transition-colors"
            >
              <Icon.LinkedIn />
            </Link>
            <Link
              href={siteConfig.socials.twitter}
              target="_blank"
              className="hover:text-slate-300 transition-colors"
            >
              <Icon.Twitter />
            </Link>
          </div>
          <Button className="w-full py-2" asChild>
            <Link href="Resume.pdf" download="Deveesh Resume.pdf">
              <span>Resume</span>
              <Icon.Download />
            </Link>
          </Button>
        </div>
      </div>
      <div className="rounded-full">
        <Image
          src={ProfileImg}
          alt="Deveesh Profile"
          className="rounded-md"
          priority
        />
      </div>
    </main>
  )
}

export default Home
