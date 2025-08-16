export const CATEGORIES = [
  "Desk",
  "Development",
  "Software",
  "Productivity",
  "Hacks",
  "Notable Mentions",
] as const;

export type Category = (typeof CATEGORIES)[number];

export interface Tool {
  name: string;
  description: string;
  category: Category;
  cost?: string;
  comments?: string;
  link?: string;
}

export const tools: Tool[] = [
  {
    name: "MacBook M4 Pro",
    description: "My primary development machine for work.",
    category: "Desk",
    link: "https://www.apple.com/us-edu/shop/buy-mac/macbook-pro/14-inch-m4-pro",
  },
  {
    name: "Acer ED270U S3",
    description: '27" Curved External Monitor.',
    category: "Desk",
    link: "https://amzn.in/d/dmDlmaS",
  },
  {
    name: "iPad Air M3 + Apple Pencil Pro",
    description:
      "Love this for reading, jotting down notes, and for watching videos.",
    category: "Desk",
    link: "https://www.apple.com/ipad-air/",
  },
  {
    name: "Raspberry Pi 3 B",
    description: "Experimenting with it. Currently using it as NAS",
    category: "Desk",
    link: "https://www.raspberrypi.com/products/",
  },
  {
    name: "Redmi Note 9",
    description: "My daily driver phone, been 6 years, going strong.",
    category: "Desk",
  },
  {
    name: "Realme Buds Air 6 Pro",
    description: "Daily on the go TWS, like the reflective surface.",
    category: "Desk",
    link: "http://dl.flipkart.com/dl/realme-buds-air-6-pro-50db-anc-360-spatial-audio-upto-40-hours-playback-bluetooth/p/itm94db9ce66b9bf",
  },
  {
    name: "Jabra Evolve2 30",
    description: "Wired, and literally cancels all background noise on call.",
    category: "Desk",
    link: "https://amzn.in/d/7wdKpGS",
  },
  {
    name: "Portonics Extension Board",
    description: "Hides the mess of cables, under my table.",
    category: "Desk",
    link: "https://amzn.in/d/3bqnytL",
  },
  {
    name: "Greensoul New York Ergonomic Chair",
    description: "Long sitting hours, and this chair is a lifesaver.",
    category: "Desk",
  },
  {
    name: "Cursor Pro",
    description:
      "Primary code editor with AI capabilities, autocomplete has become part of my life.",
    category: "Development",
    cost: "$20/month",
    link: "https://cursor.sh",
  },
  {
    name: "Ghostty",
    description: "Fast, modern, and minimal terminal emulator.",
    category: "Development",
    link: "https://ghostty.org",
  },
  {
    name: "VPS (IONOS)",
    description:
      "Got it for cheap, use it as reverse proxy to host my personal projects, and self host a few things. Might switch to my Pi in future.",
    category: "Development",
    cost: "$5/month",
    link: "https://www.ionos.com/servers/vps",
  },
  {
    name: "Zen Browser",
    description:
      "My primary browser, love the keybindings, minimal look and so much more real estate, and it's Open Source!",
    category: "Productivity",
    link: "https://zen-browser.app/",
  },
  {
    name: "Google Chrome",
    description: "My goto browser for development, no more explanation needed.",
    category: "Development",
    link: "https://zen-browser.app/",
  },
  {
    name: "Perplexity",
    description: "My goto search engine at this point.",
    category: "Development",
    cost: "$20/month",
    link: "https://www.perplexity.ai",
  },
  {
    name: "Notion",
    description:
      "Use this everyday for personal journaling, habit tracking and professional work.",
    category: "Productivity",
    link: "https://www.notion.so",
  },
  {
    name: "Notion Calendar",
    description:
      "Can't appreciate this enough, use this and then go back to Google Calendar, I dare you.",
    category: "Productivity",
    link: "https://arc.net",
  },
  {
    name: "Raycast",
    description:
      "Well, life made easier, the first thing I will install if i get a new Mac. Builtin clipboard, file search, calculator, focus mode, and so much more.",
    category: "Productivity",
    link: "https://www.raycast.com",
  },
  {
    name: "Apple Books",
    description:
      "Yeah a weird one, but the UX is just beautiful, read so many books on it.",
    category: "Productivity",
  },
  {
    name: "Yabai",
    description:
      "Mac window managament sucks, and this is far far better, and it's Open Source.",
    category: "Productivity",
    link: "https://github.com/koekeishiya/yabai",
  },
  {
    name: "Yazi",
    description:
      "An open source terminal based file manager, and it's just so good to rapidly navigate through files.",
    category: "Productivity",
    link: "https://github.com/sxyazi/yazi",
  },
  {
    name: "Olauncher",
    description:
      "Open source dumb launcher for your phone, using it from past 2 years.",
    category: "Productivity",
    link: "https://github.com/tanujnotes/Olauncher",
  },
  {
    name: "Nebo",
    description: "A great alternative to Freeform, and a lot more flexible.",
    category: "Productivity",
    cost: "₹999 one time",
    link: "https://apps.apple.com/us/app/nebo-note-taking-for-students/id1119601770",
  },
  {
    name: "1Password",
    description: "Makes life easier.",
    category: "Productivity",
    cost: "From my employer",
    link: "https://1password.com",
  },
  {
    name: "Handtool Kit",
    description: "Something which makes me feel more engineer.",
    category: "Notable Mentions",
    link: "https://www.flipkart.com/stanley-sdh600kp-in-diy-13-mm-hammer-drill-machine-power-hand-tool-kit/p/itmc35e3b0cf1fd7",
  },
  {
    name: "Japanese Santoku Knife",
    description:
      "Multi purpose knife, comfortable and sharp, bought from my local Reliance mart, I cut vegetables just to use that knife.",
    category: "Notable Mentions",
  },
  {
    name: "Philips Airfryer NA231",
    description:
      "Swiss Army Knife for my kitchen, works for baking, microwave, deep fry, stir fry, everything.",
    category: "Notable Mentions",
    link: "https://www.flipkart.com/philips-na231-00-touch-panel-cooking-window-uses-up-90-less-fat-1700w-rapid-air-technology-fryer/p/itm219580008b7d6",
  },
];
