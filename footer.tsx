import Link from "next/link"
import Image from "next/image"
import { Instagram, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Logo and Description */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <Image src="/logo.png" alt="GDG REC Logo" width={64} height={64} className="rounded-2xl shadow-lg" />
          <h3 className="text-2xl font-bold text-white">GDG REC</h3>
          <p className="text-sm text-gray-400 max-w-xs">
            Fostering innovation, collaboration, and learning in technology at Rajalakshmi Engineering College.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#about" className="hover:text-blue-400 transition-colors duration-200">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#events" className="hover:text-blue-400 transition-colors duration-200">
                Events
              </Link>
            </li>
            <li>
              <Link href="#team" className="hover:text-blue-400 transition-colors duration-200">
                Meet the Team
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-blue-400 transition-colors duration-200">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact & Socials */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold text-white mb-4">Connect With Us</h4>
          <ul className="space-y-2">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Mail className="w-5 h-5 text-gray-400" />
              <Link href="mailto:gdg@rajalakshmi.edu.in" className="hover:text-blue-400 transition-colors duration-200">
                gdg@rajalakshmi.edu.in
              </Link>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Phone className="w-5 h-5 text-gray-400" />
              <Link
                href="https://wa.me/919360386204"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                +91 9360386204
              </Link>
            </li>
          </ul>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <Link
              href="https://www.instagram.com/gdgrec/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 text-gray-400 hover:text-pink-500 transition-colors duration-200" />
            </Link>
            <Link href="mailto:gdg@rajalakshmi.edu.in" target="_blank" rel="noopener noreferrer" aria-label="Email">
              <Mail className="w-6 h-6 text-gray-400 hover:text-blue-600 transition-colors duration-200" />
            </Link>
            <Link href="https://wa.me/919360386204" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <Phone className="w-6 h-6 text-gray-400 hover:text-green-500 transition-colors duration-200" />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} GDG Rajalakshmi Engineering College. All rights reserved.
      </div>
    </footer>
  )
}
