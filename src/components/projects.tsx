import Image from "next/image"
import { icons as Icon } from "@/lib/icons"
import Link from "next/link"
import { projects } from "@/lib/projects"

function Projects() {
  return (
    <section>
      <h2 className="my-8 text-2xl md:text-3xl border-b border-b-slate-700 pb-2 mb-4">
        Projects
      </h2>
      <div className="grid gap-6">
        {projects.map((project) => (
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-4 items-center pb-2 border-b border-b-slate-800">
            <div className="flex flex-col gap-4 col-span-3 mt-4 lg:mt-0 lg:pr-8">
              <div className="flex flex-col gap-2">
                <p className="text-xl">{project.name}</p>
                <p>{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.labels.map((label) => (
                  <p className="outline outline-1 px-2 py-1 rounded-md bg-slate-800 hover:bg-slate-700 cursor-pointer transition-colors">
                    {label}
                  </p>
                ))}
              </div>
              <div className="mt-2 lg:mt-0 flex justify-between">
                <p className="text-slate-300">{project.date}</p>
                <div className="flex gap-2 text-xl">
                  <Link href={project.sourceCode} target="_blank">
                    <Icon.SourceCode />
                  </Link>
                  {project.liveUrl && (
                    <Link href={project.liveUrl} target="_blank">
                      <Icon.Visit />
                    </Link>
                  )}
                </div>
              </div>  
            </div>
            <Link
              href={project.liveUrl ?? project.sourceCode}
              className="relative w-full aspect-video lg:border-2 border-slate-700 rounded-xl"
            >
              <Image
                src={project.image}
                alt={project.name}
                className="block rounded-xl lg:p-1"
                fill
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
