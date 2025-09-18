"use client";

import { useEffect, useState } from "react";
import {
  Play,
  Mail,
  Download,
  User,
  Settings,
  Github,
  Linkedin,
} from "lucide-react";
import "./Hero.css";

const Hero = () => {
  const [text, setText] = useState("");
  const roles = [
    "MERN Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentRole = roles[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex, roles]);

  const handleDownloadResume = () => {
    // Create a dummy resume download - replace with your actual resume URL
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Replace with your actual resume path
    link.download = "Abhishek_Jha_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="name-highlight">Abhishek Jha</span>
            </h1>
            <h2 className="hero-subtitle">
              I'm a <span className="typing-text">{text}</span>
              <span className="cursor">|</span>
            </h2>
            <p className="hero-description">
              <Play className="rocket-emoji" size={16} />
              Currently interning at FlyAnyTrip as a MERN Stack Developer.
              Passionate about creating innovative web solutions and bringing
              ideas to life through code.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn-primary">
                <Play className="btn-icon" size={16} />
                View My Work
              </a>
              <a href="#contact" className="btn-primary btn-secondary">
                <Mail className="btn-icon" size={16} />
                Get In Touch
              </a>
              <button
                onClick={handleDownloadResume}
                className="btn-primary btn-accent"
              >
                <Download className="btn-icon" size={16} />
                Download Resume
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-container">
              <div className="profile-card">
                <div className="card-glow"></div>
                <div className="profile-content">
                  <div className="profile-avatar">
                    <img src="/profile.jpeg" alt="Abhishek Jha" />
                  </div>
                  <div className="profile-info">
                    <h3>
                      <User className="profile-emoji" size={16} />
                      Abhishek Jha
                    </h3>
                    <p>
                      <Settings className="tech-emoji" size={16} />
                      MERN Stack Developer
                    </p>
                    <div className="social-links">
                      <a href="#" className="social-link">
                        <Github className="social-icon" size={16} />
                        <span>GitHub</span>
                      </a>
                      <a href="#" className="social-link">
                        <Linkedin className="social-icon" size={16} />
                        <span>LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
