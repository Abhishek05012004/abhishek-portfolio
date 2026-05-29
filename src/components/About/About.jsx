import { User, Zap, Target, Heart, BarChart3, Award, Lightbulb } from "lucide-react"
import "./About.css"

const About = () => {
  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <User className="section-icon" size={32} />
            About Me
          </h2>
          <p className="section-subtitle">Get to know more about who I am, what I do, and my journey</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="text-card">
              <div className="card-header">
                <div className="profile-badge">
                  <Zap className="badge-icon" size={16} />
                  <span className="badge-text">MERN Stack Developer</span>
                </div>
                <h3>Hello! I'm Abhishek Jha</h3>
              </div>

              <div className="story-content">
                <div className="story-item">
                  <div className="story-icon">
                    <Lightbulb size={24} />
                  </div>
                  <div className="story-text">
                    <h4>My Journey</h4>
                    <p>
                      I'm a passionate MERN Stack Developer currently working full-time at FlyAnyTrip (where I previously served as an intern), building
                      scalable web applications and robust APIs. My journey in web development started
                      with a curiosity about how websites work, and it has evolved into a deep passion for creating
                      innovative digital solutions.
                    </p>
                  </div>
                </div>

                <div className="story-item">
                  <div className="story-icon">
                    <Zap size={24} />
                  </div>
                  <div className="story-text">
                    <h4>What I Do</h4>
                    <p>
                      I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js) and love working on both
                      frontend and backend development. I'm always eager to learn new technologies and take on
                      challenging projects that push my skills to the next level.
                    </p>
                  </div>
                </div>

                <div className="story-item">
                  <div className="story-icon">
                    <Target size={24} />
                  </div>
                  <div className="story-text">
                    <h4>Beyond Coding</h4>
                    <p>
                      When I'm not coding, you can find me exploring new technologies, designing interactive user interfaces, or learning about advanced system design. I believe in continuous learning and staying updated with the latest industry trends.
                    </p>
                  </div>
                </div>
              </div>

              <div className="interests-section">
                <h4>
                  <Heart className="interests-icon" size={16} />
                  What I Love
                </h4>
                <div className="interests-grid">
                  <div className="interest-item">
                    <span className="interest-emoji">Full-Stack Development</span>
                  </div>
                  <div className="interest-item">
                    <span className="interest-emoji">Web Technologies</span>
                  </div>
                  <div className="interest-item">
                    <span className="interest-emoji">Problem Solving</span>
                  </div>
                  <div className="interest-item">
                    <span className="interest-emoji">Continuous Learning</span>
                  </div>
                  <div className="interest-item">
                    <span className="interest-emoji">Team Collaboration</span>
                  </div>
                  <div className="interest-item">
                    <span className="interest-emoji">UI/UX Design</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-stats">
            <div className="stats-header">
              <h3>
                <BarChart3 className="stats-icon" size={24} />
                My Journey in Numbers
              </h3>
              <p>Here's a quick overview of my development journey</p>
            </div>

            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon-wrapper">
                  <Zap className="stat-icon" size={32} />
                </div>
                <div className="stat-content">
                  <div className="stat-number">10+</div>
                  <div className="stat-label">Projects Completed</div>
                  <div className="stat-description">From simple websites to complex web applications</div>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon-wrapper">
                  <User className="stat-icon" size={32} />
                </div>
                <div className="stat-content">
                  <div className="stat-number">1+</div>
                  <div className="stat-label">Years Experience</div>
                  <div className="stat-description">Hands-on development and learning experience</div>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon-wrapper">
                  <Target className="stat-icon" size={32} />
                </div>
                <div className="stat-content">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Technologies</div>
                  <div className="stat-description">Frontend, backend, and development tools</div>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon-wrapper">
                  <Heart className="stat-icon" size={32} />
                </div>
                <div className="stat-content">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Dedication</div>
                  <div className="stat-description">Committed to delivering quality solutions</div>
                </div>
              </div>
            </div>

            <div className="achievements-section">
              <h4>
                <Award className="achievements-icon" size={16} />
                Key Achievements
              </h4>
              <div className="achievements-list">
                <div className="achievement-item">
                  <div className="achievement-icon">
                    <Zap size={16} />
                  </div>
                  <div className="achievement-text">
                    <strong>MERN Developer at FlyAnyTrip</strong>
                    <span>Full-Time Role (previously Intern)</span>
                  </div>
                </div>
                <div className="achievement-item">
                  <div className="achievement-icon">
                    <Zap size={16} />
                  </div>
                  <div className="achievement-text">
                    <strong>MERN Stack Mastery</strong>
                    <span>Proficient in full-stack development</span>
                  </div>
                </div>
                <div className="achievement-item">
                  <div className="achievement-icon">
                    <Zap size={16} />
                  </div>
                  <div className="achievement-text">
                    <strong>Multiple Projects Deployed</strong>
                    <span>Live applications with real users</span>
                  </div>
                </div>
                <div className="achievement-item">
                  <div className="achievement-icon">
                    <Zap size={16} />
                  </div>
                  <div className="achievement-text">
                    <strong>Continuous Learning</strong>
                    <span>Always exploring new technologies</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
