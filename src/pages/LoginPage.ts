import { Page } from '@playwright/test';
import HomePage from './HomePage';
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
    }

    async fillUsername(username: string) {
        await this.page.locator(this.usernameInput).fill(username);
    }

    async fillPassword(password:string){
        await this.page.locator(this.passwordInput).fill(password);
    }

    async clickOnLoginButton(){
        await this.page.locator(this.loginButton)
            .click().catch((error)=>{
                console.log(error);
                throw error;
            })
        const homePage = new HomePage(this.page);
        return homePage;
    }
}