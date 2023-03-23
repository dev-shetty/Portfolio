import axios from "axios"
import { FormEvent, useState, ChangeEvent } from "react"
import styles from "./ContactForm.module.css"

function ContactForm() {
  const [details, setDetails] = useState({
    email: "",
    name: "",
    desc: "",
  })

  async function handleFormSubmit(e: FormEvent) {
    e.preventDefault()
    if (!details.email || !details.name) return
    const response = await axios.post("/api/mail", details)
    console.table(details)

    if (response.status === 200) {
      console.log(response.data)
      setDetails({
        email: "",
        name: "",
        desc: "",
      })
    } else console.log("There was an error sending the mail")
  }

  function onChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    // const detailsCopy = details
    setDetails({ ...details, [e.target.name]: e.target.value })
  }

  return (
    <div className={styles.container}>
      <h2>Contact Me</h2>
      <form className={styles.form} method="post" onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={onChange}
            placeholder="developer@developer.com"
            value={details.email}
            required
          />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={onChange}
            placeholder="Developer X"
            value={details.name}
            required
          />
        </div>
        <div>
          <label htmlFor="desc">Description</label>
          <textarea
            name="desc"
            id="desc"
            onChange={onChange}
            placeholder="Your opinion on the website"
            value={details.desc}
            rows={6}
          ></textarea>
        </div>
        <div>
          <button type="submit">
            <p>Submit</p>
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
