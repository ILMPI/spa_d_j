import { test, expect } from "@playwright/test";
import AxeBuilder from '@axe-core/playwright';

test.describe('Automated Accessibility Checks', () => {
    test('home page satisfies WCAG 2.1 Level A and AA standards', async ({page}) => {
        await page.goto('/');

          const accessibilityScanResults = await new AxeBuilder({ page })
            .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
            .analyze();

        expect(accessibilityScanResults.violations).toEqual([])
    })
})