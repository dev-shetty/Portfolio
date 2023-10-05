import { v4 as uuid } from "uuid"
import ChromaticoMobile from "../assets/projects/ChromaticoMobile.png"
import ExpenseTrackerMobile from "../assets/projects/ExpenseTrackerMobile.png"
import RazerPC from "../assets/projects/RazerPC.png"
import RolexPC from "../assets/projects/RolexPC.png"
import CloudsPC from "../assets/projects/CloudsPC.png"

export const projectsOG = [
  {
    id: uuid(),
    name: "Chromatico",
    tagline: "A Color Generator",
    sourceCode: "https://github.com/Deveesh-Shetty/Chromatico",
    liveUrl: "https://chromatico.vercel.app/",
    blogUrl: null,
    descriptionOne:
      "Chromatico is a versatile color palette generator website that offers an easy way to create and save custom color schemes. With its intuitive interface, users can effortlessly generate color palettes and copy or save them for use in various projects. The website also includes convenient features such as color clipboards and a history of previously generated color combinations, allowing users to keep track of their favorite palettes. Additionally, Chromatico includes a complement color feature that suggests a complementary hue for the current palette, making it simple to create eye-catching and harmonious color combinations.",
    descriptionTwo:
      "Chromatico is built using a combination of cutting-edge web development technologies, including React + vite, tailwindcss, and typescript it also uses framer motion library for awesome animations. The use of these powerful tools not only ensures that the website is fast and responsive but also guarantees a robust and scalable codebase that can easily accommodate future feature updates and improvements. ",
    img: ChromaticoMobile,
  },
  {
    id: uuid(),
    name: "Razer Clone",
    tagline: "Clone of Razer Website",
    sourceCode: "https://github.com/Deveesh-Shetty/Razer-Clone",
    liveUrl: "https://razer-clone-iota.vercel.app/",
    blogUrl: null,
    descriptionOne:
      "Razer-Clone is a replica of the popular Razer website, built using React + Vite and Tailwind. With its sleek and modern design, Razer-Clone offers a seamless user experience that closely mirrors the original site, allowing users to easily navigate through the website and explore all of its features.",
    descriptionTwo:
      "Razer website was an excellent resource for inspiration and reference. With its clean UI and attention to detail, I developed Razer-Clone to build my frontend skills.",
    img: RazerPC,
  },
  {
    id: uuid(),
    name: "Rolex Clone",
    tagline: "Clone of Rolex Website",
    sourceCode: "https://github.com/Deveesh-Shetty/Rolex-Clone",
    liveUrl: "https://rolex-clone.vercel.app/",
    blogUrl: null,
    descriptionOne:
      "Rolex-Clone is a stunning replica of the iconic Rolex website, built using cutting-edge web development technologies like React + Vite and Tailwind. Rolex-clone offers an exceptional user experience that closely mirrors the original site, allowing users to explore Rolex's exquisite collection of watches.",
    descriptionTwo:
      "Rolex website serves as an excellent source of inspiration and reference, with its awesome UI. Rolex-Clone demonstrates the power and versatility of modern web development tools, delivering a flawless user experience and help improving my frontend skills.",
    img: RolexPC,
  },
  {
    id: uuid(),
    name: "Expense Tracker",
    tagline: "Track Your Expenses",
    sourceCode: "https://github.com/Deveesh-Shetty/Expense-Tracker",
    liveUrl: null,
    blogUrl:
      "https://dev.to/deveeshshetty1209/mongodb-atlas-hackathon-2022-on-dev-1ni9",
    descriptionOne:
      "Expense Tracker is a web application designed to help users track their expenses and earnings with ease. Using the latest web development technologies like React + Vite and TailwindCSS. Expense Tracker delivers a beautiful and responsive user interface. Users can add their expenses and earnings with just a few clicks, and the app automatically calculates their current balance. Expense Tracker also includes a comprehensive history of all transactions, allowing users to view and analyze their spending habits over time. Additionally, the app includes a stock page that allows users to keep track of all their stock holdings, ensuring they have a complete picture of their financial portfolio at all times.",
    descriptionTwo:
      "Built using React + Vite and TailwindCSS in the frontend and NodeJS, ExpressJS, and MongoDB in the backend. Expense Tracker is a utility application for a user to track and manage their expenses.",
    img: ExpenseTrackerMobile,
  },
  {
    id: uuid(),
    name: "Clouds",
    tagline: "Clouds - A CSE Organization",
    sourceCode: "https://github.com/Deveesh-Shetty/Clouds",
    liveUrl: "https://cs-clouds.netlify.app/",
    blogUrl: "",
    descriptionOne:
      "Clouds (Computer Legends Of the Unified Department) is an organization created by the students of the Computer Science and Engineering branch at Sahyadri College of Engineering and Management. This website lists all of the Clouds Bearers along with their respective roles, providing a clear view of the team structure. Additionally, the website features an event section that displays all upcoming events within the college, giving visitors a glimpse into the activities and opportunities available at Sahyadri.",
    descriptionTwo:
      "The website has been built using React, providing a modern and efficient user experience for all visitors.",
    img: CloudsPC,
  },
]

export const projectsLength = projectsOG.length

export const projects = [
  {
    id: uuid(),
    name: "Chromatico",
    description:
      "A color generator website that will help you find a good color combination for your upcoming projects or designs.",
    image: "/projects/chromatico.png",
    labels: ["React.js", "TypeScript", "TailwindCSS"],
    date: "March 2023",
    sourceCode: "https://github.com/Deveesh-Shetty/Chromatico",
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
    sourceCode: "https://github.com/Deveesh-Shetty/Rudraksh",
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
    sourceCode: "https://github.com/Deveesh-Shetty/tiles",
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
    sourceCode: "https://github.com/Deveesh-Shetty/Razer-Clone",
    liveUrl: "https://razer-clone-iota.vercel.app",
  },
  {
    id: uuid(),
    name: "Rolex Website Clone",
    description: "A clone of Rolex website Landing Page.",
    image: "/projects/rolex-clone.png",
    labels: ["Typescript", "React.js", "TailwindCSS"],
    date: "February 2023",
    sourceCode: "https://github.com/Deveesh-Shetty/Rolex-Clone",
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
    sourceCode: "https://github.com/Deveesh-Shetty/Expense-Tracker",
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
    sourceCode: "https://github.com/Deveesh-Shetty/Clouds",
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
    sourceCode: "https://github.com/Deveesh-Shetty/API-Forever",
    liveUrl: "https://api-forever.netlify.app",
  },
].sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
// Sort in descending order based on the recent project
