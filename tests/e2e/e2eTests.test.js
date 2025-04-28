// tests/e2e/e2eTests.test.js
const { test, expect } = require('@playwright/test');

// Run tests only on Chrome
test.describe('React App E2E Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    // Navigate to the home page with correct path
    await page.goto('http://localhost:3000/Stav-DevOps-Project/');
    // Wait for the page to fully load
    await page.waitForLoadState('networkidle');
  });

  test('should have correct title and basic content', async ({ page }) => {
    // Check page title
    await expect(page).toHaveTitle(/Stav Matityahu/);
    
    // Check basic content exists using text
    const pageContent = await page.textContent('body');
    expect(pageContent).toContain('Stav Matityahu');
    expect(pageContent).toContain('DevOps');
    expect(pageContent).toContain('Engineer');
  });

  test('should navigate through main sections', async ({ page }) => {
    // Find all navigation links
    const navLinks = await page.$$('nav a');
    expect(navLinks.length).toBeGreaterThan(0);
    
    // Verify About section content is visible
    const hasAboutContent = await page.evaluate(() => {
      return document.body.textContent.includes('About Me');
    });
    expect(hasAboutContent).toBeTruthy();
    
    // Verify Skills section content is visible
    const hasSkillsContent = await page.evaluate(() => {
      return document.body.textContent.includes('Technical Skills');
    });
    expect(hasSkillsContent).toBeTruthy();
    
    // Verify Experience section content is visible  
    const hasExperienceContent = await page.evaluate(() => {
      return document.body.textContent.includes('Experience');
    });
    expect(hasExperienceContent).toBeTruthy();
  });

  test('should display skills section with key technologies', async ({ page }) => {
    // Check for key skills in text content
    const pageText = await page.textContent('body');
    
    // DevOps skills
    expect(pageText).toContain('AWS');
    expect(pageText).toContain('Docker');
    expect(pageText).toContain('Jenkins');
    expect(pageText).toContain('Kubernetes');
    
    // Programming languages
    expect(pageText).toContain('Python');
    expect(pageText).toContain('Java');
    expect(pageText).toContain('JavaScript');
    expect(pageText).toContain('SQL');
  });

  test('should show experience information', async ({ page }) => {
    // Check for organizations and roles in text content
    const pageText = await page.textContent('body');
    
    // Employment info
    expect(pageText).toContain('CybergymIEC');
    expect(pageText).toContain('Software Automation Engineer');
    expect(pageText).toContain('Israel Defense Forces');
    expect(pageText).toContain('Combat Fighter');
  });

  test('should show education and volunteer information', async ({ page }) => {
    // Check for education and volunteer info in text content
    const pageText = await page.textContent('body');
    
    // Education
    expect(pageText).toContain('B.Sc in Computer Science');
    
    // Volunteer work
    expect(pageText).toContain('Heroes for Life');
    expect(pageText).toContain('Buenos Aires');
  });

  test('should show languages section', async ({ page }) => {
    // Check for languages in text content
    const pageText = await page.textContent('body');
    
    expect(pageText).toContain('Hebrew');
    expect(pageText).toContain('English');
  });

  test('should have footer with copyright information', async ({ page }) => {
    // Check for footer text
    const pageText = await page.textContent('body');
    
    expect(pageText).toContain('All Rights Reserved');
    const currentYear = new Date().getFullYear().toString();
    expect(pageText).toContain(currentYear);
  });

  test('should be responsive', async ({ page }) => {
    // Test mobile dimensions
    await page.setViewportSize({ width: 375, height: 667 });
    await page.waitForTimeout(500);
    
    // Check page is still accessible
    const pageTitle = await page.title();
    expect(pageTitle).toContain('Stav Matityahu');
    
    // Test desktop dimensions
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.waitForTimeout(500);
    
    // Check page is still accessible
    const pageTitleDesktop = await page.title();
    expect(pageTitleDesktop).toContain('Stav Matityahu');
  });
});