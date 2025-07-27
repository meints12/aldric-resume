"use client"

import { Button } from "@/components/ui/button"
import { Menu, X, Download } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function MobileMenuToggle() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <Button variant="ghost" size="sm" className="md:hidden" onClick={toggleMenu}>
        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 md:hidden border-t bg-background shadow-lg">
          <nav className="container flex flex-col space-y-4 px-4 py-4">
            <Link
              href="#about"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#experience"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button variant="outline" size="sm" className="w-fit bg-transparent">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </nav>
        </div>
      )}
    </>
  )
}
