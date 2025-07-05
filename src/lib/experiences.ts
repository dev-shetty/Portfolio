import { v4 as uuid } from "uuid";

type ExperienceType = "work" | "community" | "education";

interface Experience {
  id: string;
  title: string;
  type: ExperienceType;
  description?: string;
  organization: {
    name: string;
    url: string;
    logo: string;
  };
  startDate: string;
  endDate: string | null;
}

const experiences: Experience[] = [
  {
    id: uuid(),
    title: "Software Engineer",
    type: "work" as const,
    description:
      "Working on building and improving the Levels.fyi platform, focusing on frontend development with Next.js and TypeScript.",
    organization: {
      name: "Levels.fyi",
      url: "https://www.levels.fyi/",
      logo: "/experiences/levels-square.png",
    },
    startDate: "Jun 2025",
    endDate: null,
  },
  {
    id: uuid(),
    title: "Software Engineering Intern",
    type: "work" as const,
    description:
      "Working on building and improving the Levels.fyi platform, focusing on frontend development with Next.js and TypeScript.",
    organization: {
      name: "Levels.fyi",
      url: "https://www.levels.fyi/",
      logo: "/experiences/levels-square.png",
    },
    startDate: "Sep 2024",
    endDate: "Jun 2025",
  },
  {
    id: uuid(),
    title: "Technical Intern",
    type: "work" as const,
    description:
      "Worked on developing and maintaining cloud-native applications using AWS services and Kubernetes.",
    organization: {
      name: "Niveus Solutions",
      url: "https://niveussolutions.com/",
      logo: "/experiences/niveus.jpeg",
    },
    startDate: "Nov 2023",
    endDate: "Feb 2024",
  },
  {
    id: uuid(),
    title: "Full Stack Developer Intern",
    type: "work" as const,
    description:
      "Developed full-stack applications using React, Node.js, and MongoDB. Implemented key features and improved user experience.",
    organization: {
      name: "The Startupreneur",
      url: "https://thestartupreneur.co/",
      logo: "/experiences/startupreneur.jpeg",
    },
    startDate: "Sep 2022",
    endDate: "Jan 2023",
  },
  {
    id: uuid(),
    title: "Technical Trainer",
    type: "work" as const,
    description:
      "Conducted technical training sessions on web development technologies for college students.",
    organization: {
      name: "Thaniya Technologies",
      url: "https://thaniyatech.com/",
      logo: "/experiences/thaniyatech.jpeg",
    },
    startDate: "Apr 2023",
    endDate: "Jun 2023",
  },
  {
    id: uuid(),
    title: "President",
    type: "community" as const,
    description:
      "Lead open-source community at Sahyadri, organizing events, workshops, and hackathons to promote open source.",
    organization: {
      name: "Sahyadri Open Source Community (SOSC)",
      url: "https://sosc.org.in/",
      logo: "/experiences/sosc.jpeg",
    },
    startDate: "Jun 2023",
    endDate: "Oct 2024",
  },
  {
    id: uuid(),
    title: "Technical Team Lead",
    type: "community" as const,
    description:
      "Lead technical initiatives and organizing events for IEEE student members in the Mangalore region.",
    organization: {
      name: "IEEE Mangalore Subsection",
      url: "https://ieee.org/",
      logo: "/experiences/ieee.png",
    },
    startDate: "Mar 2024",
    endDate: "Dec 2024",
  },
  {
    id: uuid(),
    title: "Core Team - FOSS Mangalore",
    type: "community" as const,
    description:
      "Organizing and conducting events to promote Free and Open Source Software in Mangalore.",
    organization: {
      name: "FOSS United",
      url: "https://fossunited.org/",
      logo: "/experiences/foss.svg",
    },
    startDate: "Apr 2024",
    endDate: null,
  },
  {
    id: uuid(),
    title: "Postman Student Leader",
    type: "community" as const,
    description:
      "Conducted workshops and training sessions on API development and testing using Postman.",
    organization: {
      name: "Postman",
      url: "https://postman.com/",
      logo: "/experiences/postman.png",
    },
    startDate: "Oct 2022",
    endDate: "Oct 2023",
  },
  {
    id: uuid(),
    title: "B.E in Computer Science",
    type: "education" as const,
    description: "Bachelor's degree in Computer Science and Engineering",
    organization: {
      name: "Sahyadri College of Engineering and Management",
      url: "https://sahyadri.edu.in/",
      logo: "/experiences/sahyadri.png",
    },
    startDate: "Jun 2021",
    endDate: "Jun 2025",
  },
].sort((a, b) => Date.parse(b.startDate) - Date.parse(a.startDate));

export const workExperiences = experiences.filter((exp) => exp.type === "work");
export const communityExperiences = experiences.filter(
  (exp) => exp.type === "community"
);
export const educationExperiences = experiences.filter(
  (exp) => exp.type === "education"
);

export { experiences };
