import { Metadata } from "next"
import "@/app/globals.css"
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
      <body className="bg-slate-900 text-slate-50">
        <Navbar />
        <div className="container mx-auto lg:px-48 md:px-24 px-8 text-base">
          {children}
        </div>
      </body>
    </html>
  )
}
