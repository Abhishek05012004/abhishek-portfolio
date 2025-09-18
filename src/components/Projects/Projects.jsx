"use client"

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
  Clock,
} from "lucide-react"
import "./Projects.css"

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all")
  const [flippedCards, setFlippedCards] = useState(new Set())

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A comprehensive full-stack e-commerce solution featuring user authentication, product management, secure payment integration, and real-time inventory tracking with modern UI/UX design.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      category: "fullstack",
      github: "#",
      live: "#",
      liveUrl: "https://example-ecommerce.com",
      demoType: "ecommerce",
      status: "Completed",
      duration: "3 months",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, team collaboration features, drag-and-drop functionality, and advanced project tracking capabilities.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
      category: "frontend",
      github: "#",
      live: "#",
      liveUrl: "https://example-tasks.com",
      demoType: "tasks",
      status: "Completed",
      duration: "2 months",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A responsive weather application with location-based forecasts, interactive charts, weather alerts, and beautiful data visualizations using modern APIs.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["JavaScript", "HTML5", "CSS3", "Weather API"],
      category: "frontend",
      github: "#",
      live: "#",
      liveUrl: "https://example-weather.com",
      demoType: "weather",
      status: "Completed",
      duration: "1 month",
    },
    {
      id: 4,
      title: "Blog API",
      description:
        "RESTful API for a modern blogging platform with JWT authentication, CRUD operations, data validation, file uploads, and comprehensive documentation.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      category: "backend",
      github: "#",
      live: "#",
      liveUrl: "https://api-example-blog.com",
      demoType: "api",
      status: "Completed",
      duration: "1.5 months",
    },
    {
      id: 5,
      title: "Personal Portfolio",
      description:
        "A responsive portfolio website showcasing projects and skills with smooth animations, modern design, and optimized performance. Built with React and deployed on Vercel.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "CSS3", "JavaScript", "Vite"],
      category: "frontend",
      github: "https://github.com/abhishek/portfolio",
      live: "https://abhishek-portfolio-delta-woad.vercel.app/",
      liveUrl: "https://abhishek-portfolio-delta-woad.vercel.app/",
      demoType: "portfolio",
      status: "Live",
      duration: "2 weeks",
    },
    {
      id: 6,
      title: "Chat Application",
      description:
        "Real-time chat application with multiple rooms, user authentication, message history, file sharing, and emoji support using Socket.io for seamless communication.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
      category: "fullstack",
      github: "#",
      live: "#",
      liveUrl: "https://example-chat.com",
      demoType: "chat",
      status: "In Progress",
      duration: "Ongoing",
    },
  ]

  const filters = [
    { key: "all", label: "All Projects", icon: FolderOpen, count: projects.length },
    {
      key: "frontend",
      label: "Frontend",
      icon: Palette,
      count: projects.filter((p) => p.category === "frontend").length,
    },
    {
      key: "backend",
      label: "Backend",
      icon: Server,
      count: projects.filter((p) => p.category === "backend").length,
    },
    {
      key: "fullstack",
      label: "Full Stack",
      icon: Wrench,
      count: projects.filter((p) => p.category === "fullstack").length,
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  const handleLiveClick = (projectId) => {
    setFlippedCards((prev) => new Set([...prev, projectId]))
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

  const renderLiveDemo = (demoType, title, liveUrl) => {
    switch (demoType) {
      case "portfolio":
        return (
          <div className="live-demo-container">
            <iframe
              src={liveUrl}
              title={title}
              frameBorder="0"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-presentation"
              loading="lazy"
              onLoad={(e) => {
                console.log("Iframe loaded successfully")
              }}
              onError={(e) => {
                console.log("Iframe failed to load, showing fallback")
                e.target.style.display = "none"
                const fallback = e.target.parentNode.querySelector(".iframe-fallback")
                if (fallback) {
                  fallback.style.display = "flex"
                }
              }}
            />
            <div className="iframe-fallback">
              <h4>
                <Play size={16} />
                {title}
              </h4>
              <p>Click below to view the live portfolio</p>
              <button onClick={() => window.open(liveUrl, "_blank")}>Open Portfolio →</button>
            </div>
          </div>
        )

      case "ecommerce":
        return (
          <div className="live-demo-container demo-ecommerce">
            <div className="demo-header">
              <div className="demo-nav">
                <span className="demo-logo">ShopEasy</span>
                <div className="demo-menu">
                  <span>Home</span>
                  <span>Products</span>
                  <span>Cart (2)</span>
                </div>
              </div>
            </div>

            <div className="demo-hero">
              <h3>Summer Sale - Up to 50% Off!</h3>
              <p>Discover amazing deals on all categories</p>
              <button className="demo-btn">Shop Now</button>
            </div>

            <div className="demo-products">
              <div className="demo-product">
                <div className="demo-product-img">Phone</div>
                <h4>Smartphone</h4>
                <p>$299.99</p>
              </div>
              <div className="demo-product">
                <div className="demo-product-img">Laptop</div>
                <h4>Laptop</h4>
                <p>$899.99</p>
              </div>
              <div className="demo-product">
                <div className="demo-product-img">Shirt</div>
                <h4>T-Shirt</h4>
                <p>$29.99</p>
              </div>
              <div className="demo-product">
                <div className="demo-product-img">Shoes</div>
                <h4>Sneakers</h4>
                <p>$79.99</p>
              </div>
            </div>

            <div className="demo-footer">
              <p>© 2024 ShopEasy. Secure payments with Stripe.</p>
            </div>
          </div>
        )

      case "tasks":
        return (
          <div className="live-demo-container demo-tasks">
            <div className="demo-task-board">
              <div className="demo-task-header">
                <span className="demo-task-title">Tasks To Do</span>
                <button className="demo-add-task">+ Add</button>
              </div>
              <div className="demo-task-list">
                <div className="demo-task-item">Design homepage mockup</div>
                <div className="demo-task-item">Setup authentication</div>
                <div className="demo-task-item completed">Create user stories</div>
              </div>
            </div>

            <div className="demo-task-board">
              <div className="demo-task-header">
                <span className="demo-task-title">In Progress</span>
                <button className="demo-add-task">+ Add</button>
              </div>
              <div className="demo-task-list">
                <div className="demo-task-item">Implement real-time chat</div>
                <div className="demo-task-item">Database optimization</div>
              </div>
            </div>

            <div className="demo-task-board">
              <div className="demo-task-header">
                <span className="demo-task-title">Done</span>
                <button className="demo-add-task">+ Add</button>
              </div>
              <div className="demo-task-list">
                <div className="demo-task-item completed">Project setup</div>
                <div className="demo-task-item completed">Team onboarding</div>
                <div className="demo-task-item completed">Requirements gathering</div>
              </div>
            </div>
          </div>
        )

      case "weather":
        return (
          <div className="live-demo-container demo-weather">
            <div className="demo-weather-card">
              <div className="demo-weather-location">Location: New York, NY</div>
              <div className="demo-weather-temp">22°C</div>
              <div className="demo-weather-desc">Sunny</div>
              <div className="demo-weather-details">
                <div>Humidity: 65%</div>
                <div>Wind: 12 km/h</div>
                <div>Pressure: 1013 hPa</div>
                <div>UV Index: 6</div>
              </div>
            </div>

            <div className="demo-forecast">
              <h4>5-Day Forecast</h4>
              <div className="demo-forecast-items">
                <div>Mon: Sunny 24°</div>
                <div>Tue: Cloudy 21°</div>
                <div>Wed: Rainy 18°</div>
                <div>Thu: Sunny 25°</div>
                <div>Fri: Cloudy 23°</div>
              </div>
            </div>

            <div className="demo-weather-card">
              <div className="demo-weather-location">Location: London, UK</div>
              <div className="demo-weather-temp">15°C</div>
              <div className="demo-weather-desc">Light Rain</div>
              <div className="demo-weather-details">
                <div>Humidity: 85%</div>
                <div>Wind: 8 km/h</div>
                <div>Pressure: 1008 hPa</div>
                <div>UV Index: 2</div>
              </div>
            </div>
          </div>
        )

      default:
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
            }}
          >
            <h4
              style={{
                color: "var(--primary)",
                marginBottom: "10px",
                fontSize: "0.9rem",
              }}
            >
              <Play size={16} />
              {title}
            </h4>
            <p
              style={{
                color: "var(--gray-600)",
                fontSize: "0.7rem",
                marginBottom: "15px",
              }}
            >
              Interactive demo coming soon!
            </p>
            <button className="demo-btn" onClick={() => window.open(liveUrl, "_blank")}>
              View Live Site
            </button>
          </div>
        )
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
                    <img src={project.image || "/placeholder.svg"} alt={project.title} />
                    <div className="project-overlay">
                      <div className="project-links">
                        <a href={project.github} className="project-link github-link">
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
                      <span className="duration-badge">
                        <Clock className="duration-icon" size={12} />
                        {project.duration}
                      </span>
                    </div>
                  </div>

                  <div className="project-content">
                    <div className="project-header">
                      <h3 className="project-title">{project.title}</h3>
                      <div className="project-category">
                        <span className="category-icon">
                          {project.category === "frontend" && <Palette size={14} />}
                          {project.category === "backend" && <Server size={14} />}
                          {project.category === "fullstack" && <Wrench size={14} />}
                        </span>
                        <span className="category-text">{project.category}</span>
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

                  <div className="laptop-container">
                    <div className="laptop-screen">
                      <div className="project-preview">
                        {renderLiveDemo(project.demoType, project.title, project.liveUrl)}
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
