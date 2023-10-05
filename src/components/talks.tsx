import Link from "next/link"
import { icons as Icon } from "@/lib/icons"
import { talks } from "@/lib/talks"

export default function Talks() {
  return (
    <section className="my-12">
      <h2 className="text-2xl md:text-3xl border-b border-b-slate-700 pb-2 mb-4">
        Talks and Workshops
      </h2>
      <div className="grid gap-4">
        {talks.map((talk) => (
          <div
            className="flex flex-col border-b pb-2 last:border-b-0 last:pb-0 border-b-slate-800"
            key={talk.id}
          >
            <div className="flex flex-col">
              <p className="text-2xl font-bold">{talk.title}</p>
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
