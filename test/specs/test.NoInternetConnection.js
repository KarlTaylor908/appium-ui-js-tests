 const DetailsPage = require('../pageobjects/Details.page');
const MainPage = require('../pageobjects/main.page');

    describe('Create Item With No Internet Connection', () => {
     

    beforeEach(async () => {
        await driver.execute('mobile: setConnectivity', {
            airplaneMode: true,
            wifi: false,
            data: false
            });
    });
   
    it('Should get blocked from creating item and message shows', async () => {
    await MainPage.addShoppingListItem('Oranges')

    const noConnectionMessage = await MainPage.noConnection;

    await expect(noConnectionMessage).toHaveText('No Internet');
;

    await browser.pause(2000);
    });

    afterEach(async () => {
     await driver.execute('mobile: setConnectivity', {
            airplaneMode: false,
            wifi: true,
            data: true
    });
});
    });