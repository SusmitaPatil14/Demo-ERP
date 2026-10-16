// @ts-check
import { test, expect } from '@playwright/test';

//update test
//Changes
//calling the LoginPage class from the page object model
import { LoginPage } from '../pages/LoginPage';
 test('login test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.openPage();
    await loginPage.login('Admin', 'admin123');
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
 });



// Using Test data from JSON file and locators from JSON file

//import fs from 'fs';
//import path from 'path';

/*const testDataPath = path.join(__dirname, '../Data/TestData.json');
const testData = JSON.parse(fs.readFileSync(testDataPath, 'utf8'));
const locatorPath = path.join(__dirname, '../Locator/login.json');
const locators = JSON.parse(fs.readFileSync(locatorPath, 'utf8'));

test('has title', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);
  const username = String(testData.username);
  const password = String(testData.password);
  await page.locator(locators.usernamelocator).fill(username);
  await page.locator(locators.passwordlocator).fill(password);
  await page.locator(locators.submitlocator).click();
  await page.pause();
});*/

/*test('has title', async ({ page }) => {
  await page.goto('https://demo.guru99.com/test/newtours/register.php');

  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);
  await page.locator('input[name="firstName"]').fill('Susmita');
  await page.locator('input[name="lastName"]').fill('Patil');
  //await page.locator('button[type="submit"]').click();
  await page.pause();
});

test('has title', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Register.html');
  await expect(page.locator('h2')).toHaveText('iRegister');

  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);
  //await page.locator('input[name="First Name"]').fill('Susmita');
  //await page.locator('input[name="Last Name"]').fill('Patil');
  await page.locator('input[name="radiooptions"][value="Male"]').click();
  await page.locator('input[type="checkbox"][value="Cricket"]').check();
  await page.locator('textarea[ng-model="Adress"]').fill('123 Main Street');
  await page.locator('#Skills').selectOption({ label: 'C++' });
  await page.locator('button[type="submit"]').click();
  await page.pause();
});

test('registers a user on Guru99', async ({ page }) => {
  await page.goto('https://demo.guru99.com/test/newtours/register.php');

  await page.locator('input[name="firstName"]').fill('Susmita');
  await page.locator('input[name="lastName"]').fill('Patil');
  await page.locator('input[name="phone"]').fill('9876543210');
  await page.locator('input[name="userName"]').fill('susmita.patil@example.com');
  await page.locator('input[name="address1"]').fill('123 Main Street');
  await page.locator('input[name="city"]').fill('Pune');
  await page.locator('input[name="state"]').fill('Maharashtra');
  await page.locator('input[name="postalCode"]').fill('411001');
  await page.locator('select[name="country"]').selectOption({ label: 'INDIA' });
  await page.locator('input[name="email"]').fill('susmita.patil@example.com');
  await page.locator('input[name="password"]').fill('Password123!');
  await page.locator('input[name="confirmPassword"]').fill('Password123!');
  await page.locator('input[name="submit"]').click();
});*/


