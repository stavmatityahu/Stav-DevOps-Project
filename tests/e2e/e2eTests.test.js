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
    // Check for navigation links
    const aboutLink = page.locator('a[href="#about"]');
    const skillsLink = page.locator('a[href="#skills"]');
    const contactLink = page.locator('a[href="#contact"]');
    
    await expect(aboutLink).toBeVisible();
    await expect(skillsLink).toBeVisible();
    await expect(contactLink).toBeVisible();
  });

  test('should show about section', async ({ page }) => {
    // Check the about section is visible
    const aboutSection = page.locator('#about');
    await expect(aboutSection).toBeVisible();
    
    // Check profile image is visible
    const profileImage = page.locator('.profile-image');
    await expect(profileImage).toBeVisible();
  });

  test('should show skills section', async ({ page }) => {
    // Check the skills section is visible
    const skillsSection = page.locator('#skills');
    await expect(skillsSection).toBeVisible();
    
    // Check for specific DevOps skills
    await expect(page.locator('text=Jenkins')).toBeVisible();
    await expect(page.locator('text=Docker')).toBeVisible();
    await expect(page.locator('text=Kubernetes')).toBeVisible();
    
    // Check for programming languages
    await expect(page.locator('text=Python')).toBeVisible();
    await expect(page.locator('text=Java')).toBeVisible();
    await expect(page.locator('text=SQL')).toBeVisible();
  });

  test('should show experience section', async ({ page }) => {
    // Check the experience section is visible
    const experienceSection = page.locator('#experience');
    await expect(experienceSection).toBeVisible();
    
    // Check for specific experience content
    await expect(page.locator('text=CybergymIEC')).toBeVisible();
    await expect(page.locator('text=Military Service')).toBeVisible();
  });

  test('should show education section', async ({ page }) => {
    // Check the education section is visible
    const educationSection = page.locator('#education');
    await expect(educationSection).toBeVisible();
    
    // Check for education content
    await expect(page.locator('text=B.Sc in Computer Science')).toBeVisible();
  });

  test('should have contact section with links', async ({ page }) => {
    // Check the contact section is visible
    const contactSection = page.locator('#contact');
    await expect(contactSection).toBeVisible();
    
    // Check for LinkedIn link
    const linkedinLink = page.locator('a:text("LinkedIn")');
    await expect(linkedinLink).toBeVisible();
    
    // Check for GitHub link
    const githubLink = page.locator('a:text("GitHub")');
    await expect(githubLink).toBeVisible();
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