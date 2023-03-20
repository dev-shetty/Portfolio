import { Icon } from "@iconify/react"
import Tilt from "react-parallax-tilt"
import Image from "next/image"
import Profile from "../../assets/images/Deveesh.jpg"
import styles from "./Contact.module.css"

function Contact() {
  return (
    <div className={styles.card_container}>
      <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} gyroscope={true}>
        <div className={styles.card}>
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
      </Tilt>
    </div>
  )
}

export default Contact
