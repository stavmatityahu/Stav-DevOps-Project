import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../src/App';
import Home from '../../src/pages/Home';

// Mock the image imports
jest.mock('../../src/assets/profile.png', () => 'profile.png');
jest.mock('../../src/assets/jenkins.png', () => 'jenkins.png');
jest.mock('../../src/assets/ansible.png', () => 'ansible.png');
jest.mock('../../src/assets/docker.png', () => 'docker.png');
jest.mock('../../src/assets/kubernetes.png', () => 'kubernetes.png');

describe('App Component', () => {
  test('renders app header with correct title', () => {
    render(<App />);
    const headerElement = screen.getByText('Stav Matityahu');
    expect(headerElement).toBeInTheDocument();
    
    const subtitleElement = screen.getByText('DevOps & Software Engineer');
    expect(subtitleElement).toBeInTheDocument();
  });
  
  test('renders navigation links', () => {
    render(<App />);
    
    const aboutLink = screen.getByText('About');
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).toHaveAttribute('href', '#about');
    
    const skillsLink = screen.getByText('Skills');
    expect(skillsLink).toBeInTheDocument();
    expect(skillsLink).toHaveAttribute('href', '#skills');
    
    const experienceLink = screen.getByText('Experience');
    expect(experienceLink).toBeInTheDocument();
    expect(experienceLink).toHaveAttribute('href', '#experience');
    
    const educationLink = screen.getByText('Education');
    expect(educationLink).toBeInTheDocument();
    expect(educationLink).toHaveAttribute('href', '#education');
    
    const contactLink = screen.getByText('Contact');
    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveAttribute('href', '#contact');
  });
  
  test('renders footer with copyright', () => {
    render(<App />);
    
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toBeInTheDocument();
    expect(footerElement).toHaveClass('App-footer');
    
    const currentYear = new Date().getFullYear().toString();
    expect(footerElement).toHaveTextContent(currentYear);
    expect(footerElement).toHaveTextContent('All Rights Reserved');
  });
});

describe('Home Component', () => {
  test('renders about section with profile image', () => {
    render(<Home />);
    
    const aboutSection = document.getElementById('about');
    expect(aboutSection).toBeInTheDocument();
    
    const aboutTitle = screen.getByText('About Me');
    expect(aboutTitle).toBeInTheDocument();
  });
  
  test('renders skills section with DevOps tools', () => {
    render(<Home />);
    
    const skillsSection = document.getElementById('skills');
    expect(skillsSection).toBeInTheDocument();
    
    const devOpsTitle = screen.getByText('DevOps Tools');
    expect(devOpsTitle).toBeInTheDocument();
    
    // Check for specific DevOps tools
    expect(screen.getByText('Jenkins')).toBeInTheDocument();
    expect(screen.getByText('Docker')).toBeInTheDocument();
    expect(screen.getByText('Kubernetes')).toBeInTheDocument();
    expect(screen.getByText('Ansible')).toBeInTheDocument();
    expect(screen.getByText('AWS')).toBeInTheDocument();
  });
  
  test('renders skills section with programming languages', () => {
    render(<Home />);
    
    const programmingTitle = screen.getByText('Programming Languages');
    expect(programmingTitle).toBeInTheDocument();
    
    // Check for specific programming languages
    expect(screen.getByText('Python')).toBeInTheDocument();
    expect(screen.getByText('Java')).toBeInTheDocument();
    expect(screen.getByText('SQL')).toBeInTheDocument();
  });
  
  test('renders experience section', () => {
    render(<Home />);
    
    const experienceSection = document.getElementById('experience');
    expect(experienceSection).toBeInTheDocument();
    
    const experienceTitle = screen.getByText('Experience');
    expect(experienceTitle).toBeInTheDocument();
    
    expect(screen.getByText(/CybergymIEC/)).toBeInTheDocument();
    expect(screen.getByText(/Military Service/)).toBeInTheDocument();
  });
  
  test('renders education section', () => {
    render(<Home />);
    
    const educationSection = document.getElementById('education');
    expect(educationSection).toBeInTheDocument();
    
    const educationTitle = screen.getByText('Education & Projects');
    expect(educationTitle).toBeInTheDocument();
    
    expect(screen.getByText(/B.Sc in Computer Science/)).toBeInTheDocument();
  });
  
  test('renders contact section with links', () => {
    render(<Home />);
    
    const contactSection = document.getElementById('contact');
    expect(contactSection).toBeInTheDocument();
    
    const contactTitle = screen.getByText('Contact Me');
    expect(contactTitle).toBeInTheDocument();
    
    // Check for contact links
    const linkedInLink = screen.getAllByText('LinkedIn')[0];
    expect(linkedInLink).toBeInTheDocument();
    expect(linkedInLink.closest('a')).toHaveAttribute('href', 'https://www.linkedin.com/in/stavmatityahu/');
    
    const githubLink = screen.getAllByText('GitHub')[0];
    expect(githubLink).toBeInTheDocument();
    expect(githubLink.closest('a')).toHaveAttribute('href', 'https://github.com/stavmatityhau');
  });
});