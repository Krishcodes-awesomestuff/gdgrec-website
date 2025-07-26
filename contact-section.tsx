"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Instagram, Mail, Phone } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-blue-50 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 leading-tight text-center mb-12">Contact Us</h2>
        <p className="text-xl text-gray-700 leading-relaxed text-center mb-16 max-w-3xl mx-auto">
          Have questions or want to collaborate? Reach out to us!
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image Column */}
          <div className="relative w-full aspect-[7/8] rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
            <Image
              src="/placeholder.svg?height=450&width=800&text=Contact+Us+Illustration"
              alt="Contact Us Illustration"
              layout="fill"
              objectFit="cover"
              className="rounded-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          </div>

          {/* Right Contact Form and Socials */}
          <div className="space-y-8">
            <form className="space-y-6 bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <Input id="fullName" placeholder="John Doe" className="w-full" />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <Input id="phoneNumber" placeholder="+91" className="w-full" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input id="email" type="email" placeholder="johndoe@gmail.com" className="w-full" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message goes here" className="w-full min-h-[120px]" />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
              >
                Submit
              </Button>
            </form>

            <div className="text-center lg:text-left space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Follow us on:</h3>
              <div className="flex justify-center lg:justify-start gap-6">
                <Link
                  href="https://www.instagram.com/gdgrec/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-8 h-8 text-gray-700 hover:text-pink-500 transition-colors duration-200" />
                </Link>
                <Link
                  href="mailto:gdg@rajalakshmi.edu.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Email us"
                >
                  <Mail className="w-8 h-8 text-gray-700 hover:text-blue-600 transition-colors duration-200" />
                </Link>
                <Link
                  href="https://wa.me/919360386204"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with us on WhatsApp"
                >
                  <Phone className="w-8 h-8 text-gray-700 hover:text-green-500 transition-colors duration-200" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
