# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests-for-scenarioOne.spec.ts >> scenario one - flaky version 4
- Location: app\tests\tests-for-scenarioOne.spec.ts:86:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.check: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('input[type="checkbox"]').nth(1)

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - heading "TaskFlow Manager" [level=1] [ref=e4]
  - generic [ref=e5]:
    - generic [ref=e6]:
      - heading "Your Tasks" [level=2] [ref=e7]
      - button "Logout" [ref=e8]
    - generic [ref=e9]:
      - textbox "Add new task..." [ref=e10]
      - button "Add" [active] [ref=e11]
    - paragraph [ref=e12]: Task cannot be empty
    - generic [ref=e13]:
      - button "All" [ref=e14]
      - button "Active" [ref=e15]
      - button "Completed" [ref=e16]
    - list [ref=e17]:
      - listitem [ref=e18]:
        - generic [ref=e19]:
          - checkbox [ref=e20]
          - text: Buy groceries
        - generic [ref=e21]:
          - button "Edit" [ref=e22]
          - button "Delete" [ref=e23]
```

# Test source

```ts
  4   | await page.goto('/');
  5   |   await page.waitForTimeout(1000);
  6   |   // Weak selectors
  7   |   await page.locator('input').nth(0).fill('admin');
  8   |   await page.waitForTimeout(500);
  9   |   await page.locator('input').nth(1).fill('password');
  10  |   await page.waitForTimeout(500);
  11  |   // Weak button selector
  12  |   await page.locator('button').nth(0).click();
  13  |   // Hardcoded waits
  14  |   await page.waitForTimeout(2000);
  15  |   // BAD: generic selectors
  16  |   await page.locator('input').nth(0).fill('Make food');
  17  |   await page.locator('button').nth(1).click();
  18  |   await page.waitForTimeout(500);
  19  |   await page.locator('input').nth(0).fill('Clean Room');
  20  |   await page.locator('button').nth(1).click();
  21  |   await page.waitForTimeout(500);
  22  |   await page.locator('input').nth(0).fill('Walk the dog');
  23  |   await page.locator('button').nth(1).click();
  24  |   // Fragile checkbox selector
  25  |   await page.locator('input[type="checkbox"]').nth(0).check();
  26  |   // Clicking buttons by index = very flaky
  27  |   await page.locator('button').nth(2).click();
  28  | 
  29  |   await page.locator('button').nth(3).click();
  30  |   await page.locator('button').nth(4).click();
  31  | 
  32  |   // Delete task using index
  33  |   await page.locator('button').nth(6).click();
  34  | });
  35  | test('scenario one - flaky version 2', async ({ page }) => {
  36  |   await page.goto('/');
  37  | 
  38  |   await page.waitForTimeout(800);
  39  | 
  40  |   await page.locator('input').first().fill('admin');
  41  |   await page.locator('input').nth(1).fill('password');
  42  | 
  43  |   await page.waitForTimeout(300);
  44  | 
  45  |   await page.locator('button').first().click();
  46  | 
  47  |   await page.waitForTimeout(1500);
  48  | 
  49  |   await page.locator('input').first().fill('Do laundry');
  50  |   await page.locator('button').nth(1).click();
  51  | 
  52  |   await page.locator('input').first().fill('Study');
  53  |   await page.locator('button').nth(1).click();
  54  | 
  55  |   await page.locator('input[type="checkbox"]').first().check();
  56  | 
  57  |   await page.locator('button').nth(5).click();
  58  | });
  59  | 
  60  | 
  61  | test('scenario one - flaky version 3', async ({ page }) => {
  62  |   await page.goto('/');
  63  | 
  64  |   await page.locator('input').nth(0).fill('admin');
  65  | 
  66  |   await page.waitForTimeout(400);
  67  | 
  68  |   await page.locator('input').nth(1).fill('password');
  69  | 
  70  |   await page.locator('button').nth(0).click();
  71  | 
  72  |   await page.waitForTimeout(1000);
  73  | 
  74  |   await page.locator('input').nth(0).fill('Workout');
  75  |   await page.locator('button').nth(1).click();
  76  | 
  77  |   await page.waitForTimeout(200);
  78  | 
  79  |   await page.locator('input').nth(0).fill('Cook dinner');
  80  |   await page.locator('button').nth(1).click();
  81  | 
  82  |   await page.locator('button').nth(3).click();
  83  | });
  84  | 
  85  | 
  86  | test('scenario one - flaky version 4', async ({ page }) => {
  87  |   await page.goto('/');
  88  | 
  89  |   await page.waitForTimeout(1200);
  90  | 
  91  |   await page.locator('input').first().fill('admin');
  92  |   await page.locator('input').last().fill('password');
  93  | 
  94  |   await page.locator('button').nth(0).click();
  95  | 
  96  |   await page.waitForTimeout(2500);
  97  | 
  98  |   await page.locator('input').nth(0).fill('Buy groceries');
  99  |   await page.locator('button').nth(1).click();
  100 | 
  101 |   await page.locator('input').nth(0).fill('Wash car');
  102 |   await page.locator('button').nth(1).click();
  103 | 
> 104 |   await page.locator('input[type="checkbox"]').nth(1).check();
      |                                                       ^ Error: locator.check: Test timeout of 30000ms exceeded.
  105 | 
  106 |   await page.locator('button').nth(4).click();
  107 | });
  108 | 
  109 | 
  110 | test('scenario one - flaky version 5', async ({ page }) => {
  111 |   await page.goto('/');
  112 | 
  113 |   await page.waitForTimeout(500);
  114 | 
  115 |   await page.locator('input').nth(0).fill('admin');
  116 |   await page.locator('input').nth(1).fill('password');
  117 | 
  118 |   await page.waitForTimeout(500);
  119 | 
  120 |   await page.locator('button').nth(0).click();
  121 | 
  122 |   await page.waitForTimeout(1000);
  123 | 
  124 |   await page.locator('input').nth(0).fill('Read book');
  125 |   await page.locator('button').nth(1).click();
  126 | 
  127 |   await page.waitForTimeout(200);
  128 | 
  129 |   await page.locator('input').nth(0).fill('Clean kitchen');
  130 |   await page.locator('button').nth(1).click();
  131 | 
  132 |   await page.locator('button').nth(2).click();
  133 | 
  134 |   await page.locator('button').nth(6).click();
  135 | });
  136 | 
  137 | 
  138 | test('scenario one - flaky version 6', async ({ page }) => {
  139 |   await page.goto('/');
  140 | 
  141 |   await page.locator('input').first().fill('admin');
  142 | 
  143 |   await page.waitForTimeout(600);
  144 | 
  145 |   await page.locator('input').nth(1).fill('password');
  146 | 
  147 |   await page.locator('button').first().click();
  148 | 
  149 |   await page.waitForTimeout(2200);
  150 | 
  151 |   await page.locator('input').first().fill('Gaming');
  152 |   await page.locator('button').nth(1).click();
  153 | 
  154 |   await page.locator('input').first().fill('Meditation');
  155 |   await page.locator('button').nth(1).click();
  156 | 
  157 |   await page.locator('input[type="checkbox"]').first().check();
  158 | 
  159 |   await page.locator('button').nth(3).click();
  160 | });
  161 | 
  162 | 
  163 | test('scenario one - flaky version 7', async ({ page }) => {
  164 |   await page.goto('/');
  165 | 
  166 |   await page.waitForTimeout(900);
  167 | 
  168 |   await page.locator('input').nth(0).fill('admin');
  169 | 
  170 |   await page.locator('input').nth(1).fill('password');
  171 | 
  172 |   await page.locator('button').nth(0).click();
  173 | 
  174 |   await page.waitForTimeout(3000);
  175 | 
  176 |   await page.locator('input').nth(0).fill('Fix bike');
  177 |   await page.locator('button').nth(1).click();
  178 | 
  179 |   await page.locator('input').nth(0).fill('Go shopping');
  180 |   await page.locator('button').nth(1).click();
  181 | 
  182 |   await page.locator('button').nth(5).click();
  183 | });
  184 | 
  185 | 
  186 | test('scenario one - flaky version 8', async ({ page }) => {
  187 |   await page.goto('/');
  188 | 
  189 |   await page.waitForTimeout(700);
  190 | 
  191 |   await page.locator('input').first().fill('admin');
  192 |   await page.locator('input').last().fill('password');
  193 | 
  194 |   await page.locator('button').first().click();
  195 | 
  196 |   await page.waitForTimeout(1200);
  197 | 
  198 |   await page.locator('input').first().fill('Homework');
  199 |   await page.locator('button').nth(1).click();
  200 | 
  201 |   await page.locator('input').first().fill('Practice coding');
  202 |   await page.locator('button').nth(1).click();
  203 | 
  204 |   await page.locator('input[type="checkbox"]').nth(0).check();
```