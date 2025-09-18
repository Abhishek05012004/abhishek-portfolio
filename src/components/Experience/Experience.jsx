// Experience.jsx
import {
  Briefcase,
  Zap,
  Target,
  Settings,
  Building,
  MapPin,
  Calendar,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";
import "./Experience.css";

const Experience = () => {
  const [expandedCards, setExpandedCards] = useState([]);

  const toggleCard = (index) => {
    if (expandedCards.includes(index)) {
      setExpandedCards(expandedCards.filter((i) => i !== index));
    } else {
      setExpandedCards([...expandedCards, index]);
    }
  };

  const experiences = [
    {
      title: "MERN Stack Developer Intern",
      company: "FlyAnyTrip",
      period: "Jan 2024 - Present",
      location: "Remote",
      type: "Internship",
      description: [
        "Developing and maintaining web applications using MERN stack",
        "Building responsive user interfaces with React.js and modern CSS",
        "Creating RESTful APIs using Node.js and Express.js",
        "Working with MongoDB for database design and optimization",
        "Collaborating with senior developers on client projects",
        "Implementing authentication and authorization systems",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "JavaScript",
        "HTML5",
        "CSS3",
      ],
      achievements: [
        "Successfully delivered 3+ client projects",
        "Improved application performance by 25%",
        "Implemented responsive designs for mobile compatibility",
      ],
    },
    {
      title: "Personal Projects & Learning",
      company: "Self-Directed",
      period: "2023 - Present",
      location: "Self-Learning",
      type: "Personal Development",
      description: [
        "Built multiple full-stack web applications from scratch",
        "Learned modern web development technologies and frameworks",
        "Practiced problem-solving through coding challenges",
        "Created responsive and interactive user interfaces",
        "Implemented various authentication and database solutions",
        "Deployed applications using modern hosting platforms",
      ],
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "JavaScript",
        "Git",
        "Vercel",
      ],
      achievements: [
        "Completed 10+ personal projects",
        "Mastered MERN stack development",
        "Built portfolio showcasing technical skills",
      ],
    },
  ];

  return (
    <section id="experience" className="experience section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <Briefcase className="section-icon" size={32} />
            Experience
          </h2>
          <p className="section-subtitle">
            My professional journey and continuous learning path
          </p>
        </div>

        <div className="experience-container">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`experience-card ${
                index % 2 === 0 ? "left" : "right"
              }`}
            >
              <div
                className={`experience-content ${
                  expandedCards.includes(index) ? "expanded" : ""
                }`}
              >
                <div className="experience-header">
                  <div className="job-badge">
                    {exp.type === "Internship" ? (
                      <Zap className="job-icon" size={16} />
                    ) : (
                      <Target className="job-icon" size={16} />
                    )}
                    <span className="job-type">{exp.type}</span>
                  </div>
                  <div className="job-info">
                    <h3 className="job-title">{exp.title}</h3>
                    <div className="company-details">
                      <span className="company-name">
                        <Building className="company-icon" size={14} />
                        {exp.company}
                      </span>
                      <span className="job-location">
                        <MapPin className="location-icon" size={14} />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="job-period-container">
                  <span className="job-period">
                    <Calendar className="calendar-icon" size={14} />
                    {exp.period}
                  </span>
                  <div className="expand-button-container">
                    <button
                      className="expand-button"
                      onClick={() => toggleCard(index)}
                    >
                      {expandedCards.includes(index) ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </button>
                  </div>
                </div>

                <div
                  className={`expandable-content ${
                    expandedCards.includes(index) ? "expanded" : ""
                  }`}
                >
                  <div className="job-description">
                    <h4>
                      <Target size={16} />
                      Key Responsibilities:
                    </h4>
                    <ul>
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="job-achievements">
                    <h4>
                      <Zap size={16} />
                      Achievements:
                    </h4>
                    <ul>
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="technologies">
                    <h4>
                      <Settings size={16} />
                      Technologies Used:
                    </h4>
                    <div className="tech-tags">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="experience-timeline">
                <div className="timeline-dot"></div>
                <div className="timeline-line"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
