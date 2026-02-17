//const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DetailPage extends Page {
    /**
     * define selectors using getter methods
     */
    get quantity () {
        return $('id=ItemQuantity');
    }

    get categoryPicker () {
        return $('id=ItemCategory');
    }

    get categoryFruitItem () {
        return $("id=android:id/text1");
    }

        get price () {
        return $("id=ItemPrice");
    }
        get radioButtonSuperMarket () {
        return $("id=ItemSupermarket");
    }

        get stock () {
        return $("id=ItemStock");
    }

       get saveButton () {
        return $("id=ItemSave");
    }

           get saveMessage () {
        return $("id=android:id/message");
    }



        get okToSave () {
        return $("id=android:id/button2");
    }

async clickOnSlider( ) {

    const el = await this.quantity;

    await el.waitForDisplayed({ timeout: 10000 });

    const location = await el.getLocation();
    const size = await el.getSize();

    const x = Math.round(location.x + size.width / 2);
    const y = Math.round(location.y + size.height / 2);

    await driver.execute('mobile: clickGesture', { x, y });
    
}

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new DetailPage();
