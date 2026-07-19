import { test, expect } from '@playwright/test';

test('homepage has expected title and hero section', async ({ page }) => {
  await page.goto('/');

  // Verify the hero section headline is visible
  // Using a regex to match the headline split or whole
  await expect(page.locator('text=I optimize systems')).toBeVisible();
  
  // Verify the system status pill
  await expect(page.locator('text=System Status: Optimized')).toBeVisible();
});

test('terminal opens and responds to help command', async ({ page }) => {
  await page.goto('/');

  // Locate the terminal trigger button (bottom right)
  // We can look for the button containing the terminal icon (by looking for a specific class or SVG)
  // Let's just click the button in the bottom right corner
  const terminalButton = page.locator('button.glass').last(); // or specific selector
  
  // Click by specific selector if needed, or just evaluate
  await page.evaluate(() => {
    const btns = document.querySelectorAll('button');
    btns[btns.length - 1].click();
  });

  // Verify terminal opens by checking for guest@ankit-os
  await expect(page.locator('text=guest@ankit-os ~')).toBeVisible();

  // Type "help" and press enter
  const input = page.locator('input[placeholder="Type a command..."]');
  await input.fill('help');
  await input.press('Enter');

  // Verify help output
  await expect(page.locator('text=Available commands:')).toBeVisible();
});
