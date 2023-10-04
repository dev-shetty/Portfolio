import Image from "next/image"
import { icons as Icon } from "@/lib/icons"
import Link from "next/link"

function Projects() {
  return (
    <section>
      <h2 className="my-8 text-2xl md:text-3xl border-b border-b-slate-700 pb-2 mb-4">
        Projects
      </h2>
      <div className="flex flex-col-reverse md:grid md:grid-cols-4 items-center">
        <div className="flex flex-col gap-4 col-span-3 mt-4 md:mt-0 md:pr-8">
          <div className="flex flex-col gap-2">
            <p className="text-xl">Project Name</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              fugit consequatur, aspernatur delectus veniam asperiores ad!
              Recusandae sit at ab!
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <p className="outline outline-1 px-2 py-1 rounded-md bg-slate-800 hover:bg-slate-700 cursor-pointer transition-colors">
              Label1
            </p>
            <p className="outline outline-1 px-2 py-1 rounded-md bg-slate-800 hover:bg-slate-700 cursor-pointer transition-colors">
              Label2
            </p>
            <p className="outline outline-1 px-2 py-1 rounded-md bg-slate-800 hover:bg-slate-700 cursor-pointer transition-colors">
              Label3
            </p>
            <p className="outline outline-1 px-2 py-1 rounded-md bg-slate-800 hover:bg-slate-700 cursor-pointer transition-colors">
              Label4
            </p>
          </div>
          <div className="mt-2 md:mt-0 flex justify-between">
            <p className="text-slate-300">Date</p>
            <div className="flex gap-2 text-xl">
              <Link href="/">
                <Icon.SourceCode />
              </Link>
              <Link href="/">
                <Icon.Visit />
              </Link>
            </div>
          </div>
        </div>
        <Link href="/">
          <img
            src="https://source.unsplash.com/random/1080x720"
            alt="Project Image"
            className="block object-cover rounded-r-md"
          ></img>
        </Link>
      </div>
    </section>
  )
}

export default Projects
