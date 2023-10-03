import { Metadata } from "next"
import NextNProgress from "nextjs-progressbar"
import { ToastContainer } from "react-toastify"
import "@/styles/globals.css"

export const metadata: Metadata = {
  title: "Deveesh Shetty",
  description: "Portfolio Site of Deveesh Shetty",
}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NextNProgress color="var(--clr-primary-100)" />
        {children}
        <ToastContainer />
      </body>
    </html>
  )
}
