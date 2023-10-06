import Link from "next/link"
import { icons as Icon } from "@/lib/icons"
import { talks } from "@/lib/talks"
import { H2, H3 } from "@/components/ui/headers"

export default function Talks() {
  return (
    <section className="my-12">
      <H2>Talks and Workshops</H2>
      <div className="grid gap-4">
        {talks.map((talk) => (
          <div
            className="flex flex-col border-b pb-2 last-of-type:border-b-0 last-of-type:pb-0 border-b-slate-800"
            key={talk.id}
          >
            <div className="flex flex-col">
              <H3>{talk.title}</H3>
              <p>
                {talk.description}{" "}
                <Link href={talk.blog} target="_blank" className="underline">
                  Read more <Icon.Visit className="inline" />
                </Link>
              </p>
            </div>
            <div className="flex gap-2">
              <p>{talk.organizer}</p>
              <p>&#8226;</p>
              <p className="text-slate-300">{talk.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
