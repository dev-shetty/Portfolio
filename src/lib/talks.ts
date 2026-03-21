type Talk = {
  id: string
  title: string
  organizer: string
  description: string
  date: string
  blog: string | null
  video: string | null
  image: string | null
}

export const talks: Talk[] = [
  {
    id: "commit-to-success",
    title: "Commit to Success",
    organizer: "SOSC",
    description: "Hands-on session on Introduction to Git and GitHub.",
    date: "14 July, 2023",
    blog: "https://www.sosc.org.in/events/commit-to-success",
    video: null,
    image: null,
  },
  {
    id: "api-101",
    title: "API 101 - Introduction to APIs",
    organizer: "Postman and SOSC",
    description: "Hands-on session on Introduction to API.",
    date: "15 Oct, 2023",
    blog: "https://www.sosc.org.in/events/API_101-Workshop",
    video: "https://www.youtube.com/watch?v=UUGHJh-EgDs",
    image: null,
  },
  {
    id: "promising-with-js",
    title: "Promising with JavaScript",
    organizer: "DevHost by SOSC",
    description:
      "A talk on asynchronous JavaScript telling about promises and event loop.",
    date: "24 Dec, 2023",
    blog: null,
    video:
      "https://www.youtube.com/live/84TgdSg4bVY?si=T1uLhzBhfqaN_i_t&t=7419",
    image: null,
  },
  {
    id: "branching-with-git",
    title: "Branching with Git",
    organizer: "Department of CSE and SOSC",
    description:
      "A hands-on workshop on Git and GitHub for juniors as an peer to peer initiative by CSE Department.",
    date: "7 June, 2024",
    blog: null,
    video: null,
    image: null,
  },
  {
    id: "devtools-tricks",
    title: "DevTools tricks you'll wonder how you coded without.",
    organizer: "Manipal Dot Net, FOSS United Mangalore",
    description:
      "Showing how to debug and optimize web applications using browser debugger.",
    date: "27 October, 2024",
    blog: null,
    video: null,
    image: null,
  },
  {
    id: "inside-server-outside-browser",
    title: "Inside the Server, Outside the Browser",
    organizer: "TechMang, UniCourt",
    description:
      "Web rendering paradigms is like cooking, making it easy to understand CSR, SSR, SSG, ISR, and PPR.",
    date: "1 Feb, 2025",
    blog: null,
    video: null,
    image: "/talks/inside-server-outside-browser.webp",
  },
  {
    id: "breakup-with-useeffect",
    title: "Breakup with UseEffect, Fetch Like a Pro",
    organizer: "HackersMang, UniCourt",
    description:
      "Demonstrating Tanstack Query (React Query),  a modern, framework-agnostic library that makes managing server-side state on the client side a breeze.",
    date: "23 August, 2025",
    blog: null,
    video: null,
    image: "/talks/breakup-with-useeffect.webp",
  },
  {
    id: "devtools-performant-web-apps",
    title: "DevTools - Building Performant Web Apps",
    organizer: "DK24",
    description:
      "Exploring the power of browser developer tools to analyze, debug, and optimize web applications for maximum performance.",
    date: "24 August, 2025",
    blog: null,
    video: "https://youtu.be/7O3dfNva1xU?si=fGjxYPiM8Pz8idIa",
    image: "/talks/devtools-performant-web-apps.webp",
  },
  {
    id: "contributing-to-astrojs",
    title: "Sharing my learnings from contributing to AstroJS",
    organizer: "Karmic Design, FOSS United Mangalore",
    description: "My experience in contributing a feature to AstroJS.",
    date: "12 October, 2025",
    blog: null,
    video: null,
    image: "/talks/contributing-to-astrojs.webp",
  },
  {
    id: "code-forward-ai",
    title: "Code Forward: AI • Developer • Productivity",
    organizer: "FOSS Club CE Vadakara",
    description:
      "Exploring the integration of AI in developer workflows and its impact on productivity, and building Todo list on steroids using Generative UI.",
    date: "2 November, 2025",
    blog: null,
    video: "https://tinyurl.com/Code-forward",
    image: "/talks/code-forward-ai.webp",
  },
  {
    id: "building-ai-first-apps",
    title: "Building AI First Applications On Web",
    organizer: "Nexus, Srinivas Institute of Technology",
    description:
      "Building Copilot like autocomplete and AI Agents using Vercel AI SDK.",
    date: "22 November, 2025",
    blog: null,
    video: null,
    image: "/talks/building-ai-first-apps.webp",
  },
  {
    id: "browser-can-do-this",
    title: "Wait, my browser can do this?",
    organizer: "Hackersmang, UniCourt",
    description:
      "Execute powerful AI tasks—translation, summarization, proofreading, prompting, and more—completely on your browser, with no server calls and no cloud dependencies.",
    date: "29 November, 2025",
    blog: null,
    video: null,
    image: "/talks/browser-can-do-this.webp",
  },
  {
    id: "microfrontends-gke",
    title: "Designing, Deploying, and Scaling Microfrontends on Google Kubernetes Engine (GKE)",
    organizer: "Devfest, GDG Mangalore",
    description:
      "A demo session on designing microfrontends and scaling them on Google Kubernetes Engine (GKE) with Darshan Bhandary.",
    date: "13 December, 2025",
    blog: null,
    video: null,
    image: "/talks/microfrontends-gke.webp",
  },
  {
    id: "client-server-architecture",
    title: "Introduction to Client-Server Architecture, and make your apps communicate",
    organizer: "GDG on Campus, SCEM",
    description:
      "Exploring client-server architecture fundamentals — requests, responses, protocols, and communication patterns.",
    date: "16 December, 2025",
    blog: null,
    video: "https://drive.google.com/file/d/1wjdN7KQEhKqgsKZIqYOha3OOUQMaP_M_/view?usp=drive_link",
    image: "/talks/client-server-architecture.webp",
  },
  {
    id: "elk-stack",
    title: "From Logs to Insights: Mastering the ELK Stack",
    organizer: "MangaloreFOSS, FOSS United Mangalore",
    description:
      "Hands-on workshop on collecting, processing, and visualizing logs for monitoring and debugging, with Darshan Bhandary and Harshith Poojary.",
    date: "18 January, 2026",
    blog: "https://www.linkedin.com/posts/fossunitedmangalore_from-logs-to-insights-mastering-the-elk-ugcPost-7424846492106092547-2DTP",
    video: null,
    image: "/talks/elk-stack.webp",
  },
  {
    id: "motiajs",
    title: "Event- Driven Backends Made Simple with Motia.js",
    organizer: "TechMang, Wrkwrk",
    description:
      "Modeling backend logic as event-triggered flows with clean, reliable workflows, with Darshan Bhandary.",
    date: "31 January, 2026",
    blog: "https://www.linkedin.com/posts/hackersmang_techmang26-techmang26-ugcPost-7422915298179092480-s54h",
    video: null,
    image: "/talks/motiajs.webp",
  },
].sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
