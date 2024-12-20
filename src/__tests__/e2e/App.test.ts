import { test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173/to-do-list-app/')

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Todo List/)
})
