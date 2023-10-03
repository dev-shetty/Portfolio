// import Tilt from "react-parallax-tilt"
import Image from "next/image"
import Profile from "../../assets/images/Deveesh.jpg"
import styles from "./Contact.module.css"
import { FaGithub, FaLinkedin, FaTwitter, FaDev } from "react-icons/fa"

function Contact() {
  return (
    <div className={styles.card_container}>
      {/* <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15}> */}
      <div className={styles.card}>
        <div className={styles.card_image}>
          <Image src={Profile} alt="Deveesh Profile" priority />
        </div>
        <div className={styles.card_content}>
          <div>
            <h2>Deveesh Shetty</h2>
            <h3>deveeshshetty@gmail.com</h3>
          </div>
          <div className={styles.socials}>
            <div>
              <a href="https://github.com/Deveesh-Shetty" target="_blank">
                <FaGithub />
                <p>Deveesh-Shetty</p>
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/deveesh-shetty-908539214"
                target="_blank"
              >
                <FaLinkedin />
                <p>Deveesh Shetty</p>
              </a>
            </div>
            <div>
              <a href="https://twitter.com/shettydeveesh" target="_blank">
                <FaTwitter />
                <p>@ShettyDeveesh</p>
              </a>
            </div>
            <div>
              <a href="https://dev.to/deveeshshetty1209" target="_blank">
                <FaDev />
                <p>@devshetty</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* </Tilt> */}
    </div>
  )
}

export default Contact
