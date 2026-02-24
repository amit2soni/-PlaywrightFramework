import { test ,expect} from '@playwright/test';
import LoginPage from '../pages/LoginPage';

test('Login',async ({page})=>{
   
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.fillUsername('student')
    await loginPage.fillPassword('Password123')

    const homePage = await loginPage.clickOnLoginButton();
    await homePage.verifyIfLoggedIn();
})

