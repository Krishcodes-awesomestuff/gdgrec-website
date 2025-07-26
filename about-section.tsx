import Image from "next/image"
import { Target, Eye } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image Column */}
          <div className="relative w-full aspect-video rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
            <Image
              src="/placeholder.svg?height=450&width=800&text=GDG+Community+Learning"
              alt="Students collaborating and learning"
              layout="fill"
              objectFit="cover"
              className="rounded-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          </div>

          {/* Right About Us Content Column */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">About Us</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Welcome to the Google Developer Groups (GDG) On Campus at Rajalakshmi Engineering College (REC) the
              largest technical club in our college! We are a vibrant community of tech enthusiasts dedicated to
              fostering innovation, collaboration, and learning in the fields of technology and computer science.
            </p>
          </div>
        </div>

        {/* Mission and Vision Section - Below the main About Us content */}
        <div className="grid md:grid-cols-2 gap-8 mt-16 pt-8 border-t border-gray-200">
          {/* Mission */}
          <div className="space-y-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 shadow-md">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              At GDG REC, our mission is to empower students with the skills and knowledge necessary to excel in the
              rapidly evolving tech landscape. We aim to bridge the gap between academic learning and real-world
              applications, providing opportunities for hands-on experiences, peer-to-peer learning, and networking with
              industry professionals.
            </p>
          </div>

          {/* Vision */}
          <div className="space-y-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 shadow-md">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              We believe in the power of mentorship. Our club connects students with experienced mentors from various
              tech fields who provide guidance, support, and valuable industry insights. Additionally, we host
              networking events where students can meet professionals, explore internship opportunities, and build
              connections that can shape their careers.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
