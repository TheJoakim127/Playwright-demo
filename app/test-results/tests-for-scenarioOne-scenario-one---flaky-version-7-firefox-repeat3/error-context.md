# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests-for-scenarioOne.spec.ts >> scenario one - flaky version 7
- Location: tests\tests-for-scenarioOne.spec.ts:154:1

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
- paragraph: Task cannot be empty
- button "All"
- button "Active"
- button "Completed"
- list:
  - listitem:
    - checkbox
    - textbox: Fix bike
    - button "Save"
    - button "Edit"
    - button "Delete"
```

# Test source

```ts
  75  | test('scenario one - flaky version 4', async ({ page }) => {
  76  |   await page.goto('/');
  77  | 
  78  |   await page.locator('input').nth(0).fill('admin');
  79  | 
  80  |   await page.locator('input').nth(1).fill('password');
  81  | 
  82  |   await page.locator('button').nth(0).click();
  83  | 
  84  |   await page.locator('input').nth(0).fill('Buy groceries');
  85  |   await page.locator('button').nth(1).click();
  86  | 
  87  |   await page.locator('input').nth(0).fill('Wash car');
  88  |   await page.locator('button').nth(1).click();
  89  | 
  90  |   await page.locator('button').nth(3).click();
  91  |   
  92  |   await expect(page.getByText('Wash car')).toBeVisible();
  93  | });
  94  | 
  95  | 
  96  | 
  97  | test('scenario one - flaky version 5', async ({ page }) => {
  98  |   await page.goto('/');
  99  | 
  100 |   await page.waitForTimeout(500);
  101 | 
  102 |   await page.locator('input').nth(0).fill('admin');
  103 |   await page.locator('input').nth(1).fill('password');
  104 | 
  105 |   await page.waitForTimeout(50);
  106 | 
  107 |   await page.locator('button').nth(0).click();
  108 | 
  109 |   await page.waitForTimeout(3100);
  110 | 
  111 |   await page.locator('input').nth(0).fill('Read book');
  112 |   await page.locator('button').nth(1).click();
  113 | 
  114 |   await page.waitForTimeout(3000);
  115 | 
  116 |   await page.locator('input').nth(0).fill('Clean kitchen');
  117 |   await page.locator('button').nth(1).click();
  118 | 
  119 |   await page.locator('button').nth(2).click();
  120 | 
  121 |   await page.locator('button').nth(6).click();
  122 | 
  123 |   await expect(page.getByText('Read book')).toBeVisible();
  124 | });
  125 | 
  126 | 
  127 | test('scenario one - flaky version 6', async ({ page }) => {
  128 |   await page.goto('/');
  129 | 
  130 |   await page.locator('input').first().fill('admin');
  131 | 
  132 |   await page.waitForTimeout(60);
  133 | 
  134 |   await page.locator('input').nth(1).fill('password');
  135 | 
  136 |   await page.locator('button').first().click();
  137 | 
  138 |   await page.waitForTimeout(220);
  139 | 
  140 |   await page.locator('input').first().fill('Gaming');
  141 |   await page.locator('button').nth(1).click();
  142 | 
  143 |   await page.locator('input').first().fill('Meditation');
  144 |   await page.locator('button').nth(1).click();
  145 | 
  146 |   await page.locator('input[type="checkbox"]').first().check();
  147 | 
  148 |   await page.locator('button').nth(4).click();
  149 | 
  150 |   await expect(page.getByText('Meditation')).toBeVisible();
  151 | });
  152 | 
  153 | 
  154 | test('scenario one - flaky version 7', async ({ page }) => {
  155 |   await page.goto('/');
  156 | 
  157 |   await page.waitForTimeout(90);
  158 | 
  159 |   await page.locator('input').nth(0).fill('admin');
  160 | 
  161 |   await page.locator('input').nth(1).fill('password');
  162 | 
  163 |   await page.locator('button').nth(0).click();
  164 | 
  165 |   await page.waitForTimeout(1000);
  166 | 
  167 |   await page.locator('input').nth(0).fill('Fix bike');
  168 |   await page.locator('button').nth(1).click();
  169 |   await page.waitForTimeout(2200);
  170 |   await page.locator('input').nth(0).fill('Go shopping');
  171 |   await page.locator('button').nth(1).click();
  172 | 
  173 |   await page.locator('button').nth(5).click();
  174 | 
> 175 |   await expect(page.getByText('Go shopping')).toBeVisible();
      |                                               ^ Error: expect(locator).toBeVisible() failed
  176 | 
  177 | });
  178 | 
  179 | 
  180 | test('scenario one - flaky version 8', async ({ page }) => {
  181 |   await page.goto('/');
  182 | 
  183 |   await page.waitForTimeout(700);
  184 | 
  185 |   await page.locator('input').first().fill('admin');
  186 |   await page.locator('input').last().fill('password');
  187 | 
  188 |   await page.locator('button').first().click();
  189 | 
  190 |   await page.waitForTimeout(200);
  191 | 
  192 |   await page.locator('input').first().fill('Homework');
  193 |   await page.locator('button').nth(1).click();
  194 | 
  195 |   await page.locator('input').first().fill('Practice coding');
  196 |   await page.locator('button').nth(1).click();
  197 | 
  198 |   await page.locator('input[type="checkbox"]').nth(0).check();
  199 | 
  200 |   await page.locator('button').nth(6).click();
  201 | 
  202 |   await expect(page.getByText('Practice coding')).not.toBeVisible();
  203 | });
  204 | 
  205 | 
  206 | test('scenario one - flaky version 9', async ({ page }) => {
  207 |   await page.goto('/');
  208 |   await page.waitForTimeout(100);
  209 |   await page.locator('input').nth(0).fill('admin');
  210 |   await page.waitForTimeout(300);
  211 |   await page.locator('input').nth(1).fill('password');
  212 |   await page.locator('button').nth(0).click();
  213 |   await page.waitForTimeout(1000);
  214 |   await page.locator('input').nth(0).fill('Team meeting');
  215 |   await page.locator('button').nth(1).click();
  216 |   await page.locator('input').nth(0).fill('Update project');
  217 |   await page.locator('button').nth(1).click();
  218 |   await page.locator('button').nth(2).click();
  219 |   await expect(page.getByText('Team meeting')).toBeVisible();
  220 | 
  221 | });
  222 | 
  223 | 
  224 | test('scenario one - flaky version 10', async ({ page }) => {
  225 |   await page.goto('/');
  226 | 
  227 |   await page.waitForTimeout(300);
  228 | 
  229 |   await page.locator('input').first().fill('admin');
  230 |   await page.locator('input').last().fill('password');
  231 | 
  232 |   await page.locator('button').first().click();
  233 | 
  234 |   await page.waitForTimeout(2000);
  235 | 
  236 |   await page.locator('input').first().fill('Watch movie');
  237 |   await page.locator('button').nth(1).click();
  238 |   await page.waitForTimeout(2000);
  239 |   await page.locator('input').first().fill('Morning run');
  240 |   await page.locator('button').nth(1).click();
  241 | 
  242 |   await page.locator('input[type="checkbox"]').nth(0).check();
  243 | 
  244 |   await page.locator('button').nth(6).click();
  245 | 
  246 |   await expect(page.getByText('Morning run')).toBeVisible();
  247 | });
  248 | 
```