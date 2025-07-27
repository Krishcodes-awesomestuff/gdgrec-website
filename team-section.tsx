import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Instagram, Linkedin } from "lucide-react"

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
      name: "Kous",
      role: "Outreach Lead",
      image: "/placeholder.svg?height=200&width=200&text=Koustupan",
      social: {
        email: "mailto:koustupan@example.com",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Venkat",
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

  const renderTeamMember = (member: TeamMember, index: number) => (
    <Card
      key={index}
      className="flex flex-col items-center text-center p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 w-80 h-72"
    >
      <div className="relative w-32 h-32 mb-4 overflow-hidden rounded-full border-4 border-blue-200 shadow-md flex-shrink-0">
        <Image
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          fill
          sizes="128px"
          style={{ objectFit: 'cover' }}
          className="rounded-full"
        />
      </div>
      <CardHeader className="p-0 text-center flex-grow flex flex-col justify-center">
        <CardTitle className="text-lg font-semibold text-gray-900 line-clamp-2 mb-2">{member.name}</CardTitle>
        <CardDescription className="text-blue-600 font-medium text-sm mb-4">{member.role}</CardDescription>
      </CardHeader>
      <CardContent className="flex gap-4 p-0 mt-auto">
        {member.social.email && (
          <Link
            href={member.social.email}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Email of ${member.name}`}
          >
            <Mail className="w-6 h-6 text-gray-700 hover:text-blue-600 transition-colors duration-200" />
          </Link>
        )}
        {member.social.instagram && (
          <Link
            href={member.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram profile of ${member.name}`}
          >
            <Instagram className="w-6 h-6 text-gray-700 hover:text-pink-500 transition-colors duration-200" />
          </Link>
        )}
        {member.social.linkedin && (
          <Link
            href={member.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`LinkedIn profile of ${member.name}`}
          >
            <Linkedin className="w-6 h-6 text-gray-700 hover:text-blue-700 transition-colors duration-200" />
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

        {/* Core Team Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Core Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {coreTeam.map((member, index) => renderTeamMember(member, index))}
          </div>
        </div>

        {/* Tech Team Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">TECH TEAM</h3>
          <div className="space-y-8">
            {/* First Row: Web, App, AI */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
              {techTeam.slice(0, 3).map((member, index) => renderTeamMember(member, index))}
            </div>
            {/* Second Row: IoT, Tech-Ops */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center max-w-2xl mx-auto">
              {techTeam.slice(3, 5).map((member, index) => renderTeamMember(member, index + 3))}
            </div>
          </div>
        </div>

        {/* Non-Tech Team Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">NON-TECH TEAM</h3>
          <div className="space-y-8">
            {/* First Row: Design, Creative, Outreach */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
              {nonTechTeam.slice(0, 3).map((member, index) => renderTeamMember(member, index))}
            </div>
            {/* Second Row: Event, Media */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center max-w-2xl mx-auto">
              {nonTechTeam.slice(3, 5).map((member, index) => renderTeamMember(member, index + 3))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
