import { useEffect, useRef, useState } from "react"
import styles from "./Blob.module.css"

function Blob() {
  const blobRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({
    clientX: 0,
    clientY: 0,
  })

  useEffect(() => {
    document.body.onpointermove = (event) => {
      const { clientX, clientY } = event
      setPosition({ clientX, clientY })
      blobRef.current!.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 3000, fill: "forwards" }
      )
    }
  }, [position])

  return (
    <>
      <div className={styles.blur}></div>
      <div className={styles.blob} ref={blobRef}></div>
    </>
  )
}

export default Blob
