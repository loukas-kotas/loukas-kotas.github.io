import { test, expect } from '@playwright/test';

test('should open GitHub link in a new tab', async ({ page, context }) => {
  await page.goto('http://localhost:4202');
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.click('a.github')
  ]);
  await expect(newPage).toHaveURL(/github.com\/loukas-kotas/);
});

test('should open LinkedIn link in a new tab', async ({ page, context }) => {
  await page.goto('http://localhost:4202');
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.click('a.linkedin')
  ]);
  await expect(newPage).toHaveURL(/linkedin.com\/in\/loukaskotas/);
}); 