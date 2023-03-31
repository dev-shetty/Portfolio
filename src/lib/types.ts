import { StaticImageData } from "next/image"

export interface ProjectObject {
  id: string
  name: string
  tagline: string
  sourceCode: string | null
  liveUrl: string | null
  blogUrl: string | null
  descriptionOne: string
  descriptionTwo: string
  img: StaticImageData
}
