import { Metadata } from "next"
import "@/app/globals.css"
import Navbar from "@/components/navbar"
import { Toaster } from "@/components/ui/toaster"

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
        <div className="py-24 text-base">{children}</div>
        <Toaster />
      </body>
    </html>
  )
}
