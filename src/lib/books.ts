export interface Book {
  name: string;
  author: string;
  thoughts?: string;
  isRecommended?: boolean;
  isRecommendedComments?: string;
  willReRead?: boolean;
  willReReadComments?: string;
  status: "reading" | "completed";
  completedYear?: number;
  notionLink?: string;
}

export const books: Book[] = [
  // Currently Reading
  {
    name: "Never Split the Difference",
    author: "Chris Voss",
    status: "reading",
  },
  {
    name: "Why Bharat Matters",
    author: "S Jaishankar",
    status: "reading",
  },

  // Completed Books
  {
    name: "The Art of Thinking Clearly",
    author: "Rolf Dobelli",
    status: "completed",
    isRecommended: true,
    willReRead: true,
    completedYear: 2025,
  },
  {
    name: "Proof: The uncertain science of certainity",
    status: "completed",
    author: "Adam Kucharski",
    isRecommended: false,
    isRecommendedComments:
      "Skim read the last few chapters, worth if you're curious about maths origins, and probability.",
    willReRead: false,
    completedYear: 2025,
  },
  {
    name: "Don't believe everything you think",
    author: "Joseph Nguyen",
    status: "completed",
    isRecommended: true,
    willReRead: true,
    completedYear: 2025,
    thoughts: "Available on Notion",
    notionLink:
      "https://www.notion.so/Don-t-believe-everything-you-think-1a35e52c1e1980678745d20f7dfbe991",
  },
  {
    name: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    status: "completed",
    isRecommended: false,
    willReRead: false,
    completedYear: 2023,
    thoughts: "Available on Notion",
    notionLink:
      "https://www.notion.so/Rich-Dad-Poor-Dad-21a5e52c1e1980a889e8e77c8e246fb8",
  },
  {
    name: "Attitude is Everything",
    author: "Jeff Keller",
    status: "completed",
    isRecommended: true,
    willReRead: false,
    completedYear: 2025,
    thoughts: "Available on Notion",
    notionLink:
      "https://www.notion.so/Attitude-is-Everything-21a5e52c1e1980eea754cdd32f05cba4",
  },
  {
    name: "Drive",
    author: "Daniel H. Pink",
    status: "completed",
    isRecommended: false,
    willReRead: false,
    completedYear: 2024,
    thoughts: "Available on Notion",
    notionLink: "https://www.notion.so/Drive-21a5e52c1e1980418328df1a89134d1a",
  },
  {
    name: "Transform your Self Talk",
    author: "Nikk Trenton",
    status: "completed",
    isRecommended: false,
    willReRead: false,
    completedYear: 2025,
    thoughts: "Available on Notion",
    notionLink:
      "https://www.notion.so/Transform-your-Self-Talk-21a5e52c1e198012b09bf9a77f3aa614",
  },
  {
    name: "Rework",
    author: "Jason Fried, David Heinemeier Hansson",
    status: "completed",
    isRecommended: true,
    willReRead: true,
    completedYear: 2025,
    thoughts: "Available on Notion",
    notionLink: "https://www.notion.so/Rework-21a5e52c1e1980bb92a2e2c89ce4028a",
  },
  {
    name: "The Art of Laziness",
    author: "Library Mindset",
    status: "completed",
    isRecommended: false,
    willReRead: false,
    completedYear: 2025,
  },
  {
    name: "Eat that Frog",
    author: "Brian Tracy",
    status: "completed",
    isRecommended: true,
    willReRead: true,
    completedYear: 2024,
    thoughts: "Available on Notion",
    notionLink:
      "https://www.notion.so/Eat-that-Frog-21a5e52c1e198080a866da32fe7305ed",
  },
  {
    name: "Daiva",
    author: "K. Hari Kumar",
    status: "completed",
    isRecommended: true,
    willReRead: false,
    completedYear: 2025,
  },
  {
    name: "The Almanack of Naval Ravikant",
    author: "Eric Jorgenson",
    status: "completed",
    isRecommended: true,
    willReRead: true,
    completedYear: 2024,
  },
  {
    name: "Flirting with Stocks",
    author: "Anil Lamba",
    status: "completed",
    isRecommended: true,
    willReRead: false,
    completedYear: 2025,
  },
  {
    name: "Focus on What Matters",
    author: "Darius Foroux",
    status: "completed",
    isRecommended: false,
    willReRead: false,
    completedYear: 2024,
  },
  {
    name: "Do Epic Shit",
    author: "Ankur Warikoo",
    status: "completed",
    isRecommended: false,
    willReRead: false,
    completedYear: 2023,
    thoughts: "Available on Notion",
    notionLink:
      "https://www.notion.so/Do-Epic-Shit-21a5e52c1e198088885dcdcb1086f802",
  },
  {
    name: "Ikigai",
    author: "Francesc Miralles and Hector Garcia",
    status: "completed",
    isRecommended: true,
    willReRead: false,
    completedYear: 2024,
    thoughts: "Available on Notion",
    notionLink: "https://www.notion.so/Ikigai-21a5e52c1e19807791c9cdf3d04978c4",
  },
  {
    name: "Mahagatha",
    author: "Satyarth Nayak",
    status: "completed",
    isRecommended: true,
    willReRead: false,
    completedYear: 2025,
  },
  {
    name: "The Power of Your Subconscious Mind",
    author: "Joseph Murphy",
    status: "completed",
    isRecommended: true,
    willReRead: true,
    completedYear: 2025,
    thoughts: "Available on Notion",
    notionLink:
      "https://www.notion.so/The-Power-of-Your-Subconscious-Mind-21a5e52c1e198014b887ea60a667b15f",
  },
  {
    name: "The Psychology of Money",
    author: "Morgan Housel",
    status: "completed",
    isRecommended: true,
    willReRead: true,
    completedYear: 2024,
  },
  {
    name: "Steve Jobs",
    author: "Walter Isaacson",
    status: "completed",
    isRecommended: false,
    willReRead: false,
    completedYear: 2024,
  },
  {
    name: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    status: "completed",
    isRecommended: true,
    willReRead: true,
    completedYear: 2025,
  },
  {
    name: "Atomic Habits",
    author: "James Clear",
    status: "completed",
    isRecommended: true,
    willReRead: true,
    completedYear: 2023,
  },
  {
    name: "Deep Work",
    author: "Cal Newport",
    status: "completed",
    isRecommended: true,
    willReRead: false,
    completedYear: 2025,
  },
  {
    name: "Who Moved My Cheese",
    author: "Spencer Johnson",
    status: "completed",
    isRecommended: true,
    willReRead: false,
    completedYear: 2025,
    thoughts: "Available on Notion",
    notionLink:
      "https://www.notion.so/Who-Moved-My-Cheese-21a5e52c1e1980c59de9f115f31f0f18",
  },
  {
    name: "Start with Why",
    author: "Simon Sinek",
    status: "completed",
    isRecommended: true,
    willReRead: true,
    completedYear: 2025,
    thoughts: "Available on Notion",
    notionLink:
      "https://www.notion.so/Start-with-Why-21a5e52c1e1980c9a1c1e0f5469e1f3c",
  },
  {
    name: "Zero to One",
    author: "Peter Thiel",
    status: "completed",
    isRecommended: true,
    willReRead: true,
    completedYear: 2025,
  },
  {
    name: "Remote",
    author: "Jason Fried, David Heinemeier Hansson",
    status: "completed",
    isRecommended: false,
    willReRead: false,
    completedYear: 2025,
  },
  {
    name: "Principles",
    author: "Ray Dalio",
    status: "completed",
    isRecommended: true,
    willReRead: false,
    completedYear: 2025,
  },
];
