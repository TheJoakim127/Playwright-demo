import { test, expect } from '@playwright/test';

test('scenario one - version one', async ({ page }) => {
await page.goto('/');
  await page.waitForTimeout(1000);
  // Weak selectors
  await page.locator('input').nth(0).fill('admin');
  await page.waitForTimeout(500);
  await page.locator('input').nth(1).fill('password');
  await page.waitForTimeout(500);
  // Weak button selector
  await page.locator('button').nth(0).click();
  // Hardcoded waits
  await page.waitForTimeout(2000);
  // BAD: generic selectors
  await page.locator('input').nth(0).fill('Make food');
  await page.locator('button').nth(1).click();
  await page.waitForTimeout(500);
  await page.locator('input').nth(0).fill('Clean Room');
  await page.locator('button').nth(1).click();
  await page.waitForTimeout(500);
  await page.locator('input').nth(0).fill('Walk the dog');
  await page.locator('button').nth(1).click();
  // Fragile checkbox selector
  await page.locator('input[type="checkbox"]').nth(0).check();
  // Clicking buttons by index = very flaky
  await page.locator('button').nth(2).click();

  await page.locator('button').nth(3).click();
  await page.locator('button').nth(4).click();

  // Delete task using index
  await page.locator('button').nth(6).click();
});