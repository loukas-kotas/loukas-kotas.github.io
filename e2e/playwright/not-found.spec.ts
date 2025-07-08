import { test, expect } from '@playwright/test';

test('should redirect to main page on 404 route', async ({ page }) => {
  await page.goto('http://localhost:4202/non-existent-route');
  await expect(page.locator('h3', { hasText: 'About' })).toBeVisible();
}); 