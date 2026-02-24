import { Page ,expect} from '@playwright/test';


export default class HomePage{
    
    private readonly LoginMessage = 'Logged In Successfully'

    constructor(private page : Page){

    }

    async verifyIfLoggedIn(){
        await expect(this.page.getByText(this.LoginMessage)).toBeVisible({timeout:15000});
    }
}