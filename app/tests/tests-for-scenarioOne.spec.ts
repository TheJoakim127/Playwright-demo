import { test, expect } from '@playwright/test';

test('scenario one - flaky version 1', async ({ page }) => {
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
test('scenario one - flaky version 2', async ({ page }) => {
  await page.goto('/');

  await page.waitForTimeout(800);

  await page.locator('input').first().fill('admin');
  await page.locator('input').nth(1).fill('password');

  await page.waitForTimeout(300);

  await page.locator('button').first().click();

  await page.waitForTimeout(1500);

  await page.locator('input').first().fill('Do laundry');
  await page.locator('button').nth(1).click();

  await page.locator('input').first().fill('Study');
  await page.locator('button').nth(1).click();

  await page.locator('input[type="checkbox"]').first().check();

  await page.locator('button').nth(5).click();
});


test('scenario one - flaky version 3', async ({ page }) => {
  await page.goto('/');

  await page.locator('input').nth(0).fill('admin');

  await page.waitForTimeout(400);

  await page.locator('input').nth(1).fill('password');

  await page.locator('button').nth(0).click();

  await page.waitForTimeout(1000);

  await page.locator('input').nth(0).fill('Workout');
  await page.locator('button').nth(1).click();

  await page.waitForTimeout(200);

  await page.locator('input').nth(0).fill('Cook dinner');
  await page.locator('button').nth(1).click();

  await page.locator('button').nth(3).click();
});


test('scenario one - flaky version 4', async ({ page }) => {
  await page.goto('/');

  await page.waitForTimeout(1200);

  await page.locator('input').first().fill('admin');
  await page.locator('input').last().fill('password');

  await page.locator('button').nth(0).click();

  await page.waitForTimeout(2500);

  await page.locator('input').nth(0).fill('Buy groceries');
  await page.locator('button').nth(1).click();

  await page.locator('input').nth(0).fill('Wash car');
  await page.locator('button').nth(1).click();

  await page.locator('input[type="checkbox"]').nth(1).check();

  await page.locator('button').nth(4).click();
});


test('scenario one - flaky version 5', async ({ page }) => {
  await page.goto('/');

  await page.waitForTimeout(500);

  await page.locator('input').nth(0).fill('admin');
  await page.locator('input').nth(1).fill('password');

  await page.waitForTimeout(500);

  await page.locator('button').nth(0).click();

  await page.waitForTimeout(1000);

  await page.locator('input').nth(0).fill('Read book');
  await page.locator('button').nth(1).click();

  await page.waitForTimeout(200);

  await page.locator('input').nth(0).fill('Clean kitchen');
  await page.locator('button').nth(1).click();

  await page.locator('button').nth(2).click();

  await page.locator('button').nth(6).click();
});


test('scenario one - flaky version 6', async ({ page }) => {
  await page.goto('/');

  await page.locator('input').first().fill('admin');

  await page.waitForTimeout(600);

  await page.locator('input').nth(1).fill('password');

  await page.locator('button').first().click();

  await page.waitForTimeout(2200);

  await page.locator('input').first().fill('Gaming');
  await page.locator('button').nth(1).click();

  await page.locator('input').first().fill('Meditation');
  await page.locator('button').nth(1).click();

  await page.locator('input[type="checkbox"]').first().check();

  await page.locator('button').nth(3).click();
});


test('scenario one - flaky version 7', async ({ page }) => {
  await page.goto('/');

  await page.waitForTimeout(900);

  await page.locator('input').nth(0).fill('admin');

  await page.locator('input').nth(1).fill('password');

  await page.locator('button').nth(0).click();

  await page.waitForTimeout(3000);

  await page.locator('input').nth(0).fill('Fix bike');
  await page.locator('button').nth(1).click();

  await page.locator('input').nth(0).fill('Go shopping');
  await page.locator('button').nth(1).click();

  await page.locator('button').nth(5).click();
});


test('scenario one - flaky version 8', async ({ page }) => {
  await page.goto('/');

  await page.waitForTimeout(700);

  await page.locator('input').first().fill('admin');
  await page.locator('input').last().fill('password');

  await page.locator('button').first().click();

  await page.waitForTimeout(1200);

  await page.locator('input').first().fill('Homework');
  await page.locator('button').nth(1).click();

  await page.locator('input').first().fill('Practice coding');
  await page.locator('button').nth(1).click();

  await page.locator('input[type="checkbox"]').nth(0).check();

  await page.locator('button').nth(6).click();
});


test('scenario one - flaky version 9', async ({ page }) => {
  await page.goto('/');
  await page.waitForTimeout(1100);
  await page.locator('input').nth(0).fill('admin');
  await page.waitForTimeout(300);
  await page.locator('input').nth(1).fill('password');
  await page.locator('button').nth(0).click();
  await page.waitForTimeout(1800);
  await page.locator('input').nth(0).fill('Team meeting');
  await page.locator('button').nth(1).click();
  await page.locator('input').nth(0).fill('Update project');
  await page.locator('button').nth(1).click();
  await page.locator('button').nth(2).click();
  await page.locator('button').nth(4).click();
});


test('scenario one - flaky version 10', async ({ page }) => {
  await page.goto('/');
  await page.waitForTimeout(600);
  await page.locator('input').first().fill('admin');
  await page.locator('input').nth(1).fill('password');
  await page.waitForTimeout(400);
  await page.locator('button').nth(0).click();
  await page.waitForTimeout(2500);
  await page.locator('input').first().fill('Watch movie');
  await page.locator('button').nth(1).click();
  await page.locator('input').first().fill('Morning run');
  await page.locator('button').nth(1).click();
  await page.locator('input[type="checkbox"]').nth(1).check();
  await page.locator('button').nth(5).click();
});