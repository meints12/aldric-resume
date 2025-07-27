import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Link from "next/link"
import { MobileMenuToggle } from "@/components/mobile-menu-toggle"

interface ResumeHeaderProps {
  name?: string
  initials?: string
  resumeUrl?: string
}

export default function ResumeHeader({
  name = "Aldric Meints",
  initials = "AM",
  resumeUrl = "/resume.pdf",
}: ResumeHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 relative">
        {/* Logo/Name */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
            {initials}
          </div>
          <span className="font-bold text-xl">{name}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="#about" className="transition-colors hover:text-primary">
            About
          </Link>
          <Link href="#experience" className="transition-colors hover:text-primary">
            Experience
          </Link>
          <Link href="#projects" className="transition-colors hover:text-primary">
            Projects
          </Link>
          <Link href="#contact" className="transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href={resumeUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle - Client Component */}
        <MobileMenuToggle />
      </div>
    </header>
  )
}
