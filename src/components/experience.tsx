import Image from "next/image"
import Link from "next/link"
import { icons as Icon } from "@/lib/icons"
import { experiences } from "@/lib/experiences"

export default function Experience() {
  return (
    <section className="my-12">
      <h2 className="text-2xl md:text-3xl border-b border-b-slate-700 pb-2 mb-4">
        Experience
      </h2>
      <div className="grid lg:grid-cols-2 gap-2">
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
              <p className="text-xl font-bold">{experience.title}</p>
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
