/*import { test, expect } from '@playwright/test';

test('validates and enters IRCTC train search details', async ({ page }) => {
  await page.goto('https://www.irctc.co.in/nget/train-search');

  const englishButton = page.locator('button').filter({ hasText: 'English' });
  if (await englishButton.isVisible().catch(() => false)) {
    await englishButton.click();
  }
  await expect(page.getByRole('heading', { name: 'Welcome to IRCTC' })).toBeHidden();

  await expect(page).toHaveTitle(/IRCTC/);

  const fromStation = page.getByRole('searchbox', {
    name: 'Enter From station. Input is Mandatory.'
  });
  const toStation = page.getByRole('searchbox', {
    name: 'Enter To station. Input is Mandatory.'
  });
  const journeyDate = page.getByRole('textbox').first();

  await expect(fromStation).toBeVisible();
  await expect(toStation).toBeVisible();
  await expect(journeyDate).toBeVisible();

  await fromStation.fill('New Delhi');
  await page.getByText('New Delhi', { exact: false }).first().waitFor();
  await fromStation.press('Enter');
  await toStation.fill('Mumbai');
  await page.getByText('Mumbai', { exact: false }).first().waitFor();
  await toStation.press('Enter');
  await journeyDate.fill('30/09/2026');

  await page.getByText('All Classes', { exact: true }).click();
  await page.getByText('AC 2 Tier (2A)', { exact: true }).click();
  await page.getByText('GENERAL', { exact: true }).first().click();
  await page.getByText('GENERAL', { exact: true }).last().click();

  await page.getByText('Person With Disability Concession', { exact: true }).click();
  await expect(page.locator('#concessionBooking')).toBeChecked();
  await page.getByRole('button', { name: 'OK', exact: true }).click();
  await page.getByText('Flexible With Date', { exact: true }).click();
  await expect(page.getByRole('checkbox', {
    name: 'Check to fetch trains runs on other days than you are searching for.'
  })).toBeChecked();

  await expect(page.getByRole('button', { name: 'Search Trains' })).toBeVisible();
});*/