// components/Footer.jsx
import { Phone, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t-4 border-purple-400 text-zinc-400 py-6">
      <div className="container mx-auto px-4 text-center space-y-4">
        <p className="text-sm">
          Designed & developed by Armin Gholipour
        </p>

        <div className="flex justify-center gap-6 items-center text-sm text-zinc-300">
          <a href="tel:09129370681" className="flex items-center gap-2 hover:text-purple-400 transition">
            <Phone size={16} />
            09129370681
          </a>
          <Link
            href="https://www.linkedin.com/in/armin-gholipour-92231623b"
            target="_blank"
            className="flex items-center gap-2 hover:text-purple-400 transition"
          >
            <Linkedin size={16} />
            LinkedIn
          </Link>
        </div>

        <p className="text-xs">
          © {new Date().getFullYear()} همه حقوق محفوظ است.
        </p>
      </div>
    </footer>
  )
}
