import Link from "next/link"
import { FaEnvelope, FaPalette } from "react-icons/fa"

function Navbar() {
  return (
    <nav className="fixed backdrop-blur-md z-50 flex w-full items-center py-4 px-8 border-b border-b-slate-800">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <Link href="/" className="text-xl hover:text-slate-200">
            DevShetty
          </Link>
        </div>
        <ul className="flex items-center gap-2 justify-end text-sm">
          <Link
            href="/art-gallery"
            className="px-4 py-1 bg-slate-800 rounded-md w-12 md:w-32 text-center hover:bg-slate-700 transition-colors"
          >
            <FaPalette className="md:hidden" />
            <span className="hidden md:block">Art Gallery</span>
          </Link>
          <Link
            href="/contact"
            className="px-4 py-1 bg-slate-800 rounded-md w-12 md:w-32 text-center hover:bg-slate-700 transition-colors"
          >
            <FaEnvelope className="md:hidden" />
            <span className="hidden md:block">Get in touch</span>
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
