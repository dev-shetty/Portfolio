import type { AppProps } from "next/app"
import { useEffect } from "react"
import { colors } from "@/lib/colors"
import "react-toastify/dist/ReactToastify.css"
import "@/styles/globals.css"
import { generateRandomNumber } from "@/lib/helpers"

export default function App({ Component, pageProps }: AppProps) {
  function generateBlobColors() {
    const index = generateRandomNumber(colors.length)
    document.documentElement.style.setProperty(
      "--blob-clr-1",
      colors[index].clr1
    )
    document.documentElement.style.setProperty(
      "--blob-clr-2",
      colors[index].clr2
    )
  }
  useEffect(() => {
    document.addEventListener("dblclick", generateBlobColors)
    generateBlobColors()

    return () => {
      document.removeEventListener("dblclick", generateBlobColors)
    }
  }, [])
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
