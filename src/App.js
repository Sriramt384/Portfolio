import React, { useState, useEffect } from 'react';
import { ChevronUp, Menu, X, Linkedin, Mail, Phone, ArrowRight, Award, Briefcase, Code, FileText, BookOpen } from 'lucide-react';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = window.scrollY / totalScroll;
      setScrollProgress(currentProgress);
      setShowScrollTop(window.scrollY > 300);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'achievements', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setMenuOpen(false);
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Personal Info
  const personalInfo = {
    name: "Sriram Arasu T",
    title: "Student | Electrical and Electronics Engineering",
    college: "Sri Krishna College Of Engineering And Technology, Coimbatore",
    contact: {
      phone: "+91-9943413353",
      email: "sriramt384@gmail.com",
      linkedin: "linkedin.com/in/sriramt384"
    }
  };
  
  // Experience Data
  const experiences = [
    {
      company: "Ibots.in",
      role: "Technical Intern",
      duration: "Dec 2024 - Current",
      location: "Coimbatore, India",
      description: [
        "Worked on industrial and academic projects, leveraging cutting-edge technology in robotics, IoT, and thermal sensing applications",
        "Contributed to projects at the intersection of industry needs and academic research",
        "Gained practical experience in PCB designing, Schematic Designing, developing, and testing advanced technical solutions"
      ]
    },
    {
      company: "Kinpaun Technologies",
      role: "Research And Development Intern",
      duration: "Feb 2024 - June 2024",
      location: "Coimbatore, India",
      description: [
        "Designed a website for monitoring energy parameters of windmills using React JS and IoT device API connection",
        "Prototyped a power efficient windmill using Solidworks and Fusion 360",
        "Implemented advanced design simulations with ANSYS, achieving 25% reduction in prototype testing time and identifying potential failure points"
      ]
    },
    {
      company: "Madras Institute Of Technology",
      role: "Academic Intern",
      duration: "Feb 2024",
      location: "Chennai, India",
      description: [
        "Completed an intensive three-week internship focusing on advanced robotics, Computer vision, and Automation",
        "Developed a prototype that improved assembly line efficiency by 20% and reduced operational costs by 15%"
      ]
    },
    {
      company: "Hindustan Heavy Electricals Private Limited",
      role: "In-Plant Training",
      duration: "July 2024",
      location: "Coimbatore, India",
      description: [
        "Completed an intensive two-week inplant training focusing on designing and assembling Current Transformers",
        "Learned various parameters and factors required for the whole process with experienced employees"
      ]
    }
  ];

  // Project Data
  const projects = [
    {
      title: "Smart Pen and Writing Pad for Children with SLD",
      duration: "August 2024 - September 2024",
      description: "Developed an innovative writing pen and pad for children with Specific Learning Disabilities (SLD) as part of Smart India Hackathon 2024. The pen uses nRF52840 and gyroscope technology for precise air-writing and tactile feedback, while the pad features a Raspberry Pi 5-powered capacitive display with adaptive exercises.",
      technologies: ["Python", "Django", "VGGNet ML", "Tesseract OCR", "Azure Speech Services", "Hardware Integration"]
    },
    {
      title: "Gerontological Care Solutions",
      duration: "September 2024 - December 2024",
      description: "Developed a detachable electric wheelchair module that converts ordinary wheelchairs into electric ones with a simple clip-on mechanism. Engineered an AI-powered device with an onboard camera to monitor elderly movements, detect emergencies, and alert caregivers.",
      technologies: ["Custom PCB Design", "Computer Vision", "IoT", "Voice Interaction", "Object Detection"]
    },
    {
      title: "Flight Dashboard with Optimized Route",
      duration: "June 2024",
      description: "Developed an advanced flight dashboard system that integrates real-time data to optimize flight routes and mitigate risks associated with weather, wind speed, and other environmental factors.",
      technologies: ["React.js", "Python", "Django", "Data Integration", "UI Design"]
    },
    {
      title: "Social Media App",
      duration: "June 2024 - July 2024",
      description: "Developed a social media application using React framework, offering a seamless user experience and intuitive interface to help users connect with like-minded individuals.",
      technologies: ["React JS", "JavaScript", "CSS", "User Experience Design", "API Integration"]
    }
  ];

  // Skills Data
  const skills = {
    programming: ["Java", "Python", "Embedded C", "C++"],
    technical: ["React JS", "HTML5", "CSS", "JavaScript", "Web Development", "UI/UX Design - Figma", "API Integration", "IoT", "PCB Designing", "CAD Modelling", "Microsoft Office"],
    nonTechnical: ["Problem Solving", "Teamwork", "Collaboration", "Critical Thinking"],
    operatingSystems: ["Windows", "Linux"]
  };

  // Certifications
  const certifications = [
    {
      category: "Artificial Intelligence",
      items: ["AI on Jetson Nano - NVIDIA", "Microsoft AI Skill Challenge", "Generative AI Learning Path - Google Cloud", "Introduction to Machine Learning - Kaggle"]
    },
    {
      category: "Programming",
      items: ["Java, SQL, Python, Problem Solving - Hackerrank", "Python Essentials 1 and 2 - Cisco"]
    },
    {
      category: "Technical",
      items: ["Matlab Onramp - Matlab", "Internet Of Things - IBM and Cisco", "AWS Cloud Practitioner - Amazon", "System Infrastructure and IT Infrastructure - Coursera", "Microsoft Power Platform Fundamentals Challenge", "PCB Design - Altium", "CCNA - Cisco"]
    },
    {
      category: "Non-Technical",
      items: ["Soft Skills - NPTEL", "Engineering Ethics - NPTEL"]
    }
  ];

  // Achievements
  const achievements = [
    "Darshan Award, Hackathon Accolade 2025",
    "Darshan Award, Special Achievements Category 2025",
    "Grand Finalist, Smart India Hackathon 2024",
    "Runner Up, VIT Medical Hackathon 2024",
    "Winner, Infosys TechZooka 2024",
    "Winner, SKCET IIC Inter Institution Idea Competition 2024",
    "First Prize, Sustaino Home - Project Ideathon 2024",
    "First Prize, Spark EEE Project Expo 2024",
    "First Prize, Engineer's Day Technical Quiz 2024",
    "Second Prize, Ideathon CSE Symposium 2024",
    "First Prize, Ideathon - ECE Symposium 2024",
    "Winner, Pitch Perfect, Kumaraguru College Of Technology, Coimbatore 2024",
    "Winner, Tech Fued, Kumaraguru College Of Technology, Coimbatore 2024",
    "Winner, Tech Fiesta - Quiz 2024",
    "Darshan Award, Best Hackathon Team, SKCET 2023",
    "Winner, ROS - Remote Robotics Hackathon, IEEE RAS PES University, Bangalore 2023",
    "Jury Choice Award, Atom Symposium - Project Contest Innovation LLP 2023",
    "Second Runner Up, Fliplearn Hackathon 2022",
    "City Level Champion, National Cyber Olympiad 2020",
    "Winner, Capture the Flag Juniors 2019",
    "First Runner Up - National Level, Dell Champs 2019"
  ];

  // Education Data
  const educationData = [
    {
      degree: "B.E. Electrical And Electronics Engineering",
      institution: "Sri Krishna College Of Engineering And Technology",
      grade: "7.8 CGPA (Current)",
      year: "2022-Present"
    },
    {
      degree: "Senior Secondary",
      institution: "The PSBB Millennium School, CBSE Board",
      grade: "75%",
      year: "2022"
    },
    {
      degree: "Secondary",
      institution: "The PSBB Millennium School, CBSE Board",
      grade: "86.6%",
      year: "2020"
    }
  ];

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar ${menuOpen ? 'mobile-open' : ''}`}>
        <div className="logo" onClick={() => scrollToSection('home')}>
        </div>
        
        <div className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
        
        <ul className="nav-links">
          <li className={activeSection === 'home' ? 'active' : ''} onClick={() => scrollToSection('home')}>Home</li>
          <li className={activeSection === 'about' ? 'active' : ''} onClick={() => scrollToSection('about')}>About</li>
          <li className={activeSection === 'experience' ? 'active' : ''} onClick={() => scrollToSection('experience')}>Experience</li>
          <li className={activeSection === 'projects' ? 'active' : ''} onClick={() => scrollToSection('projects')}>Projects</li>
          <li className={activeSection === 'skills' ? 'active' : ''} onClick={() => scrollToSection('skills')}>Skills</li>
          <li className={activeSection === 'achievements' ? 'active' : ''} onClick={() => scrollToSection('achievements')}>Achievements</li>
          <li className={activeSection === 'contact' ? 'active' : ''} onClick={() => scrollToSection('contact')}>Contact</li>
        </ul>
      </nav>
      
      {/* Progress bar */}
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${scrollProgress * 100}%` }}></div>
      </div>
      
      {/* Home section */}
      <section id="home" className="home-section">
        <div className="home-content">
          <div className="home-text">
            <h1 className="animated-text">
              <span className="greeting">Hello, I'm</span>
              <span className="name">{personalInfo.name}</span>
              <span className="title">{personalInfo.title}</span>
            </h1>
            <div className="home-cta">
              <button className="btn primary" onClick={() => scrollToSection('projects')}>
                View Projects <ArrowRight size={16} />
              </button>
              <button className="btn secondary" onClick={() => scrollToSection('contact')}>
                Contact Me <ArrowRight size={16} />
              </button>
            </div>
          </div>
          <div className="home-animation">
            <div className="cube-container">
              <div className="cube">
                <div className="face front"><Code /></div>
                <div className="face back"><Award /></div>
                <div className="face right"><Briefcase /></div>
                <div className="face left"><FileText /></div>
                <div className="face top"><BookOpen /></div>
                <div className="face bottom"><Mail /></div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
          <span>Scroll Down</span>
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </div>
      </section>
      
      {/* About section */}
      <section id="about" className="section">
        <div className="section-content">
          <h2 className="section-title">About Me</h2>
          <div className="about-container">
            <div className="about-text">
              <p>
                I'm an Electrical and Electronics Engineering student at Sri Krishna College of Engineering and Technology, Coimbatore, passionate about innovation and technology. My journey has been focused on developing solutions that make a meaningful impact, from designing accessible tools for children with learning disabilities to creating smart solutions for elderly care.
              </p>
              <p>
                With experience in various technical domains including web development, IoT, robotics, and PCB design, I enjoy tackling complex problems and turning ideas into reality. My approach combines technical expertise with creative thinking to develop innovative solutions.
              </p>
              <p>
                I'm committed to continuous learning and growth, as evidenced by my numerous certifications and active participation in hackathons and technical competitions. I believe in the power of technology to create positive change and am always seeking new challenges and opportunities to expand my skills.
              </p>
            </div>
            <div className="education-container">
              <h3>Education</h3>
              <div className="education-timeline">
                {educationData.map((edu, index) => (
                  <div className="education-item" key={index}>
                    <div className="education-year">{edu.year}</div>
                    <div className="education-content">
                      <h4>{edu.degree}</h4>
                      <p>{edu.institution}</p>
                      <p className="education-grade">{edu.grade}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
{/* Replace your existing Experience section with this */}
<section id="experience" className="section">
  <div className="section-content">
    <h2 className="section-title">Experience</h2>
    <div className="experience-container">
      {experiences.map((exp, index) => (
        <div className="experience-item" key={index}>
          <div className="experience-header">
            <div className="experience-titles">
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
            </div>
            <div className="experience-meta">
              <div>{exp.duration}</div>
              <div>{exp.location}</div>
            </div>
          </div>
          <div className="experience-description">
            <ul>
              {exp.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
      
      {/* Projects section */}
      <section id="projects" className="section">
        <div className="section-content">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="project-duration">{project.duration}</p>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, idx) => (
                      <span className="tech-tag" key={idx}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Skills section */}
      <section id="skills" className="section">
        <div className="section-content">
          <h2 className="section-title">Skills & Certifications</h2>
          <div className="skills-container">
            <div className="skills-left">
              <div className="skill-category">
                <h3>Programming</h3>
                <div className="skill-tags">
                  {skills.programming.map((skill, idx) => (
                    <span className="skill-tag" key={idx}>{skill}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h3>Technical</h3>
                <div className="skill-tags">
                  {skills.technical.map((skill, idx) => (
                    <span className="skill-tag" key={idx}>{skill}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h3>Non-Technical</h3>
                <div className="skill-tags">
                  {skills.nonTechnical.map((skill, idx) => (
                    <span className="skill-tag" key={idx}>{skill}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h3>Operating Systems</h3>
                <div className="skill-tags">
                  {skills.operatingSystems.map((skill, idx) => (
                    <span className="skill-tag" key={idx}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="certifications-right">
              <h3>Certifications</h3>
              <div className="certification-accordion">
                {certifications.map((cert, index) => (
                  <details className="cert-category" key={index}>
                    <summary>{cert.category}</summary>
                    <ul>
                      {cert.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Achievements section */}
      <section id="achievements" className="section">
        <div className="section-content">
          <h2 className="section-title">Achievements</h2>
          <div className="achievements-container">
            <div className="achievement-wall">
              {achievements.map((achievement, index) => (
                <div className="achievement-card" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="achievement-content">
                    <Award size={24} />
                    <p>{achievement}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact section */}
      <section id="contact" className="section">
        <div className="section-content">
          <h2 className="section-title">Contact Me</h2>
          <div className="contact-container">
            <div className="contact-details">
              <div className="contact-item">
                <Phone size={24} />
                <a href={`tel:${personalInfo.contact.phone}`}>{personalInfo.contact.phone}</a>
              </div>
              <div className="contact-item">
                <Mail size={24} />
                <a href={`mailto:${personalInfo.contact.email}`}>{personalInfo.contact.email}</a>
              </div>
              <div className="contact-item">
                <Linkedin size={24} />
                <a href={`https://${personalInfo.contact.linkedin}`} target="_blank" rel="noopener noreferrer">
                  {personalInfo.contact.linkedin}
                </a>
              </div>
            </div>
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Subject" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <div className="footer-social">
            <a href={`https://${personalInfo.contact.linkedin}`} target="_blank" rel="noopener noreferrer">
              <Linkedin size={18} />
            </a>
            <a href={`mailto:${personalInfo.contact.email}`}>
              <Mail size={18} />
            </a>
          </div>
        </div>
      </footer>
      
      {/* Scroll to top button */}
      {showScrollTop && (
        <button className="scroll-top" onClick={scrollToTop}>
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
};

export default App;