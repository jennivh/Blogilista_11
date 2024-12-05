import {test, expect} from '@playwright/test'

test('phonebook', async ({ page }) => {
  await page.goto('http://localhost:5173')
  await expect(page.locator('h1')).toHaveText('Phonebook')
})
