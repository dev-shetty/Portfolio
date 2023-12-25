import { H2, H3 } from "@/components/ui/headers"
import { experiences } from "@/lib/experiences"
import { icons as Icon } from "@/lib/icons"
import Image from "next/image"
import Link from "next/link"

export default function Experience() {
  return (
    <section className="my-12">
      <H2>Experience</H2>
      <div className="grid lg:grid-cols-2 gap-4">
        {experiences.map((experience) => (
          <div key={experience.id} className="grid grid-cols-5 gap-4">
            <div className="col-span-2 md:col-span-1 relative w-full aspect-square">
              <Image
                src={experience.organization.logo}
                alt={`${experience.organization.name} Logo`}
                className="block"
                fill
                sizes="100%"
              />
            </div>
            <div className="col-span-3 md:col-span-4 flex flex-col">
              <H3 className="text-xl font-bold">{experience.title}</H3>
              <div className="flex flex-col">
                <Link
                  href={experience.organization.url}
                  target="_blank"
                  className="flex items-center gap-2 hover:underline underline-offset-2 text-slate-300 hover:text-slate-100 transition-colors"
                >
                  <p>
                    {experience.organization.name}{" "}
                    <Icon.Visit className="inline" />
                  </p>
                </Link>
                <p>
                  {experience.startDate} - {experience.endDate ?? "present"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
