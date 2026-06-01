"use client"

import { useState, useEffect } from "react"
import { Home, User, Settings, Briefcase, FolderOpen, Mail, Sun, Moon } from "lucide-react"
import { useTheme } from "../../context/ThemeContext"
import "./Navbar.css"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Get all sections
      const sections = ["home", "about", "skills", "experience", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Skills", href: "#skills", icon: Settings },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Projects", href: "#projects", icon: FolderOpen },
    { name: "Contact", href: "#contact", icon: Mail },
  ]

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="nav-content">
          <div className="logo">
            <span className="logo-text">&lt;Abhishek/&gt;</span>
          </div>

          <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
            {navItems.map((item, index) => {
              const IconComponent = item.icon
              return (
                <li key={index} className="nav-item">
                  <a
                    href={item.href}
                    className={`nav-link ${activeSection === item.href.substring(1) ? "active" : ""}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <IconComponent className="nav-icon" size={14} />
                    {item.name}
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="nav-right">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <div
              className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
