import { test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173/to-do-list-app/')

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Todo List/)
})

test('delete all tasks', async ({ page }) => {
  await page.goto('http://localhost:5173/to-do-list-app/')

  await page.getByLabel('todo item: Delete the Demo').getByLabel('Delete', { exact: true }).click()
  await page.getByLabel('Delete').click()
  await expect(page.getByText('Delete the Demo')).not.toBeVisible()
})

test('add new task', async ({ page }) => {
  await page.goto('http://localhost:5173/to-do-list-app/')

  await page.getByPlaceholder('Input Task...').click()
  await page.getByPlaceholder('Input Task...').fill('1')
  await page.getByLabel('Add').click()
  await page.getByPlaceholder('Input Task...').click()
  await page.getByPlaceholder('Input Task...').fill('2')
  await page.getByPlaceholder('Due Date').fill('2030/1/1')
  await page.getByPlaceholder('Due Date').press('Enter')
  await page.getByLabel('Add').click()

  await expect(page.getByLabel('todo item: 1')).toBeVisible()
  await expect(page.getByLabel('todo item: 2')).toBeVisible()
})

test('toggle complete button', async ({ page }) => {
  await page.goto('http://localhost:5173/to-do-list-app/')

  await page
    .getByLabel('todo item: Delete the Demo Tasks before you use')
    .getByLabel('Complete')
    .click()
})

test('edit todo', async ({ page }) => {
  await page.goto('http://localhost:5173/to-do-list-app/')

  await page
    .getByLabel('todo item: Delete the Demo Tasks before you use')
    .getByLabel('Edit')
    .click()
  await page.getByLabel('Cancel').click()
  await expect(page.getByLabel('todo item: Delete the Demo Tasks before you use')).toBeVisible()

  await page
    .getByLabel('todo item: Delete the Demo Tasks before you use')
    .getByLabel('Edit')
    .click()
  await page.getByLabel('Edit Todo Form').getByPlaceholder('Input Task...').click()
  await page.getByLabel('Edit Todo Form').getByPlaceholder('Input Task...').fill('')
  await page.getByLabel('Edit Todo Form').getByPlaceholder('Input Task...').fill('edited task')
  await page.getByLabel('Edit Todo Form').getByPlaceholder('Due Date').click()
  await page.getByLabel('Edit Todo Form').getByPlaceholder('Due Date').fill('2030/1/1')
  await page.getByLabel('Edit Todo Form').getByPlaceholder('Due Date').press('Enter')
  await page.getByLabel('Edit Todo Form').getByLabel('Save').click()
  await expect(page.getByLabel('todo item: edited task')).toBeVisible()
})
