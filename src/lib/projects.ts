import { v4 as uuid } from "uuid"
export const projects = [
  {
    id: uuid(),
    name: "Chromatico",
    description:
      "A color generator website that will help you find a good color combination for your upcoming projects or designs.",
    image: "/projects/chromatico.png",
    labels: ["React.js", "TypeScript", "TailwindCSS"],
    date: "March 2023",
    sourceCode: "https://github.com/dev-shetty/Chromatico",
    liveUrl: "https://chromatico.vercel.app/",
  },
  {
    id: uuid(),
    name: "Rudraksh",
    description:
      "A web-based platform enabling farmers to identify plant diseases through image uploads, enhancing crop health management.",
    image: "/projects/rudraksh.jpg",
    labels: ["Next.js", "TypeScript", "TailwindCSS", "API"],
    date: "August 2023",
    sourceCode: "https://github.com/dev-shetty/Rudraksh",
    liveUrl: "https://rudraksh.vercel.app/",
  },
  {
    id: uuid(),
    name: "Tiles",
    description:
      "A real-time collaboration platform that enables users to collaboratively place and interact with tiles on a shared canvas.",
    image: "/projects/tiles.jpg",
    labels: ["Typescript", "Next.js", "Express.js", "MongoDB", "Sockets"],
    date: "September 2023",
    sourceCode: "https://github.com/dev-shetty/tiles",
    liveUrl: "https://placetile.vercel.app/",
  },
  {
    id: uuid(),
    name: "Razer Website Clone",
    description:
      "Cloned the Landing page of Razer website using modern web technologies.",
    image: "/projects/razer-clone.png",
    labels: ["Typescript", "React.js", "TailwindCSS"],
    date: "February 2023",
    sourceCode: "https://github.com/dev-shetty/Razer-Clone",
    liveUrl: "https://razer-clone-iota.vercel.app",
  },
  {
    id: uuid(),
    name: "Rolex Website Clone",
    description: "A clone of Rolex website Landing Page.",
    image: "/projects/rolex-clone.png",
    labels: ["Typescript", "React.js", "TailwindCSS"],
    date: "February 2023",
    sourceCode: "https://github.com/dev-shetty/Rolex-Clone",
    liveUrl: "https://rolex-clone.vercel.app/",
  },
  {
    id: uuid(),
    name: "Expense Tracker",
    description:
      "A comprehensive utility application for expense and stock tracking with a clean and minimalist user interface.",
    image: "/projects/expense-tracker.jpeg",
    labels: ["Javascript", "React.js", "TailwindCSS", "Express.js", "MongoDB"],
    date: "December 2022",
    sourceCode: "https://github.com/dev-shetty/Expense-Tracker",
    liveUrl: null,
  },
  {
    id: uuid(),
    name: "Clouds",
    description:
      "A user-friendly website for the CS Department's Clouds Organization platform for department events and office bearer details.",
    image: "/projects/clouds.png",
    labels: ["Javascript", "React.js", "CSS"],
    date: "December 2022",
    sourceCode: "https://github.com/dev-shetty/Clouds",
    liveUrl: "https://cs-clouds.netlify.app",
  },
  {
    id: uuid(),
    name: "API Forever",
    description:
      "My first ever react project, it is a simple website that uses public APIs like Jokes, Quotes, etc.",
    image: "/projects/api-forever.png",
    labels: ["Javascript", "React.js", "CSS", "API"],
    date: "August 2022",
    sourceCode: "https://github.com/dev-shetty/API-Forever",
    liveUrl: "https://api-forever.netlify.app",
  },
].sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
// Sort in descending order based on the recent project
