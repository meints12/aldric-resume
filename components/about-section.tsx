import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Calendar, Mail, Phone } from "lucide-react"

interface AboutSectionProps {
  name?: string
  title?: string
  location?: string
  email?: string
  phone?: string
  yearsExperience?: number
  profileImage?: string
  bio?: string
  highlights?: string[]
  skills?: string[]
}

export default function AboutSection({
  name = "Aldric Meints",
  title = "Full Stack Developer",
  location = "Omaha, NE",
  email = "aldricmeints@gmail.com",
  phone = "970-988-1523",
  yearsExperience = 2,
  profileImage = "/headshot-aldric.jpeg",
  bio = "Passionate full-stack developer with 2+ years of experience building scalable web applications and leading product teams. I specialize in React, Django, and cloud technologies, with a proven track record of delivering high-quality solutions that drive business growth.",
  highlights = [
    "Contributed to Product Development team, leading to 100% customer growth in the first year",
          "Developed and maintained internal salesforce tooling, consolidating 3 internal tools into a single application",
          "Created internal integrations between Salesforce, Clickup, Chatbase and Outline, and our production application increasing team productivity",
  ],
  skills = [
    "JavaScript",
          "Python",
          "Django",
          "TypeScript",
          "React",
          "Next.js",
          "Node.js",
          "Apex (Salesforce Java)",
          "PostgreSQL",
          "AWS",
          "Docker",
          "Git",
          "Tailwind CSS",
  ],
}: AboutSectionProps) {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Image and Contact Info */}
          <div className="space-y-6">
            <div className="relative">
              <img
                src={profileImage || "/placeholder.svg"}
                alt={`${name} - Professional headshot`}
                className="w-full max-w-md mx-auto rounded-2xl shadow-lg object-cover aspect-square"
              />
            </div>

            <Card className="max-w-md mx-auto">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-semibold text-lg">Contact Information</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <a href={`mailto:${email}`} className="hover:text-primary transition-colors">
                      {email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <a href={`tel:${phone}`} className="hover:text-primary transition-colors">
                      {phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{yearsExperience}+ years experience</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - About Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{name}</h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">{title}</h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-6">{bio}</p>

                <p className="text-base leading-relaxed text-muted-foreground">
                  When I'm not coding, you can find me exploring the mountains, fly-fishing, or playing bass/guitar. I believe in continuous learning and am always looking for
                  opportunities to grow both personally and professionally.
                </p>
              </div>
            </div>

            {/* Key Highlights */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Key Achievements</h3>
              <ul className="space-y-3">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Core Skills */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Core Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
