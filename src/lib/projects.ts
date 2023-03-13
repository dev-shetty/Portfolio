import { v4 as uuid } from "uuid"
import ChromaticoMobile from "../assets/projects/ChromaticoMobile.png"
import ExpenseTrackerMobile from "../assets/projects/ExpenseTrackerMobile.png"
import RazerPC from "../assets/projects/RazerPC.png"
import RolexPC from "../assets/projects/RolexPC.png"
import CloudsPC from "../assets/projects/CloudsPC.png"

export const projects = [
  {
    id: uuid(),
    name: "Chromatico",
    tagline: "A Color Generator",
    sourceCode: "https://github.com/Deveesh-Shetty/Chromatico",
    liveUrl: "https://chromatico.vercel.app/",
    blogUrl: null,
    descriptionOne: "",
    descriptionTwo: "",
    img: ChromaticoMobile,
  },
  {
    id: uuid(),
    name: "Razer Clone",
    tagline: "Clone of Razer Website",
    sourceCode: "https://github.com/Deveesh-Shetty/Razer-Clone",
    liveUrl: "https://razer-clone-iota.vercel.app/",
    blogUrl: null,
    descriptionOne: "",
    descriptionTwo: "",
    img: RazerPC,
  },
  {
    id: uuid(),
    name: "Rolex Clone",
    tagline: "Clone of Rolex Website",
    sourceCode: "https://github.com/Deveesh-Shetty/Rolex-Clone",
    liveUrl: "https://rolex-clone.vercel.app/",
    blogUrl: null,
    descriptionOne: "",
    descriptionTwo: "",
    img: RolexPC,
  },
  {
    id: uuid(),
    name: "Expense Tracker",
    tagline: "Track Your Expenses",
    sourceCode: "https://github.com/Deveesh-Shetty/Expense-Tracker",
    liveUrl: null,
    blogUrl: null,
    descriptionOne: "",
    descriptionTwo: "",
    img: ExpenseTrackerMobile,
  },
  {
    id: uuid(),
    name: "Clouds",
    tagline: "Clouds - A CSE Organization",
    sourceCode: "https://github.com/Deveesh-Shetty/Clouds",
    liveUrl: "https://cs-clouds.netlify.app/",
    blogUrl: "",
    descriptionOne: "",
    descriptionTwo: "",
    img: CloudsPC,
  },
]

export const projectsLength = projects.length
