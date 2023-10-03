// import { Icon } from "@iconify/react"
import Link from "next/link"
import styles from "./Skills.module.css"
function Skills() {
  return (
    <section className={styles.container}>
      <div className={styles.heading}>
        <h2>Skills</h2>
        <h3>
          Languages, Frameworks and Tools that I use daily to learn and work
        </h3>
      </div>
      <div className={styles.skill_grid}>
        <div className={styles.languages}>
          <div>
            {/* <Icon icon="simple-icons:javascript"></Icon> */}
            <p>
              <a
                href="https://www.javascript.com/"
                target="_blank"
              >{`console.log("JavaScript")`}</a>
            </p>
          </div>
          <div>
            {/* <Icon icon="akar-icons:typescript-fill"></Icon> */}
            <p>
              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
              >{`console.log("TypeScript")`}</a>
            </p>
          </div>
          <div>
            {/* <Icon icon="simple-icons:html5"></Icon> */}
            <p>
              <a
                href="https://www.w3schools.com/html/"
                target="_blank"
              >{`<h1>HTML</h1>`}</a>
            </p>
          </div>
          <div>
            {/* <Icon icon="simple-icons:css3"></Icon> */}
            <p>
              <a
                href="https://www.w3schools.com/css/"
                target="_blank"
              >{`content: "CSS"`}</a>
            </p>
          </div>
          <div>
            {/* <Icon icon="simple-icons:c"></Icon> */}
            <p>
              <a
                href="https://www.learn-c.org/"
                target="_blank"
              >{`printf("C");`}</a>
            </p>
          </div>
          <div>
            {/* <Icon icon="simple-icons:python"></Icon> */}
            <p>
              <a
                href="https://www.python.org/"
                target="_blank"
              >{`print("Python")`}</a>
            </p>
          </div>
        </div>
        <div className={styles.tools}>
          <div>
            {/* <Icon icon="codicon:terminal-linux"></Icon> */}
            <p>
              <a href="https://www.linux.org/" target="_blank">
                Linux
              </a>
            </p>
          </div>
          <div>
            {/* <Icon icon="mdi:git"></Icon> */}
            <p>
              <a href="https://git-scm.com/" target="_blank">
                Git
              </a>
            </p>
          </div>
          <div>
            {/* <Icon icon="octicon:mark-github-16"></Icon> */}
            <p>
              <a href="https://github.com/" target="_blank">
                Github
              </a>
            </p>
          </div>
          <div>
            {/* <Icon icon="bxl:mongodb"></Icon> */}
            <p>
              <a href="https://www.mongodb.com/" target="_blank">
                MongoDB
              </a>
            </p>
          </div>
        </div>
        <div className={styles.misc}>
          <div>
            {/* <Icon icon="akar-icons:vscode-fill"></Icon> */}
            <p>
              <a href="https://code.visualstudio.com/" target="_blank">
                Visual Studio Code
              </a>
            </p>
          </div>
          <div>
            {/* <Icon icon="simple-icons:netlify"></Icon> */}
            <p>
              <a href="https://www.netlify.com/" target="_blank">
                Netlify
              </a>
            </p>
          </div>
          <div>
            {/* <Icon icon="simple-icons:vercel"></Icon> */}
            <p>
              <a href="https://vercel.com/" target="_blank">
                Vercel
              </a>
            </p>
          </div>
          <div>
            {/* <Icon icon="akar-icons:figma-fill"></Icon> */}
            <p>
              <a href="https://www.figma.com/" target="_blank">
                Figma
              </a>
            </p>
          </div>
        </div>
        <div className={styles.libraries}>
          <div>
            {/* <Icon icon="carbon:logo-react"></Icon> */}
            <p>
              <a href="https://reactjs.org/" target="_blank">
                ReactJS
              </a>
            </p>
          </div>
          <div>
            {/* <Icon icon="teenyicons:nextjs-solid"></Icon> */}
            <p>
              <a href="https://nextjs.org/" target="_blank">
                NextJS
              </a>
            </p>
          </div>
          <div>
            {/* <Icon icon="simple-icons:vite"></Icon> */}
            <p>
              <a href="https://vitejs.dev/" target="_blank">
                ViteJS
              </a>
            </p>
          </div>
          <div>
            {/* <Icon icon="mdi:tailwind"></Icon> */}
            <p>
              <a href="https://tailwindcss.com/" target="_blank">
                TailwindCSS
              </a>
            </p>
          </div>
          <div>
            {/* <Icon icon="akar-icons:node-fill"></Icon> */}
            <p>
              <a href="https://nodejs.org/en/" target="_blank">
                NodeJS
              </a>
            </p>
          </div>
          <div>
            {/* <Icon icon="skill-icons:expressjs-light"></Icon> */}
            <p>
              <a href="https://expressjs.com/" target="_blank">
                ExpressJS
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.navigation}>
        <Link href="/projects">
          <div className={styles.navigation_link}>
            <p>Projects</p>
            {/* <Icon icon="ic:baseline-arrow-right"></Icon> */}
          </div>
        </Link>
      </div>
    </section>
  )
}

export default Skills
