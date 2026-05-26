import { test, expect } from '@playwright/test';

test('scenario one - Stable version 1', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('textbox', {
    name: 'Username'
  }).fill('admin');
  await page.getByRole('textbox', {
    name: 'Password'
  }).fill('password');
  await page.getByRole('button', {
    name: 'Login'
  }).click();
  await expect(
    page.getByText('Your Tasks')
  ).toBeVisible();
  await page.getByRole('textbox', {
    name: 'Add new task...'
  }).fill('Make food');
  await page.getByRole('button', {
    name: 'Add'
  }).click();
  await expect(
    page.getByText('Make food')
  ).toBeVisible();
  await page.getByRole('textbox', {
    name: 'Add new task...'
  }).fill('Clean Room');
  await page.getByRole('button', {
    name: 'Add'
  }).click();
  await expect(
    page.getByText('Clean Room')
  ).toBeVisible();
  await page.getByRole('textbox', {
    name: 'Add new task...'
  }).fill('Walk the dog');
  await page.getByRole('button', {
    name: 'Add'
  }).click();
  await expect(
    page.getByText('Walk the dog')
  ).toBeVisible();
  await page
    .getByRole('listitem')
    .filter({ hasText: 'Make food' })
    .getByRole('checkbox')
    .check();
  await expect(
    page
      .getByRole('listitem')
      .filter({ hasText: 'Make food' })
      .getByRole('checkbox')
  ).toBeChecked();
  const cleanRoomTask = page
    .getByRole('listitem')
    .filter({ hasText: 'Clean Room' });
  await expect(cleanRoomTask).toBeVisible();
  await cleanRoomTask
    .getByRole('button', {
      name: 'Delete'
    })
    .click();
  await expect(
    page.getByText('Clean Room')
  ).not.toBeVisible();
});

test('scenario one - stable version 2', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('textbox', { name: 'Username' }).fill('admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('password');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Your Tasks')).toBeVisible();
  await page.getByPlaceholder('Add new task...').fill('Study');
  await page.getByRole('button', { name: 'Add' }).click();
  await expect(page.getByText('Study')).toBeVisible();
  await page
    .getByRole('listitem')
    .filter({ hasText: 'Study' })
    .getByRole('checkbox')
    .check();

  await expect(
    page
      .getByRole('listitem')
      .filter({ hasText: 'Study' })
      .getByRole('checkbox')
  ).toBeChecked();
});


test('scenario one - Stable version 3', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('textbox', {
    name: 'Username'
  }).fill('admin');
  await page.getByRole('textbox', {
    name: 'Password'
  }).fill('password');
  await page.getByRole('button', {
    name: 'Login'
  }).click();
  await expect(
    page.getByText('Your Tasks')
  ).toBeVisible();
  await page.getByRole('textbox', {
    name: 'Add new task...'
  }).fill('Make bed');
  await page.getByRole('button', {
    name: 'Add'
  }).click();
  await expect(
    page.getByText('Make bed')
  ).toBeVisible();
  await page.getByRole('textbox', {
    name: 'Add new task...'
  }).fill('Clean desk');
  await page.getByRole('button', {
    name: 'Add'
  }).click();
  await expect(
    page.getByText('Clean desk')
  ).toBeVisible();
  await page.getByRole('textbox', {
    name: 'Add new task...'
  }).fill('Walk the cat');
  await page.getByRole('button', {
    name: 'Add'
  }).click();
  await expect(
    page.getByText('Walk the cat')
  ).toBeVisible();
  await page
    .getByRole('listitem')
    .filter({ hasText: 'Make bed' })
    .getByRole('checkbox')
    .check();
  await expect(
    page
      .getByRole('listitem')
      .filter({ hasText: 'Make bed' })
      .getByRole('checkbox')
  ).toBeChecked();
  const cleanRoomTask = page
    .getByRole('listitem')
    .filter({ hasText: 'Clean desk' });
  await expect(cleanRoomTask).toBeVisible();
  await cleanRoomTask
    .getByRole('button', {
      name: 'Delete'
    })
    .click();
  await expect(
    page.getByText('Clean desk')
  ).not.toBeVisible();
});


test('scenario one - stable version 4', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('textbox', { name: 'Username' }).fill('admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('password');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Your Tasks')).toBeVisible();
  await page.getByPlaceholder('Add new task...').fill('Read book');
  await page.getByRole('button', { name: 'Add' }).click();
  await expect(page.getByText('Read book')).toBeVisible();
  await page.getByRole('button', { name: 'Completed' }).click();
  await page.getByRole('button', { name: 'All' }).click();
  await expect(page.getByText('Read book')).toBeVisible();
});


test('scenario one - stable version 5', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('textbox', { name: 'Username' }).fill('admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('password');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText('Your Tasks')).toBeVisible();

  await page.getByPlaceholder('Add new task...').fill('Have fun');
  await page.getByRole('button', { name: 'Add' }).click();

  await expect(page.getByText('Have fun')).toBeVisible();

  await page
    .getByRole('listitem')
    .filter({ hasText: 'Have fun' })
    .getByRole('checkbox')
    .check();

  await expect(
    page
      .getByRole('listitem')
      .filter({ hasText: 'Have fun' })
      .getByRole('checkbox')
  ).toBeChecked();
});


test('scenario one - stable version 6', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('textbox', { name: 'Username' }).fill('admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('password');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText('Your Tasks')).toBeVisible();

  await page.getByPlaceholder('Add new task...').fill('Go shopping');
  await page.getByRole('button', { name: 'Add' }).click();

  await expect(page.getByText('Go shopping')).toBeVisible();

  const task = page
    .getByRole('listitem')
    .filter({ hasText: 'Go shopping' });

  await expect(task).toBeVisible();

  await task.getByRole('button', { name: 'Delete' }).click();

  await expect(page.getByText('Go shopping')).not.toBeVisible();
});


test('scenario one - stable version 7', async ({ page }) => {
  await page.goto('/');

  await page.getByPlaceholder('Username').fill('admin');
  await page.getByPlaceholder('Password').fill('password');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText('Your Tasks')).toBeVisible();

  await page.getByPlaceholder('Add new task...').fill('Homework');
  await page.getByRole('button', { name: 'Add' }).click();

  await expect(page.getByText('Homework')).toBeVisible();

  await page.getByRole('button', { name: 'Active' }).click();

  await expect(page.getByText('Homework')).toBeVisible();

  await page.getByRole('button', { name: 'All' }).click();
});



test('scenario one - stable version 8', async ({ page }) => {
  await page.goto('/');

  await page.getByPlaceholder('Username').fill('admin');
  await page.getByPlaceholder('Password').fill('password');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText('Your Tasks')).toBeVisible();

  await page.getByPlaceholder('Add new task...').fill('Meditation');
  await page.getByRole('button', { name: 'Add' }).click();

  await expect(page.getByText('Meditation')).toBeVisible();

  await page.getByRole('button', { name: 'Active' }).click();

  await expect(page.getByText('Meditation')).toBeVisible();

  await page.getByRole('button', { name: 'All' }).click();
});


test('scenario one - stable version 9', async ({ page }) => {
  await page.goto('/');

  await page.getByPlaceholder('Username').fill('admin');
  await page.getByPlaceholder('Password').fill('password');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText('Your Tasks')).toBeVisible();

  await page.getByPlaceholder('Add new task...').fill('Fix bike');
  await page.getByRole('button', { name: 'Add' }).click();

  await expect(page.getByText('Fix bike')).toBeVisible();

  await page
    .getByRole('listitem')
    .filter({ hasText: 'Fix bike' })
    .getByRole('checkbox')
    .check();

  await expect(
    page
      .getByRole('listitem')
      .filter({ hasText: 'Fix bike' })
      .getByRole('checkbox')
  ).toBeChecked();
});


test('scenario one - stable version 10', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('textbox', { name: 'Username' }).fill('admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('password');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText('Your Tasks')).toBeVisible();

  await page.getByPlaceholder('Add new task...').fill('Update project');
  await page.getByRole('button', { name: 'Add' }).click();

  await expect(page.getByText('Update project')).toBeVisible();

  const updateTask = page
    .getByRole('listitem')
    .filter({ hasText: 'Update project' });

  await expect(updateTask).toBeVisible();

  await updateTask
    .getByRole('button', { name: 'Delete' })
    .click();

  await expect(page.getByText('Update project')).not.toBeVisible();
});