# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests-for-scenarioOne.spec.ts >> scenario one - flaky version 7
- Location: tests\tests-for-scenarioOne.spec.ts:149:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Go shopping')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Go shopping')

```

```yaml
- heading "TaskFlow Manager" [level=1]
- heading "Your Tasks" [level=2]
- button "Logout"
- textbox "Add new task..."
- button "Add"
- button "All"
- button "Active"
- button "Completed"
- list:
  - listitem:
    - checkbox
    - textbox: Go shopping
    - button "Save"
    - button "Edit"
    - button "Delete"
```

# Test source

```ts
  70  |   await page.locator('button').nth(3).click();
  71  |    await page.waitForTimeout(420);
  72  | });
  73  | 
  74  | 
  75  | test('scenario one - flaky version 4', async ({ page }) => {
  76  |   await page.goto('/');
  77  |   await page.locator('input').nth(0).fill('admin');
  78  |   await page.locator('input').nth(1).fill('password');
  79  |   await page.locator('button').nth(0).click();
  80  |   await page.locator('input').nth(0).fill('Buy groceries');
  81  |   await page.waitForTimeout(500);
  82  |   await page.locator('button').nth(1).click();
  83  |   await page.locator('input').nth(0).fill('Wash car');
  84  |   await page.locator('button').nth(1).click();
  85  |   await page.locator('button').nth(3).click();
  86  |   await page.waitForTimeout(700);
  87  |   await expect(page.getByText('Wash car')).toBeVisible();
  88  | });
  89  | 
  90  | 
  91  | 
  92  | test('scenario one - flaky version 5', async ({ page }) => {
  93  |   await page.goto('/');
  94  | 
  95  |   await page.waitForTimeout(500);
  96  | 
  97  |   await page.locator('input').nth(0).fill('admin');
  98  |   await page.locator('input').nth(1).fill('password');
  99  | 
  100 |   await page.waitForTimeout(50);
  101 | 
  102 |   await page.locator('button').nth(0).click();
  103 | 
  104 |   await page.waitForTimeout(3100);
  105 | 
  106 |   await page.locator('input').nth(0).fill('Read book');
  107 |   await page.locator('button').nth(1).click();
  108 | 
  109 |   await page.waitForTimeout(3000);
  110 | 
  111 |   await page.locator('input').nth(0).fill('Clean kitchen');
  112 |   await page.locator('button').nth(1).click();
  113 | 
  114 |   await page.locator('button').nth(2).click();
  115 | 
  116 |   await page.locator('button').nth(6).click();
  117 | 
  118 |   await expect(page.getByText('Read book')).toBeVisible();
  119 | });
  120 | 
  121 | 
  122 | test('scenario one - flaky version 6', async ({ page }) => {
  123 |   await page.goto('/');
  124 | 
  125 |   await page.locator('input').first().fill('admin');
  126 | 
  127 |   await page.waitForTimeout(60);
  128 | 
  129 |   await page.locator('input').nth(1).fill('password');
  130 | 
  131 |   await page.locator('button').first().click();
  132 | 
  133 |   await page.waitForTimeout(220);
  134 | 
  135 |   await page.locator('input').first().fill('Gaming');
  136 |   await page.locator('button').nth(1).click();
  137 | 
  138 |   await page.locator('input').first().fill('Meditation');
  139 |   await page.locator('button').nth(1).click();
  140 | 
  141 |   await page.locator('input[type="checkbox"]').first().check();
  142 | 
  143 |   await page.locator('button').nth(4).click();
  144 | 
  145 |   await expect(page.getByText('Meditation')).toBeVisible();
  146 | });
  147 | 
  148 | 
  149 | test('scenario one - flaky version 7', async ({ page }) => {
  150 |   await page.goto('/');
  151 | 
  152 |   await page.waitForTimeout(90);
  153 | 
  154 |   await page.locator('input').nth(0).fill('admin');
  155 | 
  156 |   await page.locator('input').nth(1).fill('password');
  157 | 
  158 |   await page.locator('button').nth(0).click();
  159 | 
  160 |   await page.waitForTimeout(1000);
  161 | 
  162 |   await page.locator('input').nth(0).fill('Fix bike');
  163 |   await page.locator('button').nth(1).click();
  164 |   await page.waitForTimeout(2200);
  165 |   await page.locator('input').nth(0).fill('Go shopping');
  166 |   await page.locator('button').nth(1).click();
  167 | 
  168 |   await page.locator('button').nth(5).click();
  169 | 
> 170 |   await expect(page.getByText('Go shopping')).toBeVisible();
      |                                               ^ Error: expect(locator).toBeVisible() failed
  171 | 
  172 | });
  173 | 
  174 | 
  175 | test('scenario one - flaky version 8', async ({ page }) => {
  176 |   await page.goto('/');
  177 | 
  178 |   await page.waitForTimeout(700);
  179 | 
  180 |   await page.locator('input').first().fill('admin');
  181 |   await page.locator('input').last().fill('password');
  182 | 
  183 |   await page.locator('button').first().click();
  184 | 
  185 |   await page.waitForTimeout(200);
  186 | 
  187 |   await page.locator('input').first().fill('Homework');
  188 |   await page.locator('button').nth(1).click();
  189 | 
  190 |   await page.locator('input').first().fill('Practice coding');
  191 |   await page.locator('button').nth(1).click();
  192 | 
  193 |   await page.locator('input[type="checkbox"]').nth(0).check();
  194 | 
  195 |   await page.locator('button').nth(6).click();
  196 | 
  197 |   await expect(page.getByText('Practice coding')).not.toBeVisible();
  198 | });
  199 | 
  200 | 
  201 | test('scenario one - flaky version 9', async ({ page }) => {
  202 |   await page.goto('/');
  203 |   await page.waitForTimeout(100);
  204 |   await page.locator('input').nth(0).fill('admin');
  205 |   await page.waitForTimeout(300);
  206 |   await page.locator('input').nth(1).fill('password');
  207 |   await page.locator('button').nth(0).click();
  208 |   await page.waitForTimeout(1000);
  209 |   await page.locator('input').nth(0).fill('Team meeting');
  210 |   await page.locator('button').nth(1).click();
  211 |   await page.locator('input').nth(0).fill('Update project');
  212 |   await page.locator('button').nth(1).click();
  213 |   await page.locator('button').nth(2).click();
  214 |   await expect(page.getByText('Team meeting')).toBeVisible();
  215 | 
  216 | });
  217 | 
  218 | 
  219 | test('scenario one - flaky version 10', async ({ page }) => {
  220 |   await page.goto('/');
  221 | 
  222 |   await page.waitForTimeout(300);
  223 | 
  224 |   await page.locator('input').first().fill('admin');
  225 |   await page.locator('input').last().fill('password');
  226 | 
  227 |   await page.locator('button').first().click();
  228 | 
  229 |   await page.waitForTimeout(2000);
  230 | 
  231 |   await page.locator('input').first().fill('Watch movie');
  232 |   await page.locator('button').nth(1).click();
  233 |   await page.waitForTimeout(2000);
  234 |   await page.locator('input').first().fill('Morning run');
  235 |   await page.locator('button').nth(1).click();
  236 | 
  237 |   await page.locator('input[type="checkbox"]').nth(0).check();
  238 | 
  239 |   await page.locator('button').nth(6).click();
  240 | 
  241 |   await expect(page.getByText('Morning run')).toBeVisible();
  242 | });
  243 | 
```