import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function EventsSection() {
  const events = [
    {
      title: "Bit N Build Hackathon",
      organizer: "GDG-CRCE X GDG-REC",
      month: "August 2024",
      image: "/images/bitnbuid.png",
    },
    {
      title: "ELYSIUM - Investiture Ceremony",
      organizer: "GDG-REC",
      month: "September 2024",
      image: "/images/elysium.png",
    },
    {
      title: "Gen AI Cohort",
      organizer: "GDG-REC",
      month: "October 2024",
      image: "/images/cohort.png",
    },
    {
      title: "Google Solution Challenge",
      organizer: "GDG-REC",
      month: "January to March 2025",
      image: "/images/gsc.png",
    },
    {
      title: "GitRECquest",
      organizer: "GDG-REC X Intellexa-REC",
      month: "February to March 2025",
      image: "/images/gitrecquest.png",
    },
    {
      title: "Funstreet - Recharge 25'",
      organizer: "GDG-REC",
      month: "April 2025",
      image: "/images/funstreet.png",
    },
  ]

  return (
    <section id="events" className="py-16 md:py-24 bg-blue-50 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 leading-tight text-center mb-12">Our Events</h2>
        <p className="text-xl text-gray-700 leading-relaxed text-center mb-16 max-w-3xl mx-auto">
          In the previous tenure, we successfully organized 6 impactful events, fostering innovation and learning within
          our community.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card
              key={index}
              className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
            >
              <div className="relative w-full h-48 bg-gray-100">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  className="rounded-t-xl"
                />
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-xl font-semibold text-gray-900">{event.title}</CardTitle>
                <CardDescription className="text-gray-600 text-sm">
                  {event.organizer && <span className="block">{event.organizer}</span>}
                  <span className="block">{event.month}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                {/* Optional: Add a brief description or a "Learn More" button here */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
