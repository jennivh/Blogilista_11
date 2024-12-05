const {test, expect, beforeEach} = require('@playwright/test')
const { describe } = require('node:test')


describe("Phonebook", () => {

beforeEach(async ({ page }) => {
    await request.post('/reset')
})

test('frontpage opens', async ({ page }) => {
    await page.goto('')
    await expect(page.locator('h1')).toHaveText('Phonebook')
})

test('add contact', async ({ page }) => { 
    await page.goto('')
  await page.getByLabel('name:').fill('John Doe')
  await page.getByLabel('number:').fill('12-3456789')
  await page.getByRole('button', {name: 'add'}).click()

    await expect(page.getByText('John Doe 12-3456789')).toBeVisible()
})
})