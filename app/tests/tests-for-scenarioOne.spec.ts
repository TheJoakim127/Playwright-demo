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

test('scenario one - version two', async ({ page }) => {
  await page.goto('/');

  // Login
  await page.getByRole('textbox', {
    name: 'Username'
  }).fill('admin');
  await page.getByRole('textbox', {
    name: 'Password'
  }).fill('password');
  await page.getByRole('button', {
    name: 'Login'
  }).click();
  // Verify logged in
  await expect(
    page.getByText('Your Tasks')
  ).toBeVisible();
  // Add "Make food"
  await page.getByRole('textbox', {
    name: 'Add new task...'
  }).fill('Make food');
  await page.getByRole('button', {
    name: 'Add'
  }).click();
  // Verify task added
  await expect(
    page.getByText('Make food')
  ).toBeVisible();
  // Add "Clean Room"
  await page.getByRole('textbox', {
    name: 'Add new task...'
  }).fill('Clean Room');
  await page.getByRole('button', {
    name: 'Add'
  }).click();
  // Verify task added
  await expect(
    page.getByText('Clean Room')
  ).toBeVisible();
  // Add "Walk the dog"
  await page.getByRole('textbox', {
    name: 'Add new task...'
  }).fill('Walk the dog');
  await page.getByRole('button', {
    name: 'Add'
  }).click();
  // Verify task added
  await expect(
    page.getByText('Walk the dog')
  ).toBeVisible();
  // Check "Make food" checkbox
  await page
    .getByRole('listitem')
    .filter({ hasText: 'Make food' })
    .getByRole('checkbox')
    .check();
  // Verify checkbox checked
  await expect(
    page
      .getByRole('listitem')
      .filter({ hasText: 'Make food' })
      .getByRole('checkbox')
  ).toBeChecked();
  // Delete "Clean Room"
  const cleanRoomTask = page
    .getByRole('listitem')
    .filter({ hasText: 'Clean Room' });
  await expect(cleanRoomTask).toBeVisible();
  await cleanRoomTask
    .getByRole('button', {
      name: 'Delete'
    })
    .click();
  // Verify deleted
  await expect(
    page.getByText('Clean Room')
  ).not.toBeVisible();
});