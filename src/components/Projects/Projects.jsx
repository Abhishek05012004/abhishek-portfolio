import { useState } from "react"
import {
  FolderOpen,
  Palette,
  Server,
  Wrench,
  Play,
  Github,
  ExternalLink,
  ArrowLeft,
  Settings,
} from "lucide-react"
import "./Projects.css"

const LiveDemo = ({ title, liveUrl }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  if (!liveUrl || liveUrl === "#") {
    return (
      <div
        className="live-demo-container"
        style={{
          background: "linear-gradient(135deg, var(--gray-50) 0%, white 100%)",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          height: "100%",
        }}
      >
        <h4
          style={{
            color: "var(--primary)",
            marginBottom: "10px",
            fontSize: "0.9rem",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <Play size={16} />
          {title}
        </h4>
        <p
          style={{
            color: "var(--gray-600)",
            fontSize: "0.75rem",
            lineHeight: "1.4",
            padding: "0 10px",
          }}
        >
          Demo coming soon! I am actively working on finalizing this project. It will be live and interactive here once fully completed!
        </p>
      </div>
    )
  }

  return (
    <div className="live-demo-container" style={{ position: "relative", width: "100%", height: "100%" }}>
      {isLoading && (
        <div
          className="demo-loader"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, var(--gray-50) 0%, white 100%)",
            color: "var(--gray-700)",
            zIndex: 10,
          }}
        >
          <div
            className="spinner"
            style={{
              width: "28px",
              height: "28px",
              border: "3px solid var(--gray-200)",
              borderTop: "3px solid var(--primary)",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
              marginBottom: "10px",
            }}
          />
          <style>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
          <span style={{ fontSize: "0.75rem", fontWeight: "500", color: "var(--gray-600)" }}>
            Connecting to Live Demo...
          </span>
        </div>
      )}

      {hasError ? (
        <div className="iframe-fallback" style={{ display: "flex" }}>
          <h4>
            <Play size={16} />
            {title}
          </h4>
          <p>Demo connection failed. You can still view it live in a new window!</p>
          <button onClick={() => window.open(liveUrl, "_blank")}>Open Live Site →</button>
        </div>
      ) : (
        <>
          <iframe
            src={liveUrl}
            title={title}
            frameBorder="0"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-presentation"
            loading="lazy"
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setHasError(true)
              setIsLoading(false)
            }}
            style={{
              opacity: isLoading ? 0 : 1,
              transition: "opacity 0.3s ease",
            }}
          />
          <div className="iframe-fallback">
            <h4>
              <Play size={16} />
              {title}
            </h4>
            <p>Click below to view the live site</p>
            <button onClick={() => window.open(liveUrl, "_blank")}>Open Live Site →</button>
          </div>
        </>
      )}
    </div>
  )
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all")
  const [flippedCards, setFlippedCards] = useState(new Set())
  const [renderedDemos, setRenderedDemos] = useState(new Set())

  const projects = [
    {
      id: 1,
      title: "Biology Trunk",
      description:
        "A comprehensive online Learning Management System (LMS) tailored for competitive biology preparation (NEET, TGT/PGT, Boards). Features student, faculty, and admin dashboards, dynamic course creation, Razorpay payment integration, enrollment management, and automated PDF receipt generation.",
      image: "/biology-trunk-logo.png",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
        "Razorpay",
      ],
      category: "fullstack",
      github: "https://github.com/W3BOPERATIONS/biology-trunk-client",
      live: "https://biologytrunk.in/",
      liveUrl: "https://biologytrunk.in/",
      demoType: "education",
      status: "Completed",
      logoScale: 1.25,
    },

    {
      id: 2,
      title: "TripEasy",
      description:
        "A full-stack travel booking platform enabling users to browse destinations, book holiday packages, request customized itineraries, process secure payments, and generate automated invoices.",
      image: "/tripeasy-logo.png",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Material UI",
        "Payment Integration",
      ],
      category: "fullstack",
      github: "https://github.com/alisproject111/tripeasy-client",
      live: "https://tripeasy.in/",
      liveUrl: "https://tripeasy.in/",
      demoType: "travel",
      status: "Completed",
      logoScale: 1.4,
    },

    {
      id: 3,
      title: "Scan Tap Pay",
      description:
        "A contactless retail checkout solution allowing customers to scan QR codes or tap NFC tags to instantly add products to a digital cart, complete purchases, and receive digital invoices without waiting in checkout queues.",
      image: "/scantappay-logo.png",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Razorpay",
        "QR Technology",
        "NFC",
      ],
      category: "fullstack",
      github: "https://github.com/Abhishek05012004/stp",
      live: "https://scantappay.flyanytrip.com/",
      liveUrl: "https://scantappay.flyanytrip.com/",
      demoType: "scanner",
      status: "Completed",
      logoScale: 1.0,
    },

    {
      id: 4,
      title: "ConvoChat",
      description:
        "A real-time communication platform featuring instant messaging, file sharing, emoji support, password recovery, and peer-to-peer audio/video calling powered by WebRTC and Socket.io.",
      image: "/chat-logo.png",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.io",
        "WebRTC",
      ],
      category: "fullstack",
      github: "https://github.com/Abhishek05012004/chat-client",
      live: "https://chat-client-pink-eight.vercel.app/",
      liveUrl: "https://chat-client-pink-eight.vercel.app/",
      demoType: "chat",
      status: "Completed",
      logoScale: 0.9,
    },

    {
      id: 5,
      title: "Employee Management System",
      description:
        "A biometric attendance and workforce management platform featuring AI-powered facial recognition, attendance tracking, leave management workflows, HR administration, and reporting dashboards.",
      image: "/ems-logo.png",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Face Recognition",
        "AI Integration",
      ],
      category: "fullstack",
      github: "https://github.com/Abhishek05012004/employee-management-system",
      live: "https://employee-management-system-client-umber.vercel.app/",
      liveUrl: "https://employee-management-system-client-umber.vercel.app/",
      demoType: "attendance",
      status: "Completed",
      logoScale: 1.35,
    },

    {
      id: 6,
      title: "ShopEase",
      description:
        "A MERN-based e-commerce platform featuring product management, inventory tracking, admin dashboards, secure checkout, payment processing, email billing, and order management.",
      image: "/shopease-logo.svg",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Cashfree Payment Gateway",
      ],
      category: "fullstack",
      github: "https://github.com/Abhishek05012004/shopease",
      live: "https://shopease-client-two.vercel.app/",
      liveUrl: "https://shopease-client-two.vercel.app/",
      demoType: "ecommerce",
      status: "Completed",
      logoScale: 1.0,
    },

    {
      id: 7,
      title: "SmartMenu",
      description:
        "A digital restaurant menu website designed for QR-based access. Restaurants can place a QR code linked to their menu URL on tables, allowing customers to instantly browse categorized dishes, search menu items, filter food preferences, and request waiter assistance directly from their phones.",
      image: "/menu-logo.png",
      technologies: [
        "React",
        "Tailwind CSS",
        "Responsive Design",
      ],
      category: "frontend",
      github: "https://github.com/Abhishek05012004/menu",
      live: "https://menu-page-gold.vercel.app/",
      liveUrl: "https://menu-page-gold.vercel.app/",
      demoType: "menu",
      status: "Completed",
      logoScale: 1.4,
    },

    {
      id: 8,
      title: "Digital Profile Card",
      description:
        "A digital profile and business card website that provides a unique URL for each employee or professional. When the profile URL is linked to a QR code on an ID card or visiting card, users can instantly access contact details, social media links, and professional information by scanning the code.",
      image: "/profile-logo.png",
      technologies: [
        "React",
        "Tailwind CSS",
        "Responsive Design",
      ],
      category: "frontend",
      github: "https://github.com/Abhishek05012004/profile",
      live: "https://profile-card-iota-ten.vercel.app/",
      liveUrl: "https://profile-card-iota-ten.vercel.app/",
      demoType: "profile",
      status: "Completed",
      logoScale: 0.8,
    },

    {
      id: 9,
      title: "Optimech Solution",
      description:
        "A responsive corporate website for an industrial engineering and automation company featuring service showcases, inquiry forms, smooth navigation, and lead generation workflows.",
      image: "/optimechsolution-logo.png",
      technologies: [
        "HTML5",
        "JavaScript",
        "Tailwind CSS",
        "EmailJS",
      ],
      category: "frontend",
      github: "https://github.com/ajha97575/optimech-solution",
      live: "https://www.optimechsolution.in/",
      liveUrl: "https://www.optimechsolution.in/",
      demoType: "industrial",
      status: "Completed",
      logoScale: 1.35,
    },
  ];

  const filters = [
    { key: "all", label: "All Projects", icon: FolderOpen, count: projects.length },
    {
      key: "fullstack",
      label: "Full Stack",
      icon: Wrench,
      count: projects.filter((p) => p.category === "fullstack").length,
    },
    {
      key: "frontend",
      label: "Frontend",
      icon: Palette,
      count: projects.filter((p) => p.category === "frontend").length,
    },
    /*
    {
      key: "backend",
      label: "Backend",
      icon: Server,
      count: projects.filter((p) => p.category === "backend").length,
    },
    */
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  const handleLiveClick = (projectId) => {
    setFlippedCards((prev) => new Set([...prev, projectId]))
    setRenderedDemos((prev) => new Set([...prev, projectId]))
  }

  const handleFlipBack = (projectId) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev)
      newSet.delete(projectId)
      return newSet
    })
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "Live":
        return "#10b981"
      case "Completed":
        return "#3b82f6"
      case "In Progress":
        return "#f59e0b"
      default:
        return "#6b7280"
    }
  }



  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <FolderOpen className="section-icon" size={32} />
            My Projects
          </h2>
          <p className="section-subtitle">Showcasing my latest work and technical achievements</p>
          <div className="projects-stats">
            <div className="stat-item">
              <span className="stat-number">{projects.length}</span>
              <span className="stat-label">Total Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{projects.filter((p) => p.status === "Live").length}</span>
              <span className="stat-label">Live Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{projects.filter((p) => p.status === "Completed").length}</span>
              <span className="stat-label">Completed</span>
            </div>
          </div>
        </div>

        <div className="filter-section">
          <div className="filter-buttons">
            {filters.map((filter) => {
              const IconComponent = filter.icon
              return (
                <button
                  key={filter.key}
                  className={`filter-btn ${activeFilter === filter.key ? "active" : ""}`}
                  onClick={() => setActiveFilter(filter.key)}
                >
                  <IconComponent className="filter-icon" size={16} />
                  <span className="filter-text">{filter.label}</span>
                  <span className="filter-count">{filter.count}</span>
                </button>
              )
            })}
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${flippedCards.has(project.id) ? "flipped" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-card-inner">
                {/* Front of card */}
                <div className="project-card-front">
                  <div className="project-image">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      style={{ "--logo-scale": project.logoScale || 1.0 }}
                    />
                    <div className="project-overlay">
                      <div className="project-links">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link github-link">
                          <Github className="link-icon" size={16} />
                          <span>GitHub</span>
                        </a>
                        <button className="project-link demo-link" onClick={() => handleLiveClick(project.id)}>
                          <Play className="link-icon" size={16} />
                          <span>Live Demo</span>
                        </button>
                      </div>
                    </div>
                    <div className="project-badges">
                      <span
                        className="status-badge"
                        style={{
                          backgroundColor: getStatusColor(project.status),
                        }}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <div className="project-content">
                    <div className="project-header">
                      <h3 className="project-title">{project.title}</h3>
                      <div className="project-meta-container">
                        <div className="project-category">
                          <span className="category-icon">
                            {project.category === "frontend" && <Palette size={14} />}
                            {project.category === "backend" && <Server size={14} />}
                            {project.category === "fullstack" && <Wrench size={14} />}
                          </span>
                          <span className="category-text">{project.category}</span>
                        </div>
                        <span
                          className="status-badge-mobile"
                          style={{
                            backgroundColor: getStatusColor(project.status),
                          }}
                        >
                          {project.status}
                        </span>
                      </div>
                    </div>

                    <p className="project-description">{project.description}</p>

                    <div className="project-technologies">
                      <div className="tech-header">
                        <Settings className="tech-icon" size={16} />
                        <span className="tech-label">Technologies:</span>
                      </div>
                      <div className="tech-list">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="tech-badge">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="project-mobile-links">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-mobile-link github-link">
                        <Github className="link-icon" size={16} />
                        <span>GitHub</span>
                      </a>
                      <button className="project-mobile-link demo-link" onClick={() => handleLiveClick(project.id)}>
                        <Play className="link-icon" size={16} />
                        <span>Live Demo</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Back of card - Laptop with Live Demo */}
                <div className="project-card-back">
                  <div className="back-card-header">
                    <h3>
                      <Play className="demo-icon" size={20} />
                      {project.title}
                    </h3>
                    <p>Live Interactive Demo</p>
                  </div>

                  <div
                    className="laptop-container"
                    onTouchStart={(e) => e.stopPropagation()}
                    onTouchMove={(e) => e.stopPropagation()}
                    onTouchEnd={(e) => e.stopPropagation()}
                    onWheel={(e) => e.stopPropagation()}
                  >
                    <div className="laptop-screen">
                      <div className="project-preview">
                        {renderedDemos.has(project.id) && (
                          <LiveDemo title={project.title} liveUrl={project.liveUrl} />
                        )}
                      </div>
                    </div>
                    <div className="laptop-base"></div>
                  </div>

                  <div className="demo-actions">
                    <button className="flip-back-btn" onClick={() => handleFlipBack(project.id)}>
                      <ArrowLeft className="back-icon" size={16} />
                      Back to Details
                    </button>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="open-live-btn">
                      <ExternalLink className="external-icon" size={16} />
                      Open Live Site
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects