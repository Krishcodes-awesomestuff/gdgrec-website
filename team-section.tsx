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
        email: "mailto:rakeshdavidj@gmail.com",
        instagram: "https://instagram.com/rakeshdavid_27",
        linkedin: "https://www.linkedin.com/in/rakesh-david-78b689294/?lipi=urn%3Ali%3Apage%3Ap_mwlite_my_network%3B%2F09D64gKSVa20OTPj5WqcA%3D%3D",
      },
    },
    {
      name: "Kishore Kayyes",
      role: "Co-Lead",
      image: "/placeholder.svg?height=200&width=200&text=Kishore",
      social: {
        email: "mailto:kayyes.kishore@gmail.com",
        instagram: "https://www.instagram.com/kayyes.kishore/",
        linkedin: "http://www.linkedin.com/in/kishorekayyes",
      },
    },
    {
      name: "Awinthika Santhanam",
      role: "Secretary",
      image: "/placeholder.svg?height=200&width=200&text=Awinthika",
      social: {
        email: "mailto:awinthikas@gmail.com",
        instagram: "https://instagram.com/awinthika_",
        linkedin: "https://www.linkedin.com/in/awinthika-santhanam-24853828a/",
      },
    },
  ]

  const techTeam: TeamMember[] = [
    {
      name: "Krishnaprasath",
      role: "Web Development Lead",
      image: "/core/Krishnaprasath.jpg",
      social: {
        email: "mailto:krishnaprasathvenkadesan@gmail.com",
        instagram: "https://instagram.com/prasxth.pvt_",
        linkedin: "https://www.linkedin.com/in/krishnaprasath-venkadesan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
    },
    {
      name: "Lokaa",
      role: "Web Development Co-Lead",
      image: "/placeholder.svg?height=200&width=200&text=Lokaa",
      social: {
        email: "mailto:lokaa1910@gmail.com",
        instagram: "https://www.instagram.com/lokaa_1910?igsh=MWczMmFyZm85M2xyeA%3D%3D&utm_source=qr",
        linkedin: "https://www.linkedin.com/in/lokaa-v-0345b42a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      },
    },
    {
      name: "Sanjana",
      role: "App Development Lead",
      image: "/core/Sanjana .jpg",
      social: {
        email: "mailto:sanjr.krishnan@gmail.com",
        instagram: "https://instagram.com/_.sanjana39._",
        linkedin: "https://www.linkedin.com/in/sanjana-r-83b1712a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
    },
    {
      name: "Haresh R",
      role: "AI Lead",
      image: "/core/haresh.jpg",
      social: {
        email: "mailto:haresh.r2103@gmail.com",
        instagram: "https://www.instagram.com/hareshh_21/?hl=en#",
        linkedin: "http://www.linkedin.com/in/hareshrajesh",
      },
    },
    {
      name: "Ishana Sabrish",
      role: "AI Co-Lead",
      image: "/placeholder.svg?height=200&width=200&text=Ishana",
      social: {
        email: "mailto:ishanasabrish78@gmail.com",
        instagram: "https://www.linkedin.com/in/ishana-sabrish-a842092a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        linkedin: "https://www.instagram.com/ixhana._.0206?igsh=MXRsNGg3bDdoOXhlbw==",
      },
    },
    {
      name: "Deepesh",
      role: "IoT Lead",
      image: "/core/Deepesh.jpg",
      social: {
        email: "mailto:oggudeepesh2005@gmail.com",
        instagram: "https://instagram.com/_.zeutron._",
        linkedin: "https://www.linkedin.com/in/deepesh-o-495650329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
    },
    {
      name: "Lokesh JR",
      role: "Tech-Ops Lead",
      image: "/placeholder.svg?height=200&width=200&text=Lokesh",
      social: {
        email: "mailto:lokeshsinghn06@gmail.com",
        instagram: "https://www.instagram.com/lxkishh?igsh=MW8yb2ZzYjRkNjZjMQ==",
        linkedin: "https://www.linkedin.com/in/lokesh-singh-n-6b40792a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      },
    },
    {
      name: "Prasanna Kumar",
      role: "Tech-Ops Co-Lead",
      image: "/placeholder.svg?height=200&width=200&text=Prasanna",
      social: {
        email: "mailto:Mail-prasannakumarpk2023@gmail.com",
        instagram: "https://www.instagram.com/prasannnnaaaaa?igsh=MXdmOG4wZjJhMjJmYw%3D%3D&utm_source=qr",
        linkedin: "https://www.linkedin.com/in/prasannakumar-pandurangan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      },
    },
  ]

  const nonTechTeam: TeamMember[] = [
    {
      name: "Aishwarya",
      role: "Design Lead",
      image: "/placeholder.svg?height=200&width=200&text=Aishwarya",
      social: {
        email: "mailto:aishwaryaarulselvan5@gmail.com",
        instagram: "https://instagram.com/aishkookie_orchid",
        linkedin: "https://www.linkedin.com/in/aishwarya-a-2b15b52a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
    },
    {
      name: "Akshithaa H",
      role: "Creative Lead",
      image: "/placeholder.svg?height=200&width=200&text=Akshithaa",
      social: {
        email: "mailto:Techporcupines@gmail.com",
        instagram: "https://www.instagram.com/Akab0_0m",
        linkedin: "https://www.linkedin.com/in/akshithaa2006?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
    },
    {
      name: "Madhusha Harini",
      role: "Creative Co-Lead",
      image: "/core/madhusha.jpg",
      social: {
        email: "mailto:madhushaharini2005@gmail.com",
        instagram: "https://www.instagram.com/_madhushaharini?igsh=cXlta2JmcWlvZmN4",
        linkedin: "https://www.linkedin.com/in/madhusha-harini-7459312a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
    },
    {
      name: "Koustupan",
      role: "Outreach Lead",
      image: "/core/koustupan.jpg",
      social: {
        email: "mailto:tkoustupan@gmail.com",
        instagram: "https://www.instagram.com/koustupan9/",
        linkedin: "https://www.linkedin.com/in/koustupan-t-83bb6a222/",
      },
    },
    {
      name: "Aboorvan",
      role: "Outreach Co-Lead",
      image: "/core/aboorvan.jpg",
      social: {
        email: "mailto:sba.aboorvan@gmail.com",
        instagram: "https://www.instagram.com/abooorvan?igsh=dHp3YmUzZWg4bjRj",
        linkedin: "https://www.linkedin.com/in/aboorvan-s-b-26b5b52a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
    },
    {
      name: "Venkateswaran",
      role: "Event Lead",
      image: "/core/venky.jpg",
      social: {
        email: "mailto:venkateswar.lakshminarasimhan@gmail.com",
        instagram: "https://www.instagram.com/venky.3825?igsh=ZDFhaGtwcnl4Z3lp&utm_source=qr",
        linkedin: "https://www.linkedin.com/in/venkateswar-l-0288712a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      },
    },
    {
      name: "Harshavardhan",
      role: "Event Co-Lead",
      image: "/core/harshavardhan.jpg",
      social: {
        email: "mailto:harshasri1511@gmail.com",
        instagram: "https://www.instagram.com/har_shx._?igsh=MjBxdnFyNDk3dHFl",
        linkedin: "https://www.linkedin.com/in/harshavardhan-s-31a514321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
    },
    {
      name: "Adithyaa Suresh",
      role: "Media Lead",
      image: "/placeholder.svg?height=200&width=200&text=Aadhityaa",
      social: {
        email: "mailto:adithyaasuresh07@gmail.com",
        instagram: "https://www.instagram.com/mainly_adi/profilecard/?igsh=ZGhuc2k0djB0emsw",
        linkedin: "http://www.linkedin.com/in/adithyaa-suresh-1330782a2",
      },
    },
    {
      name: "Benin AF",
      role: "Media Co-Lead",
      image: "/core/benin.jpg",
      social: {
        email: "mailto:benin7070@gmail.com",
        instagram: "https://www.instagram.com/benin_fx?igsh=bzE4bGt4aXVzbmRw",
        linkedin: "https://www.linkedin.com/in/benin-a-f-87290b2a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
    },
  ]

  // Combine all team members into one array
  const allTeamMembers: TeamMember[] = coreTeam.concat(techTeam, nonTechTeam);

  const renderTeamMember = (member: TeamMember, index: number) => (
    <Card
      key={index}
      className="flex flex-col items-center text-center p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 w-84 h-80 hover:scale-105 hover:-translate-y-2 group bg-white"
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
            suppressHydrationWarning={true}
          >
            <ChevronLeft className="w-7 h-7 text-gray-600 hover:text-blue-600 transition-colors duration-300" />
          </button>

          <button
            onClick={nextSlide}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-white rounded-full shadow-xl border border-gray-200 items-center justify-center hover:bg-blue-50 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 hover:scale-110"
            aria-label="Next team members"
            suppressHydrationWarning={true}
          >
            <ChevronRight className="w-7 h-7 text-gray-600 hover:text-blue-600 transition-colors duration-300" />
          </button>

          {/* Navigation Arrows - Mobile */}
          <button
            onClick={prevSlide}
            className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-xl border border-gray-200 flex items-center justify-center hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 hover:scale-110"
            aria-label="Previous team member"
            suppressHydrationWarning={true}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 hover:text-blue-600 transition-colors duration-300" />
          </button>

          <button
            onClick={nextSlide}
            className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-xl border border-gray-200 flex items-center justify-center hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 hover:scale-110"
            aria-label="Next team member"
            suppressHydrationWarning={true}
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
                suppressHydrationWarning={true}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
