import { v4 as uuid } from "uuid"

type Position =
  | "1st Place"
  | "2nd Place"
  | "3rd Place"
  | "Finalist"
  | "Participant"

type Achievements = {
  id: string
  competition: string
  position: Position
  description: string
  date: string
  teamMembers: string[]
  organizer: string
}

export const achievements: Achievements[] = [
  {
    id: uuid(),
    competition: "Smart India Internal Hackathon",
    position: "3rd Place",
    description:
      "Proposed Idea and Prototype for Smart Irrigation System using AI and IoT.",
    date: "September 2023",
    teamMembers: [
      "Srujan Rai",
      "Akkil MG",
      "Rishab Budale",
      "Varshaa Shetty",
      "Sinchana PR",
    ],
    organizer: "Sahyadri College of Engineering and Management",
  },
  {
    id: uuid(),
    competition: "Nivhack 2023",
    position: "Finalist",
    description:
      "Developed a web-based application for demand forecasting and warehouse management using AI and Google Cloud.",
    teamMembers: ["Srujan Rai", "Akkil MG", "Rishab Budale"],
    date: "August 2023",
    organizer: "Niveus Solutions",
  },
  {
    id: uuid(),
    competition: "API Literacy",
    position: "2nd Place",
    description:
      "Built Rudraksh, web-based plant disease detection through image uploads.",
    teamMembers: ["Srujan Rai", "Sannidhi Kaje", "Kaushik KU", "Divya P"],
    date: "August 2023",
    organizer: "IEEE Mangalore Subsection",
  },
  {
    id: uuid(),
    competition: "Hacknight, DevHost 2022",
    position: "1st Place",
    description:
      "Developed a realtime driver tracking application with React.js and Leaflet.js.",
    teamMembers: ["Akkil MG", "Tejas GK"],
    date: "October 2022",
    organizer: "SOSC",
  },
  {
    id: uuid(),
    competition: "Cyber Security Hackathon",
    position: "3rd Place",
    description:
      "Secured by capturing flags by decoding patterns, and breaking into Linux Servers",
    date: "June 2022",
    teamMembers: ["Individual"],
    organizer: "CyberSapiens, Mangalore",
  },
]
