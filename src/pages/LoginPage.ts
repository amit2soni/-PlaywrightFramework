import { Page } from '@playwright/test';
import HomePage from './HomePage';
import logger
 from '../utils/LoggerUtil';
export default class LoginPage {
    private readonly usernameInput = '#username';
    private readonly passwordInput = '#password';
    private readonly loginButton = '#submit';
    private readonly practiceLinkSelector = "//a[text()='Practice']";
    private readonly testLoginSelector = "//a[text()='Test Login Page']";

    constructor(private page: Page) {}

    async navigateToLoginPage() {
        await this.page.goto('/');
        await this.page.locator(this.practiceLinkSelector).click();
        await this.page.locator(this.testLoginSelector).click();
        logger.info('Navigated to website URL')
    }

    async fillUsername(username: string) {
        await this.page.locator(this.usernameInput).fill(username);
        logger.info('Username has beed filled')
    }

    async fillPassword(password:string){
        await this.page.locator(this.passwordInput).fill(password);
        logger.info('Password has been filled')
    }

    async clickOnLoginButton(){
        await this.page.locator(this.loginButton)
            .click().catch((error)=>{
                console.log(error);
                logger.error(error)
                throw error;
            })
        logger.info('Clicked On Login Button')
        const homePage = new HomePage(this.page);
        return homePage;
    }
}