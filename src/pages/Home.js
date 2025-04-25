import React from 'react';
import profileImage from '../assets/profile.png';
import jenkinsLogo from '../assets/jenkins.png';
import ansibleLogo from '../assets/ansible.png';
import cybergymLogo from '../assets/cybergym.png';
import kubernetesLogo from '../assets/kubernetes.png';
import awsLogo from '../assets/aws.png';
import gitLogo from '../assets/git.png';
import jiraLogo from '../assets/jira.png';
import pythonLogo from '../assets/python.png';
import javaLogo from '../assets/java.png';
import jsLogo from '../assets/js.png';
import sqlLogo from '../assets/sql.png';
import linuxLogo from '../assets/linux.png';
import heroesLogo from '../assets/heroes.png';
import idfLogo from '../assets/idf.png';
import dockerLogo from '../assets/docker.png';

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
          DevOps Engineer with expertise in AWS cloud infrastructure management, Docker, and CI/CD pipelines using Jenkins.
          Proficient in Python and SQL with strong knowledge of Linux environments.
        </p>
        <p>
          Experienced in building test automation frameworks using Playwright and JavaScript to support both manual and automated QA processes.
        </p>
        <p>
          Demonstrates excellent problem-solving abilities, teamwork skills, and a passion for continuous learning in technology.
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
                <img src={awsLogo} alt="AWS" className="skill-icon" style={{width: "35px", height: "35px"}} />
                <span>AWS</span>
              </div>
              <div className="skill-card">
                <img src={ansibleLogo} alt="Ansible" className="skill-icon" style={{width: "35px", height: "35px"}} />
                <span>Ansible</span>
              </div>
              <div className="skill-card">
                <img src={dockerLogo} alt="Docker" className="skill-icon" style={{width: "35px", height: "35px"}} />
                <span>Docker</span>
              </div>
              <div className="skill-card">
                <img src={jenkinsLogo} alt="Jenkins" className="skill-icon" style={{width: "35px", height: "35px"}} />
                <span>Jenkins</span>
              </div>
              <div className="skill-card">
                <img src={gitLogo} alt="Git" className="skill-icon" style={{width: "35px", height: "35px"}} />
                <span>Git</span>
              </div>
              <div className="skill-card">
                <img src={jiraLogo} alt="Jira" className="skill-icon" style={{width: "35px", height: "35px"}} />
                <span>Jira</span>
              </div>
              <div className="skill-card">
                <img src={kubernetesLogo} alt="Kubernetes" className="skill-icon" style={{width: "35px", height: "35px"}} />
                <span>Kubernetes</span>
              </div>
            </div>
          </div>
          
          <div className="skill-category">
            <h3>Programming Languages</h3>
            <div className="skill-cards">
              <div className="skill-card">
                <img src={pythonLogo} alt="Python" className="skill-icon" style={{width: "35px", height: "35px"}} />
                <span>Python</span>
              </div>
              <div className="skill-card">
                <img src={javaLogo} alt="Java" className="skill-icon" style={{width: "35px", height: "35px"}} />
                <span>Java</span>
              </div>
              <div className="skill-card">
                <img src={jsLogo} alt="JavaScript" className="skill-icon" style={{width: "35px", height: "35px"}} />
                <span>JavaScript</span>
              </div>
              <div className="skill-card">
                <img src={sqlLogo} alt="SQL" className="skill-icon" style={{width: "35px", height: "35px"}} />
                <span>SQL</span>
              </div>
            </div>
          </div>
          
          <div className="skill-category">
            <h3>Additional Skills</h3>
            <div className="skill-cards">
              <div className="skill-card">
                <img src={linuxLogo} alt="Linux" className="skill-icon" style={{width: "35px", height: "35px"}} />
                <span>Linux</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <h2 className="section-title">Experience</h2>
        <div className="resume-item">
          <h3 className="resume-item-title">
            <img src={cybergymLogo} alt="CybergymIEC Logo" className="organization-logo" style={{width: "50px", height: "50px", marginRight: "10px"}} />
            <a href="https://www.cybergymiec.com/" target="_blank" rel="noopener noreferrer" style={{fontSize: "1.4rem", textDecoration: "none", color: "#2c3e50"}}>
              CybergymIEC
            </a> | Software Automation Engineer (Internship)
          </h3>
          <p><strong>2025</strong></p>
          <ul>
            <li>Built a test automation framework using Playwright to support both manual and automated QA processes. Automated multiple test cases with JavaScript, reducing manual testing time.</li>
            <li>Analyzed system requirements and created detailed test plans to ensure full coverage. Used Microsoft Azure to manage and track software defects during the development cycle.</li>
            <li>Presented clear and structured test cases to developers to improve communication and code quality. Performed exploratory and regression testing to find and fix critical issues, helping to deliver stable software releases.</li>
          </ul>
        </div>
        
        <div className="resume-item">
          <h3 className="resume-item-title">
            <img src={idfLogo} alt="IDF Logo" className="organization-logo" style={{width: "50px", height: "50px", marginRight: "10px"}} />
            <a href="https://www.idf.il/" target="_blank" rel="noopener noreferrer" style={{fontSize: "1.4rem", textDecoration: "none", color: "#2c3e50"}}>
              Israel Defense Forces (IDF)
            </a> | Combat Fighter
          </h3>
          <ul>
            <li>Served as a soldier and commander in a combat unit.</li>
            <li>Solved unexpected challenges in real time, improving decision-making and resilience.</li>
            <li>Trained new team members in tactical strategies, focusing on precision and reliability.</li>
          </ul>
        </div>
      </section>

      {/* Education & Volunteer Section */}
      <section id="education" className="section">
        <h2 className="section-title">Education & Volunteer Work</h2>
        <div className="resume-grid">
          <div className="resume-item">
            <h3 className="resume-item-title">Education</h3>
            <p><strong>B.Sc in Computer Science (2024)</strong></p>
          </div>
          
          <div className="resume-item">
            <h3 className="resume-item-title">Volunteer Work</h3>
            <div className="volunteer-item">
              <h3 className="resume-item-title">
                <img src={heroesLogo} alt="Heroes for Life" className="organization-logo" style={{width: "50px", height: "50px", marginRight: "10px"}} />
                <a href="https://hfl.org.il/en/" target="_blank" rel="noopener noreferrer" style={{fontSize: "1.4rem", textDecoration: "none", color: "#2c3e50"}}>
                  Heroes for Life
                </a>
              </h3>
              <p>Volunteering in a distressed neighborhood and teaching math in Buenos Aires, Argentina</p>
            </div>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section id="languages" className="section">
        <h2 className="section-title">Languages</h2>
        <div className="languages-container">
          <div className="language-item">
            <h3>Hebrew</h3>
            <p>Native</p>
          </div>
          <div className="language-item">
            <h3>English</h3>
            <p>Fluent</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;