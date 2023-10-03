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
        <ul className="flex items-center gap-2 justify-end">
          {/* Desktop and Tablet View */}
          <Link
            href="/art-gallery"
            className="hidden md:block px-4 py-1 bg-slate-800 rounded-md w-30 text-center hover:bg-slate-700 transition-colors"
          >
            Art Gallery
          </Link>
          <Link
            href="/contact"
            className="hidden md:block px-4 py-1 bg-slate-800 rounded-md w-30 text-center hover:bg-slate-700 transition-colors"
          >
            Get in touch
          </Link>

          {/* Mobile View */}
          <Link
            href="/art-gallery"
            className="md:hidden px-4 py-2 bg-slate-800 rounded-md w-12 text-center hover:bg-slate-700 transition-colors"
          >
            <FaPalette />
          </Link>
          <Link
            href="/contact"
            className="md:hidden px-4 py-2 bg-slate-800 rounded-md w-12 text-center hover:bg-slate-700 transition-colors"
          >
            <FaEnvelope />
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
