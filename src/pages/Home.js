import React from 'react';
import profileImage from '../assets/profile.png';
import jenkinsLogo from '../assets/jenkins.png';
import ansibleLogo from '../assets/ansible.png';
import dockerLogo from '../assets/docker.png';
import kubernetesLogo from '../assets/kubernetes.png';

function Home() {
  return (
    <>
      {/* About Section */}
      <section id="about" className="section">
        <div className="profile-container">
          <img src={profileImage} alt="Stav Matityahu" className="profile-image" />
          <h2 className="profile-name">Stav Matityahu</h2>
          <h3 className="profile-title">DevOps & Software Engineer</h3>
          <div className="profile-contact">
            <span>📱 054-6606497</span>
            <span>📧 stav3434@gmail.com</span>
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/stavmatityahu/" target="_blank" rel="noopener noreferrer" className="social-button linkedin">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="https://github.com/stavmatityhau" target="_blank" rel="noopener noreferrer" className="social-button github">
              <i className="fab fa-github"></i> GitHub
            </a>
            <a href="mailto:stav3434@gmail.com" className="social-button email">
              <i className="fas fa-envelope"></i> Email
            </a>
          </div>
        </div>
        
        <h2 className="section-title">About Me</h2>
        <p>
          Motivated Junior Software Developer with hands-on experience in automation, cloud
          infrastructure, and backend development. Skilled in Python, Java, and SQL, with strong
          problem-solving abilities and a solid background in Linux environments. Experienced in
          building and testing reliable systems using tools like Selenium, Ansible, and AWS.
          Passionate about writing clean code, automating tasks, and continuously improving
          system performance.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-container">
          <div className="skill-category">
            <h3>DevOps Tools</h3>
            <div className="skill-cards">
              <div className="skill-card">
                <img src={jenkinsLogo} alt="Jenkins" className="skill-icon" />
                <span>Jenkins</span>
              </div>
              <div className="skill-card">
                <img src={dockerLogo} alt="Docker" className="skill-icon" />
                <span>Docker</span>
              </div>
              <div className="skill-card">
                <img src={kubernetesLogo} alt="Kubernetes" className="skill-icon" />
                <span>Kubernetes</span>
              </div>
              <div className="skill-card">
                <img src={ansibleLogo} alt="Ansible" className="skill-icon" />
                <span>Ansible</span>
              </div>
              <div className="skill-card">
                <span>AWS</span>
              </div>
            </div>
          </div>
          
          <div className="skill-category">
            <h3>Programming Languages</h3>
            <div className="skill-cards">
              <div className="skill-card">
                <span>Python</span>
              </div>
              <div className="skill-card">
                <span>Java</span>
              </div>
              <div className="skill-card">
                <span>SQL</span>
              </div>
              <div className="skill-card">
                <span>JavaScript</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <h2 className="section-title">Experience</h2>
        <div className="resume-item">
          <h3 className="resume-item-title">CybergymIEC | Software Automation Engineer (Internship)</h3>
          <p><strong>2025</strong></p>
          <ul>
            <li>Built a test automation framework using Playwright to support both manual and automated QA processes. Automated multiple test cases with JavaScript, reducing manual testing time.</li>
            <li>Analyzed system requirements and created detailed test plans to ensure full coverage. Used Microsoft Azure to manage and track software defects during the development cycle.</li>
            <li>Presented clear and structured test cases to developers to improve communication and code quality. Performed exploratory and regression testing to find and fix critical issues, helping to deliver stable software releases.</li>
          </ul>
        </div>
        
        <div className="resume-item">
          <h3 className="resume-item-title">Military Service | Combat Fighter</h3>
          <ul>
            <li>Served as a soldier and commander in a combat unit.</li>
            <li>Solved unexpected challenges in real time, improving decision-making and resilience.</li>
            <li>Trained new team members in tactical strategies, focusing on precision and reliability.</li>
          </ul>
        </div>
      </section>

      {/* Education & Projects Section */}
      <section id="education" className="section">
        <h2 className="section-title">Education & Projects</h2>
        <div className="resume-grid">
          <div className="resume-item">
            <h3 className="resume-item-title">Education</h3>
            <p><strong>B.Sc in Computer Science</strong></p>
            <p>Studied Object-Oriented Programming (OOP), algorithms, data structures, and software complexity.</p>
            <p>Gained practical experience with Java, Python, Linux, and SQL through academic projects.</p>
          </div>
          
          <div className="resume-item">
            <h3 className="resume-item-title">DevOps Project</h3>
            <p>Built an AWS infrastructure project using Jenkins, Ansible, automating server setup and deployment processes.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2 className="section-title">Contact Me</h2>
        <div className="profile-container">
          <p>I'm always open to discussing new opportunities and interesting projects!</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/stavmatityahu/" target="_blank" rel="noopener noreferrer" className="social-button linkedin">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="https://github.com/stavmatityhau" target="_blank" rel="noopener noreferrer" className="social-button github">
              <i className="fab fa-github"></i> GitHub
            </a>
            <a href="mailto:stav3434@gmail.com" className="social-button email">
              <i className="fas fa-envelope"></i> Email Me
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;