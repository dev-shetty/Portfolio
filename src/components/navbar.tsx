import Link from "next/link"
import { icons as Icon } from "@/lib/icons"
import Button from "@/components/ui/button"

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
          <Button asChild>
            <Link href="/art-gallery">
              <Icon.Palette className="md:hidden" />
              <span className="hidden md:block">Art Gallery</span>
            </Link>
          </Button>
          <Button asChild>
            <Link
              href="/contact"
              className="px-4 py-1 bg-slate-800 rounded-md w-12 md:w-32 text-center hover:bg-slate-700 transition-colors"
            >
              <Icon.Envelope className="md:hidden" />
              <span className="hidden md:block">Get in touch</span>
            </Link>
          </Button>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
