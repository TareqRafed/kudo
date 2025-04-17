import { test, expect } from '@playwright/test';

test.describe('Login Tests', () => {
  test.beforeEach(() => {});

  test('Google Login', async () => {
    // TBD
  });

  test('GitHub Login', async () => {
    // TBD
  });

  test('Email and Password Login', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('button', { name: 'Get Started' }).click();

    await page.fill('input[name="email"]', 'test@test.com');
    await page.fill('input[name="password"]', 'test@test');

    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL('/~');
  });
});

test.describe('User can register', () => {
  test('Email register', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('button', { name: 'Get Started' }).click();
    await page.getByRole('button', { name: 'Sign up' }).click();

    await page.fill('input[name="email"]', 'test@test.com');
    await page.fill('input[name="password"]', 'test@test');

    await page.getByRole('button', { name: 'Create Account' }).click();

    await expect(page).toHaveURL('/complete-registeration');
  });
});
