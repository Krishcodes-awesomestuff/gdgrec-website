"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, Code, Lightbulb, Calendar, Users, ImageIcon, Mail, X } from "lucide-react"
import { useState } from "react"

export default function HeroSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigationItems = [
    { href: "#about", label: "About", icon: Users, color: "from-[#4285F4] to-[#4285F4]" },
    { href: "#events", label: "Events", icon: Calendar, color: "from-[#EA4335] to-[#EA4335]" },
    { href: "#team", label: "Team", icon: Users, color: "from-[#FBBC05] to-[#FBBC05]" },
    { href: "#contact", label: "Contact", icon: Mail, color: "from-[#34A853] to-[#34A853]" },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white font-sans relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-green-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-red-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50">
        <div className="absolute inset-0 bg-white/70 backdrop-blur-xl border-b border-gray-200/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <Image src="/logo.png" alt="GDG REC Logo" width={48} height={48} className="rounded-2xl shadow-lg" />
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  GDG
                </h1>
                <p className="text-sm text-gray-600 font-medium">Rajalakshmi Engineering College</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg border border-gray-200/50">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group relative flex items-center px-4 py-2.5 rounded-full text-sm font-medium text-gray-700 hover:text-white transition-all duration-300 overflow-hidden"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-out`}
                    ></div>
                    <item.icon className="relative w-4 h-4 mr-2 transition-colors duration-300" />
                    <span className="relative">{item.label}</span>
                    <div className="absolute inset-0 rounded-full bg-white/20 transform scale-0 group-hover:scale-100 group-hover:animate-ping transition-transform duration-300"></div>
                  </Link>
                ))}
                <Link
                  href="https://gdg.community.dev/gdg-on-campus-rajalakshmi-engineering-college-chennai-india/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Join Now
                  </Button>
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              className="md:hidden relative overflow-hidden group bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
              {isMobileMenuOpen ? (
                <X className="relative w-5 h-5 group-hover:text-white transition-colors duration-300" />
              ) : (
                <Menu className="relative w-5 h-5 group-hover:text-white transition-colors duration-300" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-200/30 shadow-xl">
            <div className="max-w-7xl mx-auto px-4 py-6">
              <div className="space-y-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="group relative flex items-center px-6 py-4 rounded-2xl text-lg font-medium text-gray-700 hover:text-white transition-all duration-300 overflow-hidden bg-white/50 hover:bg-transparent border border-gray-200/50"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-out`}
                    ></div>
                    <item.icon className="relative w-6 h-6 mr-4 transition-colors duration-300" />
                    <span className="relative">{item.label}</span>
                  </Link>
                ))}
                <div className="pt-4 border-t border-gray-200">
                  <Link
                    href="https://gdg.community.dev/gdg-on-campus-rajalakshmi-engineering-college-chennai-india/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMobileMenu}
                  >
                    <Button
                      size="lg"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                    >
                      Join Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <main className="relative z-10">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
          {/* Mobile Layout - Stacked Content */}
          <div className="lg:hidden space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 border border-blue-200 shadow-sm text-blue-800 font-medium">
              <Users className="w-4 h-4 mr-2" />
              Student Community
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                Google Developer Group
                <br />
                <span className="text-blue-600">of Rajalakshmi Engineering</span>
                <br />
                <span className="text-yellow-500">College</span>
              </h1>
            </div>

            {/* Video Container - Between heading and description on mobile */}
            <div className="relative w-full max-w-sm mx-auto sm:max-w-md">
              <div className="relative w-full aspect-video bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/images/hero-video.mp4"
                >
                  <source src="/images/hero-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
              
              {/* Mobile Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-600 rounded-full shadow-lg flex items-center justify-center z-10">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-500 rounded-full shadow-lg flex items-center justify-center z-10">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Description */}
            <p className="text-xl text-gray-700 leading-relaxed">
              Welcome to the Google Developer Groups (GDG) On Campus at Rajalakshmi Engineering College (REC) the
              largest technical club in our college! We are a vibrant community of tech enthusiasts dedicated to
              fostering innovation, collaboration, and learning in the fields of technology and computer science.
            </p>

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-gray-700 text-sm font-medium">
                <Code className="w-4 h-4 mr-2 text-blue-600" />
                Hands-on Workshops
              </div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-gray-700 text-sm font-medium">
                <Lightbulb className="w-4 h-4 mr-2 text-yellow-500" />
                Innovation Projects
              </div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-gray-700 text-sm font-medium">
                <Calendar className="w-4 h-4 mr-2 text-green-500" />
                Regular Events
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="https://gdg.community.dev/gdg-on-campus-rajalakshmi-engineering-college-chennai-india/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                >
                  Join Our Community
                </Button>
              </Link>
              <Link href="#events">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-300 hover:border-gray-400 px-8 py-4 rounded-full hover:bg-gray-50 transition-all duration-300 text-lg bg-transparent"
                >
                  Explore Events
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-gray-900">60+</div>
                <div className="text-sm text-gray-600 font-medium">Active Students</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-gray-900">20+</div>
                <div className="text-sm text-gray-600 font-medium">Events Hosted</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600 font-medium">Vibe</div>
              </div>
            </div>
          </div>

          {/* Desktop Layout - Side by Side */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content Area */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 border border-blue-200 shadow-sm text-blue-800 font-medium">
                <Users className="w-4 h-4 mr-2" />
                Student Community
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                  Google Developer Group
                  <br />
                  <span className="text-blue-600">of Rajalakshmi Engineering</span>
                  <br />
                  <span className="text-yellow-500">College</span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-xl text-gray-700 leading-relaxed max-w-2xl">
                Welcome to the Google Developer Groups (GDG) On Campus at Rajalakshmi Engineering College (REC) the
                largest technical club in our college! We are a vibrant community of tech enthusiasts dedicated to
                fostering innovation, collaboration, and learning in the fields of technology and computer science.
              </p>

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-3">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-gray-700 text-sm font-medium">
                  <Code className="w-4 h-4 mr-2 text-blue-600" />
                  Hands-on Workshops
                </div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-gray-700 text-sm font-medium">
                  <Lightbulb className="w-4 h-4 mr-2 text-yellow-500" />
                  Innovation Projects
                </div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-gray-700 text-sm font-medium">
                  <Calendar className="w-4 h-4 mr-2 text-green-500" />
                  Regular Events
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="https://gdg.community.dev/gdg-on-campus-rajalakshmi-engineering-college-chennai-india/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                  >
                    Join Our Community
                  </Button>
                </Link>
                <Link href="#events">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-gray-300 hover:border-gray-400 px-8 py-4 rounded-full hover:bg-gray-50 transition-all duration-300 text-lg bg-transparent"
                  >
                    Explore Events
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-gray-900">60+</div>
                  <div className="text-sm text-gray-600 font-medium">Active Students</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-gray-900">20+</div>
                  <div className="text-sm text-gray-600 font-medium">Events Hosted</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600 font-medium">Vibe</div>
                </div>
              </div>
            </div>

            {/* Right Video Container */}
            <div className="relative -mt-48">
              <div className="relative w-full max-w-lg mx-auto xl:max-w-xl">
                {/* Main Video Container - 16:9 Aspect Ratio */}
                <div className="relative w-full aspect-video bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
                  {/* Video Element */}
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/images/hero-video.mp4"
                  >
                    <source src="/images/hero-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Video Overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>

                {/* Decorative Elements - Positioned above video in top-right and bottom-left corners */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-600 rounded-full shadow-lg flex items-center justify-center z-10">
                  <Code className="w-8 h-8 text-white" />
                </div>

                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-500 rounded-full shadow-lg flex items-center justify-center z-10">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute -bottom-8 left-0 right-0">
          <svg viewBox="0 0 2400 200" className="w-full h-40 fill-blue-50">
            <path d="M0,80L80,85.3C160,91,320,101,480,96C640,91,800,69,960,64C1120,59,1280,69,1440,80C1600,91,1760,101,1920,96C2080,91,2240,69,2320,58.7L2400,48L2400,200L2320,200C2240,200,2080,200,1920,200C1760,200,1600,200,1440,200C1280,200,1120,200,960,200C800,200,640,200,480,200C320,200,160,200,80,200L0,200Z"></path>
          </svg>
        </div>
      </main>
    </div>
  )
}
