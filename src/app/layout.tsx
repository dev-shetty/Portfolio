import { Metadata } from "next"
// import NextNProgress from "nextjs-progressbar"
// import { ToastContainer } from "react-toastify"
import "@/styles/globals.css"
import Navbar from "@/components/navbar"

export const metadata: Metadata = {
  title: "Deveesh Shetty",
  description: "Portfolio Site of Deveesh Shetty",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-900">
        {/* <NextNProgress color="var(--clr-primary-100)" /> */}
        <Navbar />
        <div className="container mx-auto lg:px-48 md:px-24 px-8 text-base">
          {children}
        </div>
        {/* <ToastContainer /> */}
      </body>
    </html>
  )
}
