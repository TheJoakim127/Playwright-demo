# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests-for-scenarioOne.spec.ts >> scenario one - Stable version 1
- Location: app\tests\tests-for-scenarioOne.spec.ts:3:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Your Tasks')
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Your Tasks')

```

```yaml
- heading "TaskFlow Manager" [level=1]
- heading "Login" [level=2]
- textbox "Username": admin
- textbox "Password": password
- button "Logging in..." [disabled]
- paragraph:
  - text: "Username:"
  - strong: admin
- paragraph:
  - text: "Password:"
  - strong: password
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | test('scenario one - Stable version 1', async ({ page }) => {
  4   |   await page.goto('/');
  5   |   await page.getByRole('textbox', {
  6   |     name: 'Username'
  7   |   }).fill('admin');
  8   |   await page.getByRole('textbox', {
  9   |     name: 'Password'
  10  |   }).fill('password');
  11  |   await page.getByRole('button', {
  12  |     name: 'Login'
  13  |   }).click();
  14  |   await expect(
  15  |     page.getByText('Your Tasks')
> 16  |   ).toBeVisible();
      |     ^ Error: expect(locator).toBeVisible() failed
  17  |   await page.getByRole('textbox', {
  18  |     name: 'Add new task...'
  19  |   }).fill('Make food');
  20  |   await page.getByRole('button', {
  21  |     name: 'Add'
  22  |   }).click();
  23  |   await expect(
  24  |     page.getByText('Make food')
  25  |   ).toBeVisible();
  26  |   await page.getByRole('textbox', {
  27  |     name: 'Add new task...'
  28  |   }).fill('Clean Room');
  29  |   await page.getByRole('button', {
  30  |     name: 'Add'
  31  |   }).click();
  32  |   await expect(
  33  |     page.getByText('Clean Room')
  34  |   ).toBeVisible();
  35  |   await page.getByRole('textbox', {
  36  |     name: 'Add new task...'
  37  |   }).fill('Walk the dog');
  38  |   await page.getByRole('button', {
  39  |     name: 'Add'
  40  |   }).click();
  41  |   await expect(
  42  |     page.getByText('Walk the dog')
  43  |   ).toBeVisible();
  44  |   await page
  45  |     .getByRole('listitem')
  46  |     .filter({ hasText: 'Make food' })
  47  |     .getByRole('checkbox')
  48  |     .check();
  49  |   await expect(
  50  |     page
  51  |       .getByRole('listitem')
  52  |       .filter({ hasText: 'Make food' })
  53  |       .getByRole('checkbox')
  54  |   ).toBeChecked();
  55  |   const cleanRoomTask = page
  56  |     .getByRole('listitem')
  57  |     .filter({ hasText: 'Clean Room' });
  58  |   await expect(cleanRoomTask).toBeVisible();
  59  |   await cleanRoomTask
  60  |     .getByRole('button', {
  61  |       name: 'Delete'
  62  |     })
  63  |     .click();
  64  |   await expect(
  65  |     page.getByText('Clean Room')
  66  |   ).not.toBeVisible();
  67  | });
  68  | 
  69  | test('scenario one - stable version 2', async ({ page }) => {
  70  |   await page.goto('/');
  71  |   await page.getByRole('textbox', { name: 'Username' }).fill('admin');
  72  |   await page.getByRole('textbox', { name: 'Password' }).fill('password');
  73  |   await page.getByRole('button', { name: 'Login' }).click();
  74  |   await expect(page.getByText('Your Tasks')).toBeVisible();
  75  |   await page.getByPlaceholder('Add new task...').fill('Study');
  76  |   await page.getByRole('button', { name: 'Add' }).click();
  77  |   await expect(page.getByText('Study')).toBeVisible();
  78  |   await page
  79  |     .getByRole('listitem')
  80  |     .filter({ hasText: 'Study' })
  81  |     .getByRole('checkbox')
  82  |     .check();
  83  | 
  84  |   await expect(
  85  |     page
  86  |       .getByRole('listitem')
  87  |       .filter({ hasText: 'Study' })
  88  |       .getByRole('checkbox')
  89  |   ).toBeChecked();
  90  | });
  91  | 
  92  | 
  93  | test('scenario one - Stable version 3', async ({ page }) => {
  94  |   await page.goto('/');
  95  | 
  96  |   await page.getByRole('textbox', {
  97  |     name: 'Username'
  98  |   }).fill('admin');
  99  |   await page.getByRole('textbox', {
  100 |     name: 'Password'
  101 |   }).fill('password');
  102 |   await page.getByRole('button', {
  103 |     name: 'Login'
  104 |   }).click();
  105 |   await expect(
  106 |     page.getByText('Your Tasks')
  107 |   ).toBeVisible();
  108 |   await page.getByRole('textbox', {
  109 |     name: 'Add new task...'
  110 |   }).fill('Make bed');
  111 |   await page.getByRole('button', {
  112 |     name: 'Add'
  113 |   }).click();
  114 |   await expect(
  115 |     page.getByText('Make bed')
  116 |   ).toBeVisible();
```