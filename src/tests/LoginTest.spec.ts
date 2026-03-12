import { test ,expect} from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import { decrypt } from '../utils/CryptojsUils';
import { encryptEnvFile } from '../utils/EncryptEnvFile';
import logger from '../utils/LoggerUtil';
test('Login',async ({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.fillUsername(decrypt(process.env.user!))
    await loginPage.fillPassword(decrypt(process.env.password!))
    const homePage = await loginPage.clickOnLoginButton();
    await homePage.verifyIfLoggedIn();
    logger.info('Logged In Succesfully...')
})

