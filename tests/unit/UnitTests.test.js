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
jest.mock('../../src/assets/aws.png', () => 'aws.png');
jest.mock('../../src/assets/git.png', () => 'git.png');
jest.mock('../../src/assets/jira.png', () => 'jira.png');
jest.mock('../../src/assets/python.png', () => 'python.png');
jest.mock('../../src/assets/java.png', () => 'java.png');
jest.mock('../../src/assets/js.png', () => 'js.png');
jest.mock('../../src/assets/sql.png', () => 'sql.png');
jest.mock('../../src/assets/linux.png', () => 'linux.png');
jest.mock('../../src/assets/heroes.png', () => 'heroes.png');
jest.mock('../../src/assets/idf.png', () => 'idf.png');
jest.mock('../../src/assets/cybergym.png', () => 'cybergym.png');

describe('App Component', () => {
  test('renders app header with correct title', () => {
    render(<App />);
    // Using role to get the specific header element
    const headerElement = screen.getByRole('heading', { name: 'Stav Matityahu', level: 1 });
    expect(headerElement).toBeInTheDocument();
    
    // Use a more specific selector for the subtitle
    const subtitleElement = screen.getByRole('heading', { name: 'DevOps & Software Engineer', level: 2 });
    expect(subtitleElement).toBeInTheDocument();
  });
  
  test('renders navigation links', () => {
    render(<App />);
    
    // Test each navigation link individually using the most specific selectors
    const navLinks = screen.getAllByRole('link');
    
    // Find specific links by their href attribute
    const aboutLink = navLinks.find(link => link.getAttribute('href') === '#about');
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).toHaveTextContent('About');
    
    const skillsLink = navLinks.find(link => link.getAttribute('href') === '#skills');
    expect(skillsLink).toBeInTheDocument();
    expect(skillsLink).toHaveTextContent('Skills');
    
    const experienceLink = navLinks.find(link => link.getAttribute('href') === '#experience');
    expect(experienceLink).toBeInTheDocument();
    expect(experienceLink).toHaveTextContent('Experience');
    
    const educationLink = navLinks.find(link => link.getAttribute('href') === '#education');
    expect(educationLink).toBeInTheDocument();
    expect(educationLink).toHaveTextContent('Education');
    
    const languagesLink = navLinks.find(link => link.getAttribute('href') === '#languages');
    expect(languagesLink).toBeInTheDocument();
    expect(languagesLink).toHaveTextContent('Languages');
    
    // Contact link should not exist
    const contactLink = navLinks.find(link => link.getAttribute('href') === '#contact');
    expect(contactLink).toBeUndefined();
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
    
    const aboutTitle = screen.getByRole('heading', { name: 'About Me' });
    expect(aboutTitle).toBeInTheDocument();
    
    // Check for profile image
    const profileImg = screen.getByAltText('Stav Matityahu');
    expect(profileImg).toBeInTheDocument();
  });
  
  test('renders skills section with DevOps tools', () => {
    render(<Home />);
    
    const skillsSection = document.getElementById('skills');
    expect(skillsSection).toBeInTheDocument();
    
    const devOpsTitle = screen.getByRole('heading', { name: 'DevOps Tools' });
    expect(devOpsTitle).toBeInTheDocument();
    
    // Check for specific DevOps tools within the skill cards
    const skillCards = document.querySelectorAll('.skill-card');
    const devOpsTools = Array.from(skillCards).map(card => card.textContent);
    
    expect(devOpsTools).toContain('Jenkins');
    expect(devOpsTools).toContain('Docker');
    expect(devOpsTools).toContain('Kubernetes');
    expect(devOpsTools).toContain('Ansible');
    expect(devOpsTools).toContain('AWS');
  });
  
  test('renders skills section with programming languages', () => {
    render(<Home />);
    
    const programmingTitle = screen.getByRole('heading', { name: 'Programming Languages' });
    expect(programmingTitle).toBeInTheDocument();
    
    // Check for specific programming languages within the skill cards
    const skillCards = document.querySelectorAll('.skill-card');
    const programmingLanguages = Array.from(skillCards).map(card => card.textContent);
    
    expect(programmingLanguages).toContain('Python');
    expect(programmingLanguages).toContain('Java');
    expect(programmingLanguages).toContain('SQL');
  });
  
  test('renders experience section', () => {
    render(<Home />);
    
    const experienceSection = document.getElementById('experience');
    expect(experienceSection).toBeInTheDocument();
    
    const experienceTitle = screen.getByRole('heading', { name: 'Experience', level: 2 });
    expect(experienceTitle).toBeInTheDocument();
    
    // Check for specific organization names
    const cybergymText = screen.getByText(/CybergymIEC/);
    expect(cybergymText).toBeInTheDocument();
    
    const idfText = screen.getByText(/Israel Defense Forces/);
    expect(idfText).toBeInTheDocument();
  });
  
  test('renders education section with bachelor degree', () => {
    render(<Home />);
    
    const educationSection = document.getElementById('education');
    expect(educationSection).toBeInTheDocument();
    
    const educationTitle = screen.getByRole('heading', { name: 'Education & Volunteer Work', level: 2 });
    expect(educationTitle).toBeInTheDocument();
    
    // Check for bachelor degree text
    const bscText = screen.getByText('B.Sc in Computer Science (2024)');
    expect(bscText).toBeInTheDocument();
  });
  
  test('renders volunteer section with Heroes for Life', () => {
    render(<Home />);
    
    // Find the volunteer work heading
    const volunteerTitle = screen.getByRole('heading', { name: 'Volunteer Work' });
    expect(volunteerTitle).toBeInTheDocument();
    
    // Find the Heroes for Life link specifically
    const heroesLinks = screen.getAllByRole('link');
    const heroesLink = heroesLinks.find(link => link.getAttribute('href') === 'https://hfl.org.il/en/');
    expect(heroesLink).toBeInTheDocument();
    expect(heroesLink).toHaveTextContent('Heroes for Life');
    
    // Check the description text is present
    const description = screen.getByText(/teaching math in Buenos Aires/);
    expect(description).toBeInTheDocument();
  });
  
  test('renders languages section', () => {
    render(<Home />);
    
    const languagesSection = document.getElementById('languages');
    expect(languagesSection).toBeInTheDocument();
    
    const hebrewHeading = screen.getByRole('heading', { name: 'Hebrew' });
    expect(hebrewHeading).toBeInTheDocument();
    
    const englishHeading = screen.getByRole('heading', { name: 'English' });
    expect(englishHeading).toBeInTheDocument();
    
    const nativeText = screen.getByText('Native');
    expect(nativeText).toBeInTheDocument();
    
    const fluentText = screen.getByText('Fluent');
    expect(fluentText).toBeInTheDocument();
  });
  
  test('does not render contact section separately', () => {
    render(<Home />);
    
    const contactSection = document.getElementById('contact');
    expect(contactSection).not.toBeInTheDocument();
  });
});