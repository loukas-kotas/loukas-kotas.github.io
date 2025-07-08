import { test, expect } from '@playwright/test';

test('homepage should have title', async ({ page }) => {
  await page.goto('http://localhost:4202');
  await expect(page).toHaveTitle(/loukas kotas/i);
});
