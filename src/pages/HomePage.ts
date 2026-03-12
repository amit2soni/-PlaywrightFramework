import { Page ,expect} from '@playwright/test';
import logger from '../utils/LoggerUtil';
export default class HomePage{
    
    private readonly LoginMessage = 'Logged In Successfully'
    private readonly practiceLinkSelector = "//a[text()='Practice']";
    private readonly testExceptionSelector = "//a[text()='Test Exceptions']";
    constructor(private page : Page){

    }

    async verifyIfLoggedIn(){
        await expect(this.page.getByText(this.LoginMessage)).toBeVisible({timeout:15000});
        logger.info('Login Message Is Visible')
    }
}