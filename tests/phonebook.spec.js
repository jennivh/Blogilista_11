const {test, expect} = require('@playwright/test')
const { beforeEach } = require('node:test')

beforeEach(async ({ page }) => {
    await request.post('http:localhost:3001/reset')
    await page.goto('')
})

test('frontpage opens', async ({ page }) => {
    await expect(page.locator('h1')).toHaveText('Phonebook')
})

test('add contact', async ({ page }) => { 
  await page.getByLabel('name:').fill('John Doe')
  await page.getByLabel('number:').fill('12-3456789')
  await page.getByRole('button', {name: 'add'}).click()

    await expect(page.getByText('John Doe 12-3456789')).toBeVisible()
})