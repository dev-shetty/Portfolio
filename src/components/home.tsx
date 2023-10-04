import Image from "next/image"
import ProfileImg from "@/assets/images/Deveesh.jpg"
import { FaDownload, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import Link from "next/link"
function Home() {
  return (
    <section className="flex flex-col-reverse xl:flex-row items-center gap-16 py-8">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl border-b pb-2 mb-2 border-b-slate-700">
            Deveesh Shetty
          </h1>
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
            <Link href="https://github.com/Deveesh-Shetty" target="_blank">
              <FaGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/deveesh-shetty-908539214"
              target="_blank"
            >
              <FaLinkedin />
            </Link>
            <Link href="https://twitter.com/shettydeveesh" target="_blank">
              <FaTwitter />
            </Link>
          </div>
          <a
            href="Resume.pdf"
            download="Deveesh Resume.pdf"
            className="flex items-center gap-2 w-max px-4 py-2 bg-slate-800 rounded-md text-center hover:bg-slate-700 transition-colors"
          >
            <button>Resume</button>
            <FaDownload />
          </a>
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
    </section>
  )
}

export default Home
