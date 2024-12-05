import {test, expect} from '@playwright/test'

test('phonebook opens', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('h1')).toHaveText('Phonebook')
  await expect(page.getByText('add new')).toBeVisible()
  await expect(page.getByText('Numbers')).toBeVisible()
  await expect(page.getByLabel('name:')).toBeVisible()
  await expect(page.getByLabel('number:')).toBeVisible()
})