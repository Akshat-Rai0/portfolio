import { test } from '@playwright/test';

const viewports = [
  { width: 1920, height: 1080, name: '1920x1080' },
  { width: 1440, height: 900, name: '1440x900' },
  { width: 1280, height: 720, name: '1280x720' },
  { width: 1024, height: 768, name: '1024x768' },
  { width: 390, height: 844, name: '390x844' },
];

viewports.forEach(({ width, height, name }) => {
  test(`Layout test at ${name}`, async ({ page }) => {
    await page.setViewportSize({ width, height });
    await page.goto('/landing-pages/inner-green-3d.html');

    // Wait for page to load
    await page.waitForTimeout(3000);

    // Take viewport screenshot
    await page.screenshot({
      path: `test-results/layout-${name}.png`,
      fullPage: false,
    });
  });
});

test('1440x900 screenshot for review', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/landing-pages/inner-green-3d.html');
  await page.waitForTimeout(3000);
  await page.screenshot({
    path: 'test-results/layout-1440x900-review.png',
    fullPage: false,
  });
});
