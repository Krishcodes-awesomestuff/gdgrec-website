"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Instagram, Mail, Phone } from "lucide-react"

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const formData = new FormData(event.currentTarget)
    
    // Add Web3Forms access key from environment variables
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "")

    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      })
      
      const result = await response.json()
      
      if (result.success) {
        setSubmitStatus('success')
        // Reset form
        const form = event.currentTarget
        if (form) {
          form.reset()
        }
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <section id="contact" className="py-16 md:py-24 bg-blue-50 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 leading-tight text-center mb-12">Contact Us</h2>
        <p className="text-xl text-gray-700 leading-relaxed text-center mb-16 max-w-3xl mx-auto">
          Have questions or want to collaborate? Reach out to us!
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image Column - Hidden on mobile */}
          <div className="hidden lg:block relative w-full aspect-[7/8] rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
            <Image
              src="/contact.png"
              alt="Contact Us Illustration"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
              className="rounded-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          </div>

          {/* Right Contact Form and Socials */}
          <div className="space-y-8">
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  ✅ Message sent successfully! We'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  ❌ Failed to send message. Please try again.
                </div>
              )}
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <Input 
                  id="name"
                  name="name"
                  placeholder="John Doe" 
                  className="w-full" 
                  required
                  suppressHydrationWarning={true} 
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <Input 
                  id="phone"
                  name="phone"
                  placeholder="+91" 
                  className="w-full" 
                  suppressHydrationWarning={true} 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input 
                  id="email"
                  name="email"
                  type="email" 
                  placeholder="johndoe@gmail.com" 
                  className="w-full" 
                  required
                  suppressHydrationWarning={true} 
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea 
                  id="message"
                  name="message"
                  placeholder="Your message goes here" 
                  className="w-full min-h-[120px]" 
                  required
                  suppressHydrationWarning={true} 
                />
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                suppressHydrationWarning={true}
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
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
