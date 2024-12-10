import {test, expect, beforeEach} from '@playwright/test'


beforeEach(async ({ page, request }) => {
  await request.post('/api/testing/reset')
  await page.goto('/')
})

test('phonebook opens', async ({ page }) => {
  await expect(page.locator('h1')).toHaveText('Phonebook')
  await expect(page.getByText('add new')).toBeVisible()
  await expect(page.getByText('Numbers')).toBeVisible()
  await expect(page.getByLabel('name:')).toBeVisible()
  await expect(page.getByLabel('number:')).toBeVisible()
})

test('phonebook can add a person', async ({ page }) => {
  await page.getByLabel('name:').fill('John Doe')
  await page.getByLabel('number:').fill('12-3456789')
  await page.click('text=add')}
)