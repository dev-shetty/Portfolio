import type { AppProps } from "next/app"
import NextNProgress from "nextjs-progressbar"
import "@/styles/globals.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color="#40e0d0" />
      <Component {...pageProps} />
    </>
  )
}
