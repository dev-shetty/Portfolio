import Image from "next/image"
import Profile from "@/assets/images/Deveesh.jpg"
import styles from "./contact.module.css"
import { icons as Icon } from "@/lib/icons"
import Link from "next/link"
import { siteConfig } from "@/lib/config"

function Contact() {
  return (
    <div className="flex items-center justify-center">
      <div
        className={`${styles.card} text-sm sm:text-base grid grid-cols-1 w-4/5 px-2 xl:w-3/5 py-8 rounded-xl`}
      >
        <div className="relative mx-auto w-1/2">
          <Image
            src={Profile}
            alt="Deveesh Profile"
            className="block aspect-square rounded-full transition-all duration-300"
            priority
          />
        </div>
        <div className="flex flex-col items-center w-full gap-4">
          <div className="mt-4 text-center transition-all">
            <p className="text-xl md:text-2xl transition-all">Deveesh Shetty</p>
            <p>deveeshshetty@gmail.com</p>
            <p className="my-2">
              Frontend Developer | President SOSC | Open Source Enthusiast
            </p>
          </div>
          <div
            className={`${styles.socials} flex justify-center items-center h-full w-4/5 gap-2`}
          >
            <div className="flex w-4/5 h-12 items-center border border-white rounded-xl cursor-pointer justify-center hover:bg-slate-200 transition-all duration-300 hover:text-slate-800 text-xl">
              <Link
                href={siteConfig.socials.github}
                target="_blank"
                className="flex gap-4 items-center"
              >
                <Icon.GitHub />
              </Link>
            </div>
            <div className="flex w-4/5 h-12 items-center border border-white rounded-xl cursor-pointer justify-center hover:bg-slate-200 transition-all duration-300 hover:text-slate-800 text-xl">
              <Link
                href={siteConfig.socials.linkedin}
                target="_blank"
                className="flex gap-4 items-center"
              >
                <Icon.LinkedIn />
              </Link>
            </div>
            <div className="flex w-4/5 h-12 items-center border border-white rounded-xl cursor-pointer justify-center hover:bg-slate-200 transition-all duration-300 hover:text-slate-800 text-xl">
              <Link
                href={siteConfig.socials.twitter}
                target="_blank"
                className="flex gap-4 items-center"
              >
                <Icon.Twitter />
              </Link>
            </div>
            <div className="flex w-4/5 h-12 items-center border border-white rounded-xl cursor-pointer justify-center hover:bg-slate-200 transition-all duration-300 hover:text-slate-800 text-xl">
              <Link
                href={siteConfig.socials.devTo}
                target="_blank"
                className="flex gap-4 items-center"
              >
                <Icon.DevTo />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
