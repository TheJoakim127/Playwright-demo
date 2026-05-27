import { test, expect } from '@playwright/test';

test('scenario one - flaky version 1', async ({ page }) => {
await page.goto('/');
  await page.waitForTimeout(100);
  await page.locator('input').nth(0).fill('admin');
  await page.waitForTimeout(50);
  await page.locator('input').nth(1).fill('password');
  await page.waitForTimeout(50);
  await page.locator('button').nth(0).click();
  await page.waitForTimeout(200);
  await page.locator('input').nth(0).fill('Make food');
  await page.locator('button').nth(1).click();
  await page.waitForTimeout(50);
  await page.locator('input').nth(0).fill('Clean Room');
  await page.locator('button').nth(1).click();
  await page.waitForTimeout(50);
  await page.locator('input').nth(0).fill('Walk the dog');
  await page.locator('button').nth(1).click();
  await page.locator('input[type="checkbox"]').nth(0).check();
  await page.locator('button').nth(2).click();
  await page.locator('button').nth(3).click();
  await page.locator('button').nth(4).click();
  await page.locator('button').nth(6).click();
});

test('scenario one - flaky version 2', async ({ page }) => {
  await page.goto('/');


  await page.locator('input').first().fill('admin');
  await page.locator('input').nth(1).fill('password');


  await page.locator('button').first().click();

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

  await page.waitForTimeout(40);

  await page.locator('input').nth(1).fill('password');

  await page.locator('button').nth(0).click();

  await page.waitForTimeout(100);

  await page.locator('input').nth(0).fill('Workout');
  await page.locator('button').nth(1).click();

  await page.waitForTimeout(520);

  await page.locator('input').nth(0).fill('Cook dinner');
  await page.locator('button').nth(1).click();

  await page.locator('button').nth(3).click();
   await page.waitForTimeout(420);
});


test('scenario one - flaky version 4', async ({ page }) => {
  await page.goto('/');
  await page.locator('input').nth(0).fill('admin');
  await page.locator('input').nth(1).fill('password');
  await page.locator('button').nth(0).click();
  await page.locator('input').nth(0).fill('Buy groceries');
  await page.waitForTimeout(500);
  await page.locator('button').nth(1).click();
  await page.locator('input').nth(0).fill('Wash car');
  await page.locator('button').nth(1).click();
  await page.locator('button').nth(3).click();
  await page.waitForTimeout(700);
  await expect(page.getByText('Wash car')).toBeVisible();
});



test('scenario one - flaky version 5', async ({ page }) => {
  await page.goto('/');

  await page.waitForTimeout(500);

  await page.locator('input').nth(0).fill('admin');
  await page.locator('input').nth(1).fill('password');

  await page.waitForTimeout(50);

  await page.locator('button').nth(0).click();

  await page.waitForTimeout(3100);

  await page.locator('input').nth(0).fill('Read book');
  await page.locator('button').nth(1).click();

  await page.waitForTimeout(3000);

  await page.locator('input').nth(0).fill('Clean kitchen');
  await page.locator('button').nth(1).click();

  await page.locator('button').nth(2).click();

  await page.locator('button').nth(6).click();

  await expect(page.getByText('Read book')).toBeVisible();
});


test('scenario one - flaky version 6', async ({ page }) => {
  await page.goto('/');

  await page.locator('input').first().fill('admin');

  await page.waitForTimeout(60);

  await page.locator('input').nth(1).fill('password');

  await page.locator('button').first().click();

  await page.waitForTimeout(220);

  await page.locator('input').first().fill('Gaming');
  await page.locator('button').nth(1).click();

  await page.locator('input').first().fill('Meditation');
  await page.locator('button').nth(1).click();

  await page.locator('input[type="checkbox"]').first().check();

  await page.locator('button').nth(4).click();

  await expect(page.getByText('Meditation')).toBeVisible();
});


test('scenario one - flaky version 7', async ({ page }) => {
  await page.goto('/');

  await page.waitForTimeout(90);

  await page.locator('input').nth(0).fill('admin');

  await page.locator('input').nth(1).fill('password');

  await page.locator('button').nth(0).click();

  await page.waitForTimeout(1000);

  await page.locator('input').nth(0).fill('Fix bike');
  await page.locator('button').nth(1).click();
  await page.waitForTimeout(2200);
  await page.locator('input').nth(0).fill('Go shopping');
  await page.locator('button').nth(1).click();

  await page.locator('button').nth(5).click();

  await expect(page.getByText('Go shopping')).toBeVisible();

});


test('scenario one - flaky version 8', async ({ page }) => {
  await page.goto('/');

  await page.waitForTimeout(700);

  await page.locator('input').first().fill('admin');
  await page.locator('input').last().fill('password');

  await page.locator('button').first().click();

  await page.waitForTimeout(200);

  await page.locator('input').first().fill('Homework');
  await page.locator('button').nth(1).click();

  await page.locator('input').first().fill('Practice coding');
  await page.locator('button').nth(1).click();

  await page.locator('input[type="checkbox"]').nth(0).check();

  await page.locator('button').nth(6).click();

  await expect(page.getByText('Practice coding')).not.toBeVisible();
});


test('scenario one - flaky version 9', async ({ page }) => {
  await page.goto('/');
  await page.waitForTimeout(100);
  await page.locator('input').nth(0).fill('admin');
  await page.waitForTimeout(300);
  await page.locator('input').nth(1).fill('password');
  await page.locator('button').nth(0).click();
  await page.waitForTimeout(1000);
  await page.locator('input').nth(0).fill('Team meeting');
  await page.locator('button').nth(1).click();
  await page.locator('input').nth(0).fill('Update project');
  await page.locator('button').nth(1).click();
  await page.locator('button').nth(2).click();
  await expect(page.getByText('Team meeting')).toBeVisible();

});


test('scenario one - flaky version 10', async ({ page }) => {
  await page.goto('/');

  await page.waitForTimeout(300);

  await page.locator('input').first().fill('admin');
  await page.locator('input').last().fill('password');

  await page.locator('button').first().click();

  await page.waitForTimeout(2000);

  await page.locator('input').first().fill('Watch movie');
  await page.locator('button').nth(1).click();
  await page.waitForTimeout(2000);
  await page.locator('input').first().fill('Morning run');
  await page.locator('button').nth(1).click();

  await page.locator('input[type="checkbox"]').nth(0).check();

  await page.locator('button').nth(6).click();

  await expect(page.getByText('Morning run')).toBeVisible();
});
