import Image from "next/image"
import { icons as Icon } from "@/lib/icons"
import Link from "next/link"
import { projects } from "@/lib/projects"
import { SearchParamsType } from "@/app/page"
import { H2, H3 } from "@/components/ui/headers"

type ProjectProps = {
  params: SearchParamsType
}

function Projects({ params }: ProjectProps) {
  // Okay a little logic here
  // If the user has passed a query parameter "show-projects" then we will use that value as the limit
  // If the user has passed a query parameter "show-projects" with value 0 or less than 0 then we will show 3 projects
  // If the user has not passed a query parameter "show-projects" then we will show 3 projects
  let LIMIT =
    Number(params["show-projects"]) <= 0
      ? 3
      : Number(params["show-projects"]) || 3

  return (
    <section className="my-8">
      <H2>Projects</H2>
      <div className="grid gap-6">
        {projects.map(
          (project, index) =>
            index < LIMIT && (
              <div
                className="flex flex-col-reverse lg:grid lg:grid-cols-4 items-center pb-2 border-b border-b-slate-800"
                key={project.id}
              >
                <div className="flex flex-col gap-4 col-span-3 mt-4 lg:mt-0 lg:pr-8">
                  <div className="flex flex-col gap-1">
                    <H3>{project.name}</H3>
                    <p>{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.labels.map((label) => (
                      <p
                        className="outline outline-1 px-2 py-1 rounded-md bg-slate-800 hover:bg-slate-700 cursor-pointer transition-colors"
                        key={label}
                      >
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
                    sizes="100%"
                  />
                </Link>
              </div>
            )
        )}
        <div className="mx-auto">
          <Link
            href={`?${new URLSearchParams({
              "show-projects":
                LIMIT >= projects.length ? "3" : projects.length.toString(),
            })}`}
            className="px-12 outline outline-1 outline-slate-700 py-2 bg-slate-800 rounded-md text-center hover:bg-slate-700 transition-colors"
            scroll={false}
          >
            {LIMIT >= projects.length ? "View Less" : "View More"}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Projects
