import ResumeHeader from "@/components/resume-header"
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"

export default function Page() {
  return (
    <div>
      <ResumeHeader name="Aldric Meints" initials="AM" resumeUrl="/resume.pdf" />
      <AboutSection
        name="Aldric Meints"
        title="Full Stack Developer / Technical Product Manager"
        location="Omaha, NE"
        email="aldricmeints@gmail.com"
        phone="970-988-1523"
        yearsExperience={2}
        bio="Passionate full-stack developer with 2+ years of experience building scalable web applications and leading product teams. I specialize in React, Django, and cloud technologies, with a proven track record of delivering high-quality solutions that drive business growth."
        highlights={[
           "Founded Product Development team at a scaling startup, contributing to 100% customer growth, securing Series A funding, and doubling ARR",
          "Developed and maintained internal tooling, consolidating 3 internal tools into a single application contributing to productivity gains and improved customer support",
          "Guided and led a cross-functional team in the creation of minimum viable product for a healthcare startup, resulting in successful beta launch and positive user feedback",
        ]}
        skills={[
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
        ]}
      />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}
