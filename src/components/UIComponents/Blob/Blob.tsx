"use client"

import useMouseMove from "@/hooks/useMouseMove"
import { useEffect, useRef } from "react"
import styles from "./Blob.module.css"

function Blob() {
  const blobRef = useRef<HTMLDivElement>(null)
  const { clientX, clientY } = useMouseMove()

  useEffect(() => {
    document.body.onpointermove = () => {
      blobRef.current!.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 3000, fill: "forwards" }
      )
    }
  }, [clientX, clientY])

  return (
    <>
      <div className={styles.blur}></div>
      <div className={styles.blob} ref={blobRef}></div>
    </>
  )
}

export default Blob
