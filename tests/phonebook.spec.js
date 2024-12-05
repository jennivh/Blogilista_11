const {test, expect, beforeEach, describe} = require('@playwright/test')



describe("Phonebook", () => {

    beforeEach(async ({ page }) => {
        await page.goto('http://localhost:5173')
    })

    test('frontpage opens', async ({ page }) => {
        await expect(page.locator('h1')).toHaveText('Phonebook')
})


})