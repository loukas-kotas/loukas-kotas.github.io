import { test, expect } from '@playwright/test';

test('should navigate to About section and display content', async ({ page }) => {
  await page.goto('http://localhost:4202');
  await expect(page.locator('h3', { hasText: 'About' })).toBeVisible();
  await expect(page.locator('.about-paragraph').first()).toBeVisible();
});

test('should display Skills section and donut charts', async ({ page }) => {
  await page.goto('http://localhost:4202');
  await page.locator('h3', { hasText: 'Skills' }).scrollIntoViewIfNeeded();
  await expect(page.locator('h3', { hasText: 'Skills' })).toBeVisible();
  await expect(page.locator('.donut-chart')).toHaveCount(5);
  await expect(page.locator('.donut-chart').first()).toBeVisible();
});

test('should display Experience section', async ({ page }) => {
  await page.goto('http://localhost:4202');
  await page.locator('h3', { hasText: 'Experience' }).scrollIntoViewIfNeeded();
  await expect(page.locator('h3', { hasText: 'Experience' })).toBeVisible();
}); 