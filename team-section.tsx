import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Instagram, Linkedin } from "lucide-react"

export default function TeamSection() {
  const teamMembers = [
    {
      name: "RAKESH DAVID DINESHAN JOSEPH",
      role: "Lead",
      image: "/placeholder.svg?height=200&width=200&text=Rakesh+David",
      social: {
        email: "mailto:rakesh.david@example.com",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Kishore",
      role: "Co-Lead",
      image: "/placeholder.svg?height=200&width=200&text=Kishore",
      social: {
        email: "mailto:kishore@example.com",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Awantika Santhanam",
      role: "Secretary",
      image: "/placeholder.svg?height=200&width=200&text=Awantika",
      social: {
        email: "mailto:awantika@example.com",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Krishnaprasath Venkadesan",
      role: "Lead - Web Dev",
      image: "/placeholder.svg?height=200&width=200&text=Krishnaprasath",
      social: {
        email: "mailto:krishnaprasath@example.com",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Sanjana",
      role: "Lead - App Dev",
      image: "/placeholder.svg?height=200&width=200&text=Sanjana",
      social: {
        email: "mailto:sanjana@example.com",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "John Doe",
      role: "Lead - TechOps",
      image: "/placeholder.svg?height=200&width=200&text=John+Doe",
      social: {
        email: "mailto:john.doe@example.com",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Koustupan",
      role: "Lead - Outreach",
      image: "/placeholder.svg?height=200&width=200&text=Koustupan",
      social: {
        email: "mailto:koustupan@example.com",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Venkateshwaran",
      role: "Lead - Event",
      image: "/placeholder.svg?height=200&width=200&text=Venkateshwaran",
      social: {
        email: "mailto:venkateshwaran@example.com",
        instagram: "#",
        linkedin: "#",
      },
    },
  ]

  return (
    <section id="team" className="py-16 md:py-24 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 leading-tight text-center mb-12">Meet the Leads</h2>
        <p className="text-xl text-gray-700 leading-relaxed text-center mb-16 max-w-3xl mx-auto">
          Our dedicated team of leads drives the GDG REC community forward, fostering innovation and collaboration.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
            >
              <div className="relative w-32 h-32 mb-4 overflow-hidden rounded-full border-4 border-blue-200 shadow-md">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <CardHeader className="p-0 mb-2">
                <CardTitle className="text-xl font-semibold text-gray-900">{member.name}</CardTitle>
                <CardDescription className="text-blue-600 font-medium">{member.role}</CardDescription>
              </CardHeader>
              <CardContent className="flex gap-4 p-0">
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
          ))}
        </div>
      </div>
    </section>
  )
}
