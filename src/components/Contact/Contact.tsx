import { Icon } from "@iconify/react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import Profile from "../../assets/images/Deveesh.jpg"
import styles from "./Contact.module.css"

type EventOffset = {
  offsetX: number
  offsetY: number
}

function Contact() {
  const cardRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState({ height: 0, width: 0 })

  useEffect(() => {
    const cardNode = cardRef.current
    const { clientHeight, clientWidth } = cardNode!
    setSize({
      height: clientHeight,
      width: clientWidth,
    })

    function tiltCard(e: EventOffset) {
      const { offsetX, offsetY } = e
      const X = (offsetX - size.width / 2) / 3 / 3
      const Y = -(offsetY - size.height / 2) / 3 / 3
      cardNode?.style.setProperty("--ry", X.toFixed(2))
      cardNode?.style.setProperty("--rx", Y.toFixed(2))

      cardNode?.style.setProperty("--by", (80 - X / 4).toFixed(2) + "%")
      cardNode?.style.setProperty("--bx", (50 - Y / 4).toFixed(2) + "%")
    }

    function resetCard() {
      cardNode?.style.setProperty("--ry", "0")
      cardNode?.style.setProperty("--rx", "0")

      cardNode?.style.setProperty("--by", "80%")
      cardNode?.style.setProperty("--bx", "50%")
    }

    cardNode?.addEventListener("mousemove", tiltCard)
    cardNode?.addEventListener("mouseleave", resetCard)
    return () => {
      cardNode?.removeEventListener("mousemove", tiltCard)
      cardNode?.removeEventListener("mouseleave", resetCard)
    }
  }, [])

  return (
    <div className={styles.card_container}>
      <div className={styles.card} ref={cardRef}>
        <div className={styles.card_image}>
          <Image src={Profile} alt="Deveesh Profile" />
        </div>
        <div className={styles.card_content}>
          <div>
            <h2>Deveesh Shetty</h2>
            <h3>deveeshshetty@gmail.com</h3>
          </div>
          <div className={styles.socials}>
            <div>
              <a href="https://github.com/Deveesh-Shetty" target="_blank">
                <Icon icon="carbon:logo-github" />
                <p>Deveesh-Shetty</p>
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/deveesh-shetty-908539214"
                target="_blank"
              >
                <Icon icon="carbon:logo-linkedin" />
                <p>Deveesh Shetty</p>
              </a>
            </div>
            <div>
              <a href="https://twitter.com/shettydeveesh" target="_blank">
                <Icon icon="carbon:logo-twitter" />
                <p>@ShettyDeveesh</p>
              </a>
            </div>
            <div>
              <a href="https://dev.to/deveeshshetty1209" target="_blank">
                <Icon icon="skill-icons:devto-light" />
                <p>@deveeshshetty1209</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
