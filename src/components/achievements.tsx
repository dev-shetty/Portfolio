import { SearchParamsType } from "@/app/page"
import { H2, H3 } from "@/components/ui/headers"
import { achievements } from "@/lib/achievements"
import Link from "next/link"

type AchievementProps = {
  params: SearchParamsType
}

export default function Achievements({ params }: AchievementProps) {
  let LIMIT =
    Number(params["show-achievements"]) <= 0
      ? 3
      : Number(params["show-achievements"]) || 3
  return (
    <section className="my-12">
      <H2>Achievements</H2>
      <div className="grid gap-4">
        {achievements.map(
          (achievement, index) =>
            index < LIMIT && (
              <div
                className="flex flex-col border-b pb-2 last:border-b-0 last:pb-0 border-b-slate-800"
                key={achievement.id}
              >
                <div className="flex flex-col">
                  <H3>
                    {achievement.position} &#8226; {achievement.competition}
                  </H3>
                  <div className="flex flex-wrap gap-1 mt-1 mb-4">
                    {achievement.teamMembers.map((member) => (
                      <p
                        className="outline outline-1 outline-slate-700 bg-slate-700 px-2 rounded-md"
                        key={member}
                      >
                        {member}
                      </p>
                    ))}
                  </div>
                  <p>{achievement.description} </p>
                </div>
                <p></p>
                <div className="flex flex-col mt-2">
                  <p>{achievement.organizer}</p>
                  <p className="text-slate-300">{achievement.date}</p>
                </div>
              </div>
            )
        )}
        <div className="mx-auto">
          <Link
            href={`?${new URLSearchParams({
              "show-achievements":
                LIMIT >= achievements.length
                  ? "3"
                  : achievements.length.toString(),
            })}`}
            className="px-12 outline outline-1 outline-slate-700 py-2 bg-slate-800 rounded-md text-center hover:bg-slate-700 transition-colors"
            scroll={false}
          >
            {LIMIT >= achievements.length ? "View Less" : "View More"}
          </Link>
        </div>
      </div>
    </section>
  )
}
