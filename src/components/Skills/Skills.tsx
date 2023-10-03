import Link from "next/link"
import styles from "./Skills.module.css"
import {
  FaAngleRight,
  FaCss3Alt,
  FaGit,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaLinux,
  FaPython,
  FaReact,
} from "react-icons/fa"
import {
  TbBrandFigma,
  TbBrandMongodb,
  TbBrandNextjs,
  TbBrandNodejs,
  TbBrandTailwind,
  TbBrandTypescript,
  TbBrandVercel,
  TbBrandVite,
  TbBrandVscode,
} from "react-icons/tb"
import { SiExpress } from "react-icons/si"
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
            <FaJsSquare />
            <p>
              <a
                href="https://www.javascript.com/"
                target="_blank"
              >{`console.log("JavaScript")`}</a>
            </p>
          </div>
          <div>
            <TbBrandTypescript />
            <p>
              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
              >{`console.log("TypeScript")`}</a>
            </p>
          </div>
          <div>
            <FaHtml5 />
            <p>
              <a
                href="https://www.w3schools.com/html/"
                target="_blank"
              >{`<h1>HTML</h1>`}</a>
            </p>
          </div>
          <div>
            <FaCss3Alt />
            <p>
              <a
                href="https://www.w3schools.com/css/"
                target="_blank"
              >{`content: "CSS"`}</a>
            </p>
          </div>
          <div>
            <span>C</span>
            <p>
              <a
                href="https://www.learn-c.org/"
                target="_blank"
              >{`printf("C");`}</a>
            </p>
          </div>
          <div>
            <FaPython />
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
            <FaLinux />
            <p>
              <a href="https://www.linux.org/" target="_blank">
                Linux
              </a>
            </p>
          </div>
          <div>
            <FaGit />
            <p>
              <a href="https://git-scm.com/" target="_blank">
                Git
              </a>
            </p>
          </div>
          <div>
            <FaGithub />
            <p>
              <a href="https://github.com/" target="_blank">
                Github
              </a>
            </p>
          </div>
          <div>
            <TbBrandMongodb />
            <p>
              <a href="https://www.mongodb.com/" target="_blank">
                MongoDB
              </a>
            </p>
          </div>
        </div>
        <div className={styles.misc}>
          <div>
            <TbBrandVscode />
            <p>
              <a href="https://code.visualstudio.com/" target="_blank">
                Visual Studio Code
              </a>
            </p>
          </div>
          <div>
            <TbBrandVercel />
            <p>
              <a href="https://vercel.com/" target="_blank">
                Vercel
              </a>
            </p>
          </div>
          <div>
            <TbBrandFigma />
            <p>
              <a href="https://www.figma.com/" target="_blank">
                Figma
              </a>
            </p>
          </div>
        </div>
        <div className={styles.libraries}>
          <div>
            <FaReact />
            <p>
              <a href="https://reactjs.org/" target="_blank">
                ReactJS
              </a>
            </p>
          </div>
          <div>
            <TbBrandNextjs />
            <p>
              <a href="https://nextjs.org/" target="_blank">
                NextJS
              </a>
            </p>
          </div>
          <div>
            <TbBrandVite />
            <p>
              <a href="https://vitejs.dev/" target="_blank">
                ViteJS
              </a>
            </p>
          </div>
          <div>
            <TbBrandTailwind />
            <p>
              <a href="https://tailwindcss.com/" target="_blank">
                TailwindCSS
              </a>
            </p>
          </div>
          <div>
            <TbBrandNodejs />
            <p>
              <a href="https://nodejs.org/en/" target="_blank">
                NodeJS
              </a>
            </p>
          </div>
          <div>
            <SiExpress />
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
            <FaAngleRight />
          </div>
        </Link>
      </div>
    </section>
  )
}

export default Skills
