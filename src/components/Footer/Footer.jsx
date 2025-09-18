import {
  Code,
  Zap,
  Navigation,
  User,
  Settings,
  Home,
  Github,
  Linkedin,
  Twitter,
  FolderOpen,
  Mail,
  Bookmark,
} from "lucide-react"
import "./Footer.css"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">
              <Code className="footer-icon" size={20} />
              Abhishek<span>.</span>
            </h3>
            <p className="footer-description">
              <Zap className="rocket-icon" size={50} />
              MERN Stack Developer passionate about creating innovative web solutions.
            </p>
          </div>

          <div className="footer-sections">
            <div className="link-group">
              <h4>
                <Navigation className="section-icon" size={16} />
                Quick Links
              </h4>
              <ul>
                <li>
                  <a href="#home">
                    <Home className="link-icon" size={14} />
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about">
                    <User className="link-icon" size={14} />
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills">
                    <Settings className="link-icon" size={14} />
                    Skills
                  </a>
                </li>
              </ul>
            </div>

            <div className="link-group">
              <h4>
                <Code className="section-icon" size={16} />
                Connect
              </h4>
              <ul>
                <li>
                  <a href="#">
                    <Github className="link-icon" size={14} />
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Linkedin className="link-icon" size={14} />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Twitter className="link-icon" size={14} />
                    Twitter
                  </a>
                </li>
              </ul>
            </div>

            <div className="link-group">
              <h4>
                <Bookmark className="section-icon" size={16} />
                More
              </h4>
              <ul>
                <li>
                  <a href="#projects">
                    <FolderOpen className="link-icon" size={14} />
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact">
                    <Mail className="link-icon" size={14} />
                    Contact
                  </a>
                </li>
                {/* <li>
                  <a href="mailto:abhishek.jha@example.com">
                    <Mail className="link-icon" size={14} />
                    Email
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
