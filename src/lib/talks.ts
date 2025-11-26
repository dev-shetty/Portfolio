import { v4 as uuid } from "uuid"

type Talk = {
  id: string
  title: string
  organizer: string
  description: string
  date: string
  blog: string | null
  video: string | null
}

export const talks: Talk[] = [
  {
    id: uuid(),
    title: "Commit to Success",
    organizer: "SOSC",
    description: "Hands-on session on Introduction to Git and GitHub.",
    date: "14 July, 2023",
    blog: "https://www.sosc.org.in/events/commit-to-success",
    video: null,
  },
  {
    id: uuid(),
    title: "API 101 - Introduction to APIs",
    organizer: "Postman and SOSC",
    description: "Hands-on session on Introduction to API.",
    date: "15 Oct, 2023",
    blog: "https://www.sosc.org.in/events/API_101-Workshop",
    video: "https://www.youtube.com/watch?v=UUGHJh-EgDs",
  },
  {
    id: uuid(),
    title: "Promising with JavaScript",
    organizer: "DevHost by SOSC",
    description:
      "A talk on asynchronous JavaScript telling about promises and event loop.",
    date: "24 Dec, 2023",
    blog: null,
    video:
      "https://www.youtube.com/live/84TgdSg4bVY?si=T1uLhzBhfqaN_i_t&t=7419",
  },
  {
    id: uuid(),
    title: "Branching with Git",
    organizer: "Department of CSE and SOSC",
    description:
      "A hands-on workshop on Git and GitHub for juniors as an peer to peer initiative by CSE Department.",
    date: "7 June, 2024",
    blog: null,
    video: null,
  },
  {
    id: uuid(),
    title: "DevTools tricks you'll wonder how you coded without.",
    organizer: "Manipal Dot Net, FOSS United Mangalore",
    description:
      "Showing how to debug and optimize web applications using browser debugger.",
    date: "27 October, 2024",
    blog: null,
    video: null,
  },
  {
    id: uuid(),
    title: "Inside the Server, Outside the Browser",
    organizer: "TechMang, UniCourt",
    description:
      "Web rendering paradigms is like cooking, making it easy to understand CSR, SSR, SSG, ISR, and PPR.",
    date: "1 Feb, 2025",
    blog: null,
    video: null,
  },
  {
    id: uuid(),
    title: "Breakup with UseEffect, Fetch Like a Pro",
    organizer: "HackersMang, UniCourt",
    description:
      "Demonstrating Tanstack Query (React Query),  a modern, framework-agnostic library that makes managing server-side state on the client side a breeze.",
    date: "23 August, 2025",
    blog: null,
    video: null,
  },
  {
    id: uuid(),
    title: "DevTools - Building Performant Web Apps",
    organizer: "DK24",
    description:
      "Exploring the power of browser developer tools to analyze, debug, and optimize web applications for maximum performance.",
    date: "24 August, 2025",
    blog: null,
    video: "https://youtu.be/7O3dfNva1xU?si=fGjxYPiM8Pz8idIa",
  },
  {
    id: uuid(),
    title: "Sharing my learnings from contributing to AstroJS",
    organizer: "Karmic Design, FOSS United Mangalore",
    description: "My experience in contributing a feature to AstroJS.",
    date: "12 October, 2025",
    blog: null,
    video: null,
  },
  {
    id: uuid(),
    title: "Code Forward: AI • Developer • Productivity",
    organizer: "FOSS Club CE Vadakara",
    description:
      "Exploring the integration of AI in developer workflows and its impact on productivity, and building Todo list on steroids using Generative UI.",
    date: "2 November, 2025",
    blog: null,
    video: "https://youtu.be/4kJlW0Cj7z0?si=1-R8x-1yYyT9EIuJ",
  },
  {
    id: uuid(),
    title: "Building AI First Applications On Web",
    organizer: "Nexus, Srinivas Institute of Technology",
    description:
      "Building Copilot like autocomplete and AI Agents using Vercel AI SDK.",
    date: "22 November, 2025",
    blog: null,
    video: null,
  },
].sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
