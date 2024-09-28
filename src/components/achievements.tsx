import { SearchParamsType } from "@/app/page"
import Button from "@/components/ui/button"
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
    <section className="my-16">
      <H2>Achievements</H2>
      <div className="grid gap-4">
        {achievements.map(
          (achievement, index) =>
            index < LIMIT && (
              <div
                className="flex flex-col border-b pb-2 last-of-type:border-b-0 last-of-type:pb-0 border-b-slate-800"
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
        <Button className="mx-auto py-2 w-fit md:w-fit px-16" asChild>
          <Link
            href={`?${new URLSearchParams({
              "show-achievements":
                LIMIT >= achievements.length
                  ? "3"
                  : achievements.length.toString(),
            })}`}
            scroll={false}
          >
            {LIMIT >= achievements.length ? "View Less" : "View More"}
          </Link>
        </Button>
      </div>
    </section>
  )
}
