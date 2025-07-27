import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Calendar, MapPin, Building2 } from "lucide-react"

interface ExperienceItem {
  id: string
  company: string
  role: string
  duration: string
  location: string
  type: "full-time" | "part-time" | "contract" | "internship"
  description: string
  achievements: string[]
  technologies?: string[]
  current?: boolean
}

interface ExperienceSectionProps {
  experiences?: ExperienceItem[]
}

const defaultExperiences: ExperienceItem[] = [
  {
    id: "remarcable",
    company: "Remarcable",
    role: "Technical Product Manager",
    duration: "Mar 2024 - Current",
    location: "Omaha, NE",
    type: "full-time",
    description:
      "Led product development initiatives and technical strategy for a growing SaaS platform, bridging the gap between engineering and business objectives.",
    achievements: [
      "Stood up the Product Development team from ground zero, establishing processes and workflows that improved delivery speed",
      "Created seamless integrations between internal toolings, reducing manual work and improving team productivity",
      "Acted as Salesforce administrator, managing CRM configurations and automations for a 50+ person sales and support team",
      "Collaborated with engineering teams to define technical requirements and product roadmaps",
      "Implemented agile methodologies and sprint planning processes across 3 globally distributed development teams",
    ],
    technologies: ["Angular", "Django", "Salesforce", "APIs", "Apex (Salesforce Java)", "PostgreSQL", "AWS", "Docker"],
    current: true,
  },
    {
    id: "greenline-estimation",
    company: "Greenline Estimations",
    role: "Development Consultant",
    duration: "Jan 2024 - Current",
    location: "Remote",
    type: "contract",
    description:
      "Provided strategic guidance and technical expertise during the development of a new SaaS product targeted at the medical industry.",
    achievements: [
        "Conducted market research to identify customer needs and inform product development",
        "Collaborated with cross-functional teams to define product requirements and specifications",
        "Developed and maintained project timelines, ensuring on-time delivery of key milestones",
        "Provided ongoing support and training to internal teams on product features and functionality",
    ],
    technologies: ["Next.js", "TypeScript", "Django", "Python", "PostgreSQL"],
    current: true,
  },
  {
    id: "jbs-foods",
    company: "JBS Foods",
    role: "Purchasing Manager",
    duration: "May 2023 - Feb 2024",
    location: "Omaha, NE",
    type: "full-time",
    description:
      "Managed procurement operations for a leading food processing company, optimizing supply chain processes and vendor relationships.",
    achievements: [
        "Negotiated contracts with suppliers, achieving a 15% reduction in procurement costs",
        "Implemented inventory management systems that improved stock accuracy by 30%",
        "Led cross-functional teams to streamline purchasing workflows and reduce lead times",
        "Developed and maintained supplier performance metrics to ensure quality and reliability",
        "Trained and mentored junior purchasing staff on best practices and compliance standards",
    ],
    technologies: ["SAP ERP", "Cliq", "Excel", "SQL"],
    current: false,
  },
  {
    id: "data-annotation",
    company: "Data Annotation",
    role: "AI Data Analyst",
    duration: "Jun 2022 - Feb 2024",
    location: "Remote",
    type: "part-time",
    description:
        "Provided data annotation and analysis services for AI training datasets, ensuring high-quality inputs for machine learning models.",
    achievements: [
        "Annotated over 100,000 data points for various AI projects",
        "Verified data outputs and responses for outputs relating to JSON, JavaScript, Python and other programming languages",
        "Collaborated with data scientists to refine annotation guidelines and improve model training outcomes",
        "Conducted quality assurance checks on annotated datasets to ensure compliance with project standards",
        "Participated in regular feedback sessions to enhance annotation processes and tools",
    ],
    technologies: ["Python", "JSON", "JavaScript", "Machine Learning"],
    current: false,
  },
]

export default function ExperienceSection({ experiences = defaultExperiences }: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A track record of delivering impactful solutions and leading cross-functional teams to achieve business
              objectives through technical excellence.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line - hidden on mobile, visible on desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border transform -translate-x-0.5" />

            {/* Experience Items */}
            <div className="space-y-8 md:space-y-12">
              {experiences.map((experience, index) => (
                <div
                  key={experience.id}
                  className={`relative ${
                    index % 2 === 0 
                      ? "md:flex md:flex-row" 
                      : "md:flex md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot - repositioned for mobile */}
                  <div className="hidden md:block absolute left-1/2 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background transform -translate-x-2 z-10" />

                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}>
                    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardHeader className="pb-4">
                        <div className="flex flex-col gap-2 mb-3">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                            <h3 className="text-lg sm:text-xl font-bold leading-tight">{experience.role}</h3>
                            <Badge variant={experience.current ? "default" : "secondary"} className="self-start">
                              {experience.current ? "Current" : experience.type}
                            </Badge>
                          </div>
                          
                          <div className="flex items-center gap-1 text-sm font-medium">
                            <Building2 className="h-4 w-4 text-primary" />
                            <span>{experience.company}</span>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span>{experience.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span>{experience.location}</span>
                          </div>
                        </div>

                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{experience.description}</p>
                      </CardHeader>

                      <CardContent className="pt-0">
                        {/* Key Achievements */}
                        <div className="mb-6">
                          <h4 className="font-semibold mb-3 text-sm sm:text-base">Key Achievements</h4>
                          <ul className="space-y-2">
                            {experience.achievements.map((achievement, achievementIndex) => (
                              <li key={achievementIndex} className="flex items-start gap-2 sm:gap-3">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                                <span className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        {experience.technologies && experience.technologies.length > 0 && (
                          <div>
                            <h4 className="font-semibold mb-3 text-sm sm:text-base">Technologies & Tools</h4>
                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                              {experience.technologies.map((tech, techIndex) => (
                                <Badge key={techIndex} variant="outline" className="text-xs px-2 py-1">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
