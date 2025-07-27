"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Instagram, Linkedin, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

interface TeamMember {
  name: string
  role: string
  image: string
  social: {
    email?: string
    instagram?: string
    linkedin?: string
  }
}

export default function TeamSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const coreTeam: TeamMember[] = [
    {
      name: "RAKESH DAVID",
      role: "Lead",
      image: "/placeholder.svg?height=200&width=200&text=Rakesh+David",
      social: {
        email: "mailto:rakesh.david@example.com",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Kishore Kayyes",
      role: "Co-Lead",
      image: "/placeholder.svg?height=200&width=200&text=Kishore",
      social: {
        email: "mailto:kishore@example.com",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Awinthika Santhanam",
      role: "Secretary",
      image: "/placeholder.svg?height=200&width=200&text=Awinthika",
      social: {
        email: "mailto:awinthika@example.com",
        instagram: "#",
        linkedin: "#",
      },
    },
  ]

  const techTeam: TeamMember[] = [
    {
      name: "Krishnaprasath",
      role: "Web Development Lead",
      image: "/placeholder.svg?height=200&width=200&text=Krishnaprasath",
      social: {
        email: "mailto:krishnaprasath@example.com",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Sanjana",
      role: "App Development Lead",
      image: "/placeholder.svg?height=200&width=200&text=Sanjana",
      social: {
        email: "mailto:sanjana@example.com",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Haresh R",
      role: "AI Lead",
      image: "/placeholder.svg?height=200&width=200&text=Haresh",
      social: {
        email: "mailto:haresh@example.com",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Deepesh",
      role: "IoT Lead",
      image: "/placeholder.svg?height=200&width=200&text=Deepesh",
      social: {
        email: "mailto:deepesh@example.com",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Lokesh JR",
      role: "Tech-Ops Lead",
      image: "/placeholder.svg?height=200&width=200&text=Lokesh",
      social: {
        email: "mailto:lokesh@example.com",
        instagram: "#",
        linkedin: "#",
      },
    },
  ]

  const nonTechTeam: TeamMember[] = [
    {
      name: "Aishwarya",
      role: "Design Lead",
      image: "/placeholder.svg?height=200&width=200&text=Aishwarya",
      social: {
        email: "mailto:aishwarya@example.com",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Akshithaa H",
      role: "Creative Lead",
      image: "/placeholder.svg?height=200&width=200&text=Akshithaa",
      social: {
        email: "mailto:akshithaa@example.com",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Koustupan",
      role: "Outreach Lead",
      image: "/placeholder.svg?height=200&width=200&text=Koustupan",
      social: {
        email: "mailto:koustupan@example.com",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Venkateswaran",
      role: "Event Lead",
      image: "/placeholder.svg?height=200&width=200&text=Venkateshwaran",
      social: {
        email: "mailto:venkateshwaran@example.com",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Adithyaa Suresh",
      role: "Media Lead",
      image: "/placeholder.svg?height=200&width=200&text=Aadhityaa",
      social: {
        email: "mailto:aadhityaa@example.com",
        instagram: "#",
        linkedin: "#",
      },
    },
  ]

  // Combine all team members into one array
  const allTeamMembers: TeamMember[] = [
    ...coreTeam,
    ...techTeam,
    ...nonTechTeam
  ]

  // Carousel navigation functions
  const nextSlide = () => {
    if (!isClient) return
    const step = isMobile ? 1 : 3
    setCurrentIndex((prevIndex) => 
      prevIndex + step >= allTeamMembers.length ? 0 : prevIndex + step
    )
  }

  const prevSlide = () => {
    if (!isClient) return
    const step = isMobile ? 1 : 3
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, allTeamMembers.length - step) : prevIndex - step
    )
  }

  // Don't render carousel controls until client-side hydration is complete
  if (!isClient) {
    return (
      <section id="team" className="py-16 md:py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 leading-tight text-center mb-12">Meet Our Team</h2>
          <p className="text-xl text-gray-700 leading-relaxed text-center mb-16 max-w-3xl mx-auto">
            Our dedicated team of leads drives the GDG REC community forward, fostering innovation and collaboration.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center px-16 md:px-20">
            {allTeamMembers.slice(0, 3).map((member, index) => renderTeamMember(member, index))}
          </div>
        </div>
      </section>
    )
  }

  const renderTeamMember = (member: TeamMember, index: number) => (
    <Card
      key={index}
      className="flex flex-col items-center text-center p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 w-84 h-72 hover:scale-105 hover:-translate-y-2 group bg-white"
    >
      <div className="relative w-32 h-32 mb-4 overflow-hidden rounded-full border-4 border-blue-200 shadow-md flex-shrink-0 group-hover:border-blue-400 transition-colors duration-300">
        <Image
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          fill
          sizes="128px"
          style={{ objectFit: 'cover' }}
          className="rounded-full group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <CardHeader className="p-0 text-center flex-grow flex flex-col justify-center mb-4">
        <CardTitle className="text-lg font-semibold text-gray-900 line-clamp-2 mb-2 group-hover:text-blue-600 transition-colors duration-300">{member.name}</CardTitle>
        <CardDescription className="text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors duration-300">{member.role}</CardDescription>
      </CardHeader>
      <CardContent className="flex gap-6 p-0 mt-auto mb-6">
        {member.social.email && (
          <Link
            href={member.social.email}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Email of ${member.name}`}
            className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition-all duration-200 hover:scale-110"
          >
            <Mail className="w-5 h-5 text-gray-600 hover:text-blue-600 transition-colors duration-200" />
          </Link>
        )}
        {member.social.instagram && (
          <Link
            href={member.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram profile of ${member.name}`}
            className="p-2 rounded-full bg-gray-100 hover:bg-pink-100 transition-all duration-200 hover:scale-110"
          >
            <Instagram className="w-5 h-5 text-gray-600 hover:text-pink-500 transition-colors duration-200" />
          </Link>
        )}
        {member.social.linkedin && (
          <Link
            href={member.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`LinkedIn profile of ${member.name}`}
            className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition-all duration-200 hover:scale-110"
          >
            <Linkedin className="w-5 h-5 text-gray-600 hover:text-blue-700 transition-colors duration-200" />
          </Link>
        )}
      </CardContent>
    </Card>
  )

  return (
    <section id="team" className="py-16 md:py-24 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 leading-tight text-center mb-12">Meet Our Team</h2>
        <p className="text-xl text-gray-700 leading-relaxed text-center mb-16 max-w-3xl mx-auto">
          Our dedicated team of leads drives the GDG REC community forward, fostering innovation and collaboration.
        </p>

        {/* Carousel Container */}
        <div className="relative px-16 md:px-20">
          {/* Navigation Arrows - Desktop */}
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-white rounded-full shadow-xl border border-gray-200 items-center justify-center hover:bg-blue-50 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 hover:scale-110"
            aria-label="Previous team members"
          >
            <ChevronLeft className="w-7 h-7 text-gray-600 hover:text-blue-600 transition-colors duration-300" />
          </button>

          <button
            onClick={nextSlide}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-white rounded-full shadow-xl border border-gray-200 items-center justify-center hover:bg-blue-50 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 hover:scale-110"
            aria-label="Next team members"
          >
            <ChevronRight className="w-7 h-7 text-gray-600 hover:text-blue-600 transition-colors duration-300" />
          </button>

          {/* Navigation Arrows - Mobile */}
          <button
            onClick={prevSlide}
            className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-xl border border-gray-200 flex items-center justify-center hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 hover:scale-110"
            aria-label="Previous team member"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 hover:text-blue-600 transition-colors duration-300" />
          </button>

          <button
            onClick={nextSlide}
            className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-xl border border-gray-200 flex items-center justify-center hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 hover:scale-110"
            aria-label="Next team member"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 hover:text-blue-600 transition-colors duration-300" />
          </button>

          {/* Carousel Content */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / (isMobile ? 1 : 3))}%)` 
              }}
            >
              {allTeamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="w-full md:w-1/3 flex-shrink-0 px-6 py-4"
                >
                  {renderTeamMember(member, index)}
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-10 space-x-3">
            {Array.from({ 
              length: Math.ceil(allTeamMembers.length / (isMobile ? 1 : 3)) 
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * (isMobile ? 1 : 3))}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                  Math.floor(currentIndex / (isMobile ? 1 : 3)) === index
                    ? 'bg-blue-600 shadow-lg'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
