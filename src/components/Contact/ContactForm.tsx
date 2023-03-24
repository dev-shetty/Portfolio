import { FormEvent, useState, ChangeEvent } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import Loading from "@/components/UIComponents/Loading/Loading"
import styles from "./ContactForm.module.css"

function ContactForm() {
  const [details, setDetails] = useState({
    email: "",
    name: "",
    desc: "",
  })

  const [loading, setLoading] = useState(false)

  async function handleFormSubmit(e: FormEvent) {
    e.preventDefault()
    if (!details.email || !details.name) {
      toast.error("Fill the email and name fields", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
      return
    }

    try {
      setLoading(true)
      const response = await axios("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: details,
      })

      if (response.status === 200) {
        console.log(response.data)
        setDetails({
          email: "",
          name: "",
          desc: "",
        })
        toast(response.data.message, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      } else {
        console.log("There was an error sending the mail")
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  function onChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const detailsCopy = details
    setDetails({ ...detailsCopy, [e.target.name]: e.target.value })
  }

  return (
    <>
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
            />
          </div>
          <div>
            <label htmlFor="desc">Description</label>
            <textarea
              name="desc"
              id="desc"
              onChange={onChange}
              placeholder="Your thoughts"
              value={details.desc}
              rows={6}
            ></textarea>
          </div>
          <div>
            <button type="submit" disabled={loading}>
              <div>{loading ? <Loading /> : "Send"}</div>
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ContactForm
