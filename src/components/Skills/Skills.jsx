"use client";

import { useState, useEffect } from "react";
import { Settings, Palette, Server, Wrench } from "lucide-react";
import "./Skills.css";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [isVisible, setIsVisible] = useState(false);
  const [animatingCategory, setAnimatingCategory] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = {
    frontend: [
      {
        name: "React.js",
        level: 90,
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React.js"
            className="tech-logo"
          />
        ),
        description: "Expert",
        color: "#61DAFB",
      },
      {
        name: "JavaScript",
        level: 85,
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="JavaScript"
            className="tech-logo"
          />
        ),
        description: "Advanced",
        color: "#F7DF1E",
      },
      {
        name: "HTML5",
        level: 90,
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            alt="HTML5"
            className="tech-logo"
          />
        ),
        description: "Expert",
        color: "#E34F26",
      },
      {
        name: "CSS3",
        level: 85,
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            alt="CSS3"
            className="tech-logo"
          />
        ),
        description: "Advanced",
        color: "#1572B6",
      },
      {
        name: "TypeScript",
        level: 70,
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            alt="TypeScript"
            className="tech-logo"
          />
        ),
        description: "Intermediate",
        color: "#3178C6",
      },
      {
        name: "Tailwind CSS",
        level: 85,
        icon: (
          <img
            src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
            alt="Tailwind CSS"
            className="tech-logo"
          />
        ),
        description: "Advanced",
        color: "#06B6D4",
      },
    ],
    backend: [
      {
        name: "Node.js",
        level: 85,
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            alt="Node.js"
            className="tech-logo"
          />
        ),
        description: "Advanced",
        color: "#339933",
      },
      {
        name: "Express.js",
        level: 85,
        icon: (
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/express.svg"
            alt="Express.js"
            className="tech-logo"
            style={{ filter: "invert(1)" }}
          />
        ),
        description: "Advanced",
        color: "#000000",
      },
      {
        name: "MongoDB",
        level: 85,
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
            alt="MongoDB"
            className="tech-logo"
          />
        ),
        description: "Advanced",
        color: "#47A248",
      },
      {
        name: "PostgreSQL",
        level: 65,
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
            alt="PostgreSQL"
            className="tech-logo"
          />
        ),
        description: "Intermediate",
        color: "#336791",
      },
      {
        name: "REST APIs",
        level: 90,
        icon: (
          <img
            src="https://img.icons8.com/fluency/48/api-settings.png"
            alt="REST APIs"
            className="tech-logo"
          />
        ),
        description: "Expert",
        color: "#FF6B35",
      },
      {
        name: "JWT",
        level: 85,
        icon: (
          <img
            src="https://jwt.io/img/pic_logo.svg"
            alt="JWT"
            className="tech-logo"
          />
        ),
        description: "Advanced",
        color: "#000000",
      },
    ],
    tools: [
      {
        name: "Git",
        level: 80,
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            alt="Git"
            className="tech-logo"
          />
        ),
        description: "Advanced",
        color: "#F05032",
      },
      {
        name: "GitHub",
        level: 85,
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub"
            className="tech-logo"
            style={{ filter: "invert(1)" }}
          />
        ),
        description: "Advanced",
        color: "#000000",
      },
      {
        name: "VS Code",
        level: 95,
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
            alt="VS Code"
            className="tech-logo"
          />
        ),
        description: "Expert",
        color: "#007ACC",
      },
      {
        name: "Postman",
        level: 85,
        icon: (
          <img
            src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png"
            alt="Postman"
            className="tech-logo"
          />
        ),
        description: "Advanced",
        color: "#FF6C37",
      },
      {
        name: "Vercel",
        level: 80,
        icon: (
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/vercel.svg"
            alt="Vercel"
            className="tech-logo"
            style={{ filter: "invert(1)" }}
          />
        ),
        description: "Advanced",
        color: "#000000",
      },
      {
        name: "ChatGPT",
        level: 90,
        icon: (
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg"
            alt="ChatGPT"
            className="tech-logo"
          />
        ),
        description: "Expert",
        color: "#10A37F",
      },
    ],
  };

  const handleCategoryChange = (category) => {
    if (category !== activeCategory) {
      setAnimatingCategory(true);
      setTimeout(() => {
        setActiveCategory(category);
        setAnimatingCategory(false);
      }, 300);
    }
  };

  return (
    <section id="skills" className="skills section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <Settings className="section-icon" />
            Skills & Technologies
          </h2>
          <p className="section-subtitle">
            Technologies I work with and my proficiency levels
          </p>
        </div>

        <div className="skills-content">
          <div className="skills-categories">
            {Object.keys(skillCategories).map((category) => (
              <button
                key={category}
                className={`category-btn ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => handleCategoryChange(category)}
              >
                <span className="category-icon">
                  {category === "frontend" && <Palette size={20} />}
                  {category === "backend" && <Server size={20} />}
                  {category === "tools" && <Wrench size={20} />}
                </span>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div
            className={`skills-grid ${animatingCategory ? "animating" : ""}`}
          >
            {skillCategories[activeCategory].map((skill, index) => (
              <div
                key={skill.name}
                className={`skill-card skill-category-${activeCategory}`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  "--skill-color": skill.color,
                }}
              >
                <div className="skill-header">
                  <div
                    className="skill-icon"
                    style={{
                      backgroundColor: `${skill.color}20`,
                      color: skill.color,
                    }}
                  >
                    {skill.icon}
                  </div>
                  <div className="skill-info">
                    <h4 className="skill-name">{skill.name}</h4>
                    <p className="skill-level">{skill.description}</p>
                  </div>
                  <div
                    className="skill-percentage-badge"
                    style={{ backgroundColor: skill.color }}
                  >
                    {skill.level}%
                  </div>
                </div>
                <div className="skill-progress-container">
                  <div className="skill-progress">
                    <div
                      className="skill-progress-bar"
                      style={{
                        width: isVisible ? `${skill.level}%` : "0%",
                        backgroundColor: skill.color,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
