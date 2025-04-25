// tests/e2e/e2eTests.test.js
const { test, expect } = require('@playwright/test');

// Run tests only on Chrome
test.describe('React App E2E Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    // Navigate to the home page before each test
    await page.goto('http://localhost:3000');
  });

  test('should load homepage successfully', async ({ page }) => {
    // Check that the page title includes "Stav Matityahu"
    await expect(page).toHaveTitle(/Stav Matityahu/);
    
    // Check that the header contains the name
    const headerHeading = page.locator('header h1');
    await expect(headerHeading).toBeVisible();
    await expect(headerHeading).toHaveText('Stav Matityahu');
  });

  test('should have navigation links', async ({ page }) => {
    // Check for navigation links using specific selectors
    const aboutLink = page.locator('nav a[href="#about"]');
    const skillsLink = page.locator('nav a[href="#skills"]');
    const experienceLink = page.locator('nav a[href="#experience"]');
    const educationLink = page.locator('nav a[href="#education"]');
    const languagesLink = page.locator('nav a[href="#languages"]');
    
    await expect(aboutLink).toBeVisible();
    await expect(skillsLink).toBeVisible();
    await expect(experienceLink).toBeVisible();
    await expect(educationLink).toBeVisible();
    await expect(languagesLink).toBeVisible();
    
    // Contact link should not exist
    const contactLink = page.locator('nav a[href="#contact"]');
    await expect(contactLink).not.toBeVisible();
  });

  test('should show about section', async ({ page }) => {
    // Check the about section is visible
    const aboutSection = page.locator('#about');
    await expect(aboutSection).toBeVisible();
    
    // Check profile image is visible
    const profileImage = page.locator('#about .profile-image');
    await expect(profileImage).toBeVisible();
  });

  test('should show skills section', async ({ page }) => {
    // Check the skills section is visible
    const skillsSection = page.locator('#skills');
    await expect(skillsSection).toBeVisible();
    
    // Check for specific DevOps skills using more specific selectors
    await expect(page.locator('#skills .skill-cards:has-text("Jenkins")').first()).toBeVisible();
    await expect(page.locator('#skills .skill-cards:has-text("Docker")').first()).toBeVisible();
    await expect(page.locator('#skills .skill-cards:has-text("Kubernetes")').first()).toBeVisible();
    
    // Check for programming languages
    await expect(page.locator('#skills .skill-cards:has-text("Python")').first()).toBeVisible();
    await expect(page.locator('#skills .skill-cards:has-text("Java")').first()).toBeVisible();
    await expect(page.locator('#skills .skill-cards:has-text("SQL")').first()).toBeVisible();
  });

  test('should show experience section with logos', async ({ page }) => {
    // Check the experience section is visible
    const experienceSection = page.locator('#experience');
    await expect(experienceSection).toBeVisible();
    
    const experienceTitle = page.locator('#experience .section-title');
    await expect(experienceTitle).toBeVisible();
    await expect(experienceTitle).toHaveText('Experience');
    
    // Check for company logos and links
    const cybergymLogo = page.locator('img[alt="CybergymIEC Logo"]');
    await expect(cybergymLogo).toBeVisible();
    
    const idfLogo = page.locator('img[alt="IDF Logo"]');
    await expect(idfLogo).toBeVisible();
    
    // Check for organization links
    const cybergymLink = page.locator('#experience a[href="https://www.cybergymiec.com/"]');
    await expect(cybergymLink).toBeVisible();
    await expect(cybergymLink).toHaveText('CybergymIEC');
    
    const idfLink = page.locator('#experience a[href="https://www.idf.il/"]');
    await expect(idfLink).toBeVisible();
    await expect(idfLink).toHaveText('Israel Defense Forces (IDF)');
  });

  test('should show education with bachelor degree', async ({ page }) => {
    // Check the education section is visible
    const educationSection = page.locator('#education');
    await expect(educationSection).toBeVisible();
    
    // Check for education content
    const bscText = page.locator('#education:has-text("B.Sc in Computer Science (2024)")');
    await expect(bscText).toBeVisible();
  });
  
  test('should show Heroes for Life in volunteer section', async ({ page }) => {
    // Check for Heroes for Life volunteer organization
    const heroesHeading = page.locator('.resume-item-title:has-text("Heroes for Life")');
    await expect(heroesHeading).toBeVisible();
    
    // Check for link to organization
    const heroesLink = page.locator('#education a[href="https://hfl.org.il/en/"]');
    await expect(heroesLink).toBeVisible();
    await expect(heroesLink).toHaveText('Heroes for Life');
  });

  test('should have footer with copyright', async ({ page }) => {
    // Check for footer with copyright information
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
    await expect(footer).toContainText('All Rights Reserved');
  });

  test('should be responsive', async ({ page }) => {
    // Test responsive design by resizing to mobile dimensions
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Check that key elements are still visible
    const header = page.locator('header');
    const aboutSection = page.locator('#about');
    
    await expect(header).toBeVisible();
    await expect(aboutSection).toBeVisible();
    
    // Return to desktop size
    await page.setViewportSize({ width: 1280, height: 720 });
  });
});