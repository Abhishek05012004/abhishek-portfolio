"use client";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  Instagram,
  User,
  Send,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { useToast } from "../../context/ToastContext";
import "./Contact.css";

const SERVICE_ID = "service_k8kvd4p"; // e.g., "service_xxxx"
const TEMPLATE_ID = "template_ya3jbcs"; // e.g., "template_xxxx"
const PUBLIC_KEY = "nt77tX0lrt1MQ4Rzz"; // e.g., "OAbcD_1XyZ..."

const Contact = () => {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        showToast("Message sent successfully!", "success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((err) => {
        console.error("Failed to send message:", err);
        showToast("Failed to send message. Please try again.", "error");
      });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "abhishekportfolio2707@gmail.com",
      link: "mailto:abhishekportfolio2707@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 7575841397",
      link: "tel:+917575841397",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Vadodara, Gujarat",
      link: "https://www.google.com/maps/place/Vadodara,+Gujarat/@22.3222406,73.0906853,12z/data=!3m1!4b1!4m6!3m5!1s0x395fc8ab91a3ddab:0xac39d3bfe1473fb8!8m2!3d22.3000395!4d73.2064994!16zL20vMDJrZnhr?entry=ttu&g_ep=EgoyMDI1MDcyMC4wIKXMDSoASAFQAw%3D%3D",
    },
    // {
    //   icon: Linkedin,
    //   title: "LinkedIn",
    //   value: "linkedin.com/in/abhishek-jha",
    //   link: "https://linkedin.com/in/abhishek-jha",
    // },
  ];

  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <Mail className="section-icon" size={32} />
            Get In Touch
          </h2>
          <p className="section-subtitle">
            Let's discuss your next project or opportunity
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <h3>
                <User size={24} />
                Let's Connect
              </h3>
              <p>
                I'm always interested in hearing about new opportunities and
                projects. Whether you have a question or just want to say hi,
                feel free to reach out!
              </p>

              <div className="contact-methods">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <a key={index} href={info.link} className="contact-method">
                      <div className="method-icon">
                        <IconComponent size={20} />
                      </div>
                      <div className="method-info">
                        <span className="method-title">{info.title}</span>
                        <span className="method-value">{info.value}</span>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="social-links">
                <a href="#" className="social-link github">
                  <Github className="social-icon" size={16} />
                  <span>GitHub</span>
                </a>
                <a href="#" className="social-link linkedin">
                  <Linkedin className="social-icon" size={16} />
                  <span>LinkedIn</span>
                </a>
                <a href="#" className="social-link twitter">
                  <Twitter className="social-icon" size={16} />
                  <span>Twitter</span>
                </a>
                <a href="#" className="social-link instagram">
                  <Instagram className="social-icon" size={16} />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                <Send className="btn-icon" size={16} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
