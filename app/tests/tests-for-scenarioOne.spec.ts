import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('password');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Add new task...' }).click();
  await page.getByRole('textbox', { name: 'Add new task...' }).fill('');
  await page.getByRole('textbox', { name: 'Add new task...' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Add new task...' }).fill('T');
  await page.getByRole('textbox', { name: 'Add new task...' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Add new task...' }).fill('Testing t');
  await page.getByRole('textbox', { name: 'Add new task...' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Add new task...' }).fill('Testing T');
  await page.getByRole('textbox', { name: 'Add new task...' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Add new task...' }).fill('Testing Things');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('checkbox').check();
  await page.getByRole('checkbox').check();
});

test('login test', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('admin')).toBeVisible();
  await expect(page.getByText('password')).toBeVisible();
});
