import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ExternalLink, Github, Calendar, Users } from "lucide-react"
import Link from "next/link"

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  category: "web-app" | "integration" | "mobile" | "tool" | "saas" | "website"
  status: "completed" | "in-progress" | "maintenance"
  timeline: string
  teamSize?: number
  role: string
  achievements: string[]
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
}

interface ProjectsSectionProps {
  projects?: Project[]
}

const defaultProjects: Project[] = [
  {
    id: "remarcable",
    title: "Remarcable",
    description:
      "Remarcable is a leading B2B SaaS platform that provides procurement, inventory management, and financial solutions for a multi-trillion dollar construction sector",
    longDescription:
      "Led the creation of a product management team focused on delivering customer-centric solutions. Developed a comprehensive product strategy that aligned with business goals and customer needs, resulting in a 100% customer growth in the first year and securing Series A funding.",
    image: "remarcable-screenshot.webp",
    technologies: ["Angular", "Django", "Python", "PostgreSQL", "JavaScript", "Salesforce", "AWS"],
    category: "web-app",
    status: "completed",
    timeline: "Ongoing",
    teamSize: 16,
    role: "Technical Product Manager",
    achievements: [
      "Created newly established product development team",
        "Contributed to a 100% customer growth in the first year",
        "Developed and maintained internal salesforce tooling, consolidating 3 internal tools into a single application",
    ],
    liveUrl: "https://remarcable.com",
    featured: true,
  },
  {
    id: "salesforce-integration-suite",
    title: "Salesforce Integration Suite",
    description:
      "Custom integration platform connecting Salesforce with internal tools and external APIs for seamless data flow.",
    longDescription:
      "Developed a comprehensive integration suite that connects Salesforce CRM with internal project management tools, training systems, and customer support platforms. Includes real-time sync, error handling, and monitoring.",
    image: "salesforce-screenshot.jpg",
    technologies: ["Salesforce Apex", "REST APIs", "JavaScript", "Salesforce LWC", "Web Components", "Webhooks"],
    category: "integration",
    status: "completed",
    timeline: "3 months",
    teamSize: 1,
    role: "Lead Developer, Salesforce Administrator",
    achievements: [
    ],
    liveUrl: "https://integrations.remarcable.com",
    featured: false,
  },
  {
    id: "trippy-rv",
    title: "Trippy Travel App",
    description: "A travel planning app that helps rv owners manage their vehicles, trips and budgets.",
    longDescription:
      "Developed a mobile application that simplifies travel planning for RV owners. Features include trip management, budget tracking, and vehicle maintenance reminders.",
    image: "/trippy-screenshot.jpg",
    technologies: ["Next.js", "TypeScript", "Django", "Vercel", "PostgreSQL", "Tailwind CSS", "Terraform", "Docker"],
    category: "web-app",
    status: "maintenance",
    timeline: "3 months",
    teamSize: 1,
    role: "Solo Developer",
    achievements: [
    ],
    liveUrl: "https://app.trippy-rv.com",
    featured: true,
  },
  {
    id: "good-faith-estimation",
    title: "SaaS Splash Page",
    description: "Landing page for a SaaS product with mailing list and feature highlights.",
    longDescription:
      "Created a marketing landing page for a new SaaS product. Focused on clear messaging, feature highlights, and a strong call-to-action to capture leads.",
    image: "greenline-screenshot.jpeg",
    technologies: ["Cloudflare Workers", "JavaScript", "Tailwind CSS", "Google Sheets"],
    category: "website",
    status: "completed",
    timeline: "2 Days",
    teamSize: 1,
    role: "Solo Developer, Consultant",
    achievements: [
    ],
    liveUrl: "https://greenlineestimations.com",
  },
]

export default function ProjectsSection({ projects = defaultProjects }: ProjectsSectionProps) {
  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of impactful projects that demonstrate technical expertise, product thinking, and ability to
              deliver solutions that drive business value.
            </p>
          </div>

          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8">Highlighted Work</h3>
              <div className="grid lg:grid-cols-2 gap-8">
                {featuredProjects.map((project) => (
                  <Card
                    key={project.id}
                    className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={`${project.title} screenshot`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h4 className="text-xl font-bold">{project.title}</h4>
                        <Badge
                          variant={
                            project.status === "completed"
                              ? "default"
                              : project.status === "in-progress"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {project.status.replace("-", " ")}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-4">{project.longDescription}</p>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{project.timeline}</span>
                        </div>
                        {project.teamSize && (
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            <span>{project.teamSize} team members</span>
                          </div>
                        )}
                      </div>

                      <div className="mb-4">
                        <p className="text-sm font-medium text-primary mb-2">Role: {project.role}</p>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0">
                      {/* Key Achievements */}
                      {project.achievements.slice(0, 3).length > 0 && (
                        <div className="mb-6">
                          <h5 className="font-semibold mb-3">Key Impact</h5>
                          <ul className="space-y-2">
                            {project.achievements.slice(0, 3).map((achievement, index) => (
                              <li key={index} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      )}

                      {/* Technologies */}
                      <div className="mb-6">
                        <h5 className="font-semibold mb-3">Technologies</h5>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Links */}
                      <div className="flex gap-3">
                        {project.liveUrl && (
                          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <Button size="sm" className="flex items-center gap-2">
                              <ExternalLink className="h-4 w-4" />
                              Live Demo
                            </Button>
                          </Link>
                        )}
                        {project.githubUrl && (
                          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Button size="sm" variant="outline" className="flex items-center gap-2 bg-transparent">
                              <Github className="h-4 w-4" />
                              View Code
                            </Button>
                          </Link>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <div>
              <h3 className="text-2xl font-semibold mb-8">Additional Projects</h3>
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {otherProjects.map((project) => (
                  <Card
                    key={project.id}
                    className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={`${project.title} screenshot`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h4 className="text-lg font-bold">{project.title}</h4>
                        <Badge variant="outline" className="text-xs">
                          {project.category.replace("-", " ")}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{project.description}</p>

                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                        <span>{project.timeline}</span>
                        {project.teamSize && <span>• {project.teamSize} team</span>}
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0">
                      {/* Top Achievement */}
                        {project.achievements.length > 0 && (
                            <div className="mb-4">
                            <div className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                                <span className="text-xs text-muted-foreground">{project.achievements[0]}</span>
                            </div>
                            </div>
                        )}
    

                      {/* Technologies (limited) */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.slice(0, 4).map((tech, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 4 && (
                            <Badge variant="outline" className="text-xs">
                              +{project.technologies.length - 4}
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Links */}
                      <div className="flex gap-2">
                        {project.liveUrl && (
                          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <Button
                              size="sm"
                              variant="outline"
                              className="flex items-center gap-1 text-xs bg-transparent"
                            >
                              <ExternalLink className="h-3 w-3" />
                              Demo
                            </Button>
                          </Link>
                        )}
                        {project.githubUrl && (
                          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Button
                              size="sm"
                              variant="outline"
                              className="flex items-center gap-1 text-xs bg-transparent"
                            >
                              <Github className="h-3 w-3" />
                              Code
                            </Button>
                          </Link>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

        
        </div>
      </div>
    </section>
  )
}
