# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests-for-scenarioOne.spec.ts >> scenario one - version two
- Location: tests\tests-for-scenarioOne.spec.ts:35:1

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "http://localhost:5173/", waiting until "load"

```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | test('scenario one - version one', async ({ page }) => {
  4   | await page.goto('/');
  5   |   // Bad manual waits
  6   |   await page.waitForTimeout(1000);
  7   |   // Weak selectors
  8   |   await page.locator('input').nth(0).fill('admin');
  9   |   await page.waitForTimeout(500);
  10  |   await page.locator('input').nth(1).fill('password');
  11  |   await page.waitForTimeout(500);
  12  |   // Weak button selector
  13  |   await page.locator('button').nth(0).click();
  14  |   // Hardcoded waits
  15  |   await page.waitForTimeout(2000);
  16  |   // BAD: generic selectors
  17  |   await page.locator('input').nth(0).fill('Make food');
  18  |   await page.locator('button').nth(1).click();
  19  |   await page.waitForTimeout(500);
  20  |   await page.locator('input').nth(0).fill('Clean Room');
  21  |   await page.locator('button').nth(1).click();
  22  |   await page.waitForTimeout(500);
  23  |   await page.locator('input').nth(0).fill('Walk the dog');
  24  |   await page.locator('button').nth(1).click();
  25  |   // Fragile checkbox selector
  26  |   await page.locator('input[type="checkbox"]').nth(0).check();
  27  |   // Clicking buttons by index = very flaky
  28  |   await page.locator('button').nth(2).click();
  29  |   await page.locator('button').nth(3).click();
  30  |   await page.locator('button').nth(4).click();
  31  |   // Delete task using index
  32  |   await page.locator('button').nth(6).click();
  33  | });
  34  | 
  35  | test('scenario one - version two', async ({ page }) => {
> 36  |   await page.goto('/');
      |              ^ Error: page.goto: Target page, context or browser has been closed
  37  | 
  38  |   // Login
  39  |   await page.getByRole('textbox', {
  40  |     name: 'Username'
  41  |   }).fill('admin');
  42  |   await page.getByRole('textbox', {
  43  |     name: 'Password'
  44  |   }).fill('password');
  45  |   await page.getByRole('button', {
  46  |     name: 'Login'
  47  |   }).click();
  48  |   // Verify logged in
  49  |   await expect(
  50  |     page.getByText('Your Tasks')
  51  |   ).toBeVisible();
  52  |   // Add "Make food"
  53  |   await page.getByRole('textbox', {
  54  |     name: 'Add new task...'
  55  |   }).fill('Make food');
  56  |   await page.getByRole('button', {
  57  |     name: 'Add'
  58  |   }).click();
  59  |   // Verify task added
  60  |   await expect(
  61  |     page.getByText('Make food')
  62  |   ).toBeVisible();
  63  |   // Add "Clean Room"
  64  |   await page.getByRole('textbox', {
  65  |     name: 'Add new task...'
  66  |   }).fill('Clean Room');
  67  |   await page.getByRole('button', {
  68  |     name: 'Add'
  69  |   }).click();
  70  |   // Verify task added
  71  |   await expect(
  72  |     page.getByText('Clean Room')
  73  |   ).toBeVisible();
  74  |   // Add "Walk the dog"
  75  |   await page.getByRole('textbox', {
  76  |     name: 'Add new task...'
  77  |   }).fill('Walk the dog');
  78  |   await page.getByRole('button', {
  79  |     name: 'Add'
  80  |   }).click();
  81  |   // Verify task added
  82  |   await expect(
  83  |     page.getByText('Walk the dog')
  84  |   ).toBeVisible();
  85  |   // Check "Make food" checkbox
  86  |   await page
  87  |     .getByRole('listitem')
  88  |     .filter({ hasText: 'Make food' })
  89  |     .getByRole('checkbox')
  90  |     .check();
  91  |   // Verify checkbox checked
  92  |   await expect(
  93  |     page
  94  |       .getByRole('listitem')
  95  |       .filter({ hasText: 'Make food' })
  96  |       .getByRole('checkbox')
  97  |   ).toBeChecked();
  98  |   // Delete "Clean Room"
  99  |   const cleanRoomTask = page
  100 |     .getByRole('listitem')
  101 |     .filter({ hasText: 'Clean Room' });
  102 |   await expect(cleanRoomTask).toBeVisible();
  103 |   await cleanRoomTask
  104 |     .getByRole('button', {
  105 |       name: 'Delete'
  106 |     })
  107 |     .click();
  108 |   // Verify deleted
  109 |   await expect(
  110 |     page.getByText('Clean Room')
  111 |   ).not.toBeVisible();
  112 | });
```