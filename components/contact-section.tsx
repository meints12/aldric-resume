import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Mail, Phone, Calendar, Linkedin, Github,} from "lucide-react"
import Link from "next/link"

interface ContactSectionProps {
  name?: string
  title?: string
  location?: string
  email?: string
  phone?: string
  yearsExperience?: number
  availability?: string
  socialLinks?: {
    linkedin?: string
    github?: string
    twitter?: string
    website?: string
  }
}

export default function ContactSection({
  name = "Aldric Meints",
  title = "Full Stack Developer",
  location = "Omaha, NE",
  email = "aldricmeints@gmail.com",
  phone = "970-988-1523",
  yearsExperience = 2,
  availability = "Available for new opportunities",
  socialLinks = {
    linkedin: "https://www.linkedin.com/in/aldricmeints/",
    github: "https://github.com/meints12",
  },
}: ContactSectionProps) {
  return (
    <section id="contact" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborations. Whether you have a project in mind or just
              want to connect, I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <h3 className="text-2xl font-bold mb-2">Contact Information</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {availability}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <Link
                          href={`mailto:${email}`}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {email}
                        </Link>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Phone</p>
                        <Link
                          href={`tel:${phone}`}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {phone}
                        </Link>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-muted-foreground">{location}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <Calendar className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Experience</p>
                        <p className="text-muted-foreground">{yearsExperience}+ years in development</p>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="pt-6 border-t">
                    <h4 className="font-semibold mb-4">Connect With Me</h4>
                    <div className="flex gap-4">
                      {socialLinks.linkedin && (
                        <Link
                          href={socialLinks.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
                        >
                          <Linkedin className="h-5 w-5" />
                        </Link>
                      )}
                      {socialLinks.github && (
                        <Link
                          href={socialLinks.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                        >
                          <Github className="h-5 w-5" />
                        </Link>
                      )}
                    
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Call to Action */}
            <div className="space-y-8">
              <Card className="shadow-lg bg-primary text-primary-foreground h-fit">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Want to work together?</h3>
                  <p className="mb-6 opacity-90">
                    I'm currently available for freelance work and full-time opportunities. Let's build something amazing
                    together!
                  </p>
                  <div className="flex flex-col gap-4">
                    <Link href={`mailto:${email}?subject=Project Inquiry`}>
                      <Button size="lg" variant="secondary" className="w-full">
                        <Mail className="mr-2 h-5 w-5" />
                        Email Me
                      </Button>
                    </Link>
                    <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                      <Button
                        size="lg"
                        variant="outline"
                        className="w-full bg-transparent border-white text-white hover:bg-white hover:text-primary"
                      >
                        Download Resume
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
