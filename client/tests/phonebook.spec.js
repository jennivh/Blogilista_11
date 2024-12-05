import {test, expect} from '@playwright/test'

test('phonebook', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('h1')).toHaveText('Phonebook')
})
