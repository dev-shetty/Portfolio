import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from "react"
import styles from "./ContactForm.module.css"

type FormValues = {
  email: string
  name: string
  desc: string
}

interface Props {
  onSubmit: (e: FormEvent) => void
  details: FormValues
  setDetails: Dispatch<SetStateAction<FormValues>>
}

function ContactForm({ onSubmit, details, setDetails }: Props) {
  const { email, name, desc } = details

  function onChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const detailsCopy = details
    setDetails({ ...detailsCopy, [e.target.name]: e.target.value })
  }

  return (
    <div className={styles.container}>
      <h2>Contact Me</h2>
      <form className={styles.form} onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={onChange}
            placeholder="developer@developer.com"
            defaultValue={email}
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
            defaultValue={name}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Description</label>
          <textarea
            name="content"
            id="content"
            onChange={onChange}
            placeholder="Your opinion on the website"
            defaultValue={desc}
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
