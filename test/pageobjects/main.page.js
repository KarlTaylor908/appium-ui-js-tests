//const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage extends Page {
    /**
     * define selectors using getter methods
     */
    get shoppingListTextBox () {
        return $('id=ShoppingListBox');
    }

    get shoppingListAddButton () {
        return $('id=AddShoppingListItem');
    }

        get allItems () {
        return $$('id=ItemRow');
    }

            get deleteButton () {
        return $('~DeleteShoppingListItem');
    }
    get noConnection(){
        return $('id=android:id/message');
    }

    
    async addShoppingListItem(itemText) {
    await this.shoppingListTextBox.setValue(itemText);
    await this.shoppingListAddButton.click();
}

  async getItemByText(expectedText) {
        const items = await this.allItems;


    for (const item of items) {
  await item.waitForDisplayed({ timeout: 10000 });
        
        const label = await item.$('id=ItemLabel');
        const text = await label.getText();
        if (text == expectedText) {
            return item;
        }
    }

        throw new Error(`Item with text "${expectedText}" not found`);
    }


    async clickItemByText(expectedText) {
await driver.waitUntil(
  async () => (await this.allItems).length > 0,
  {
    timeout: 30000,
    interval: 500,
    timeoutMsg: 'List stayed empty (0 items) for 30s'
  }
);

  const item = await this.getItemByText(expectedText);

  const label = await item.$('id=ItemLabel');

  await item.waitForDisplayed({ timeout: 10000 });

  item.click();

    }

async swipeLeftOnItem(percent = 0.75, itemText) {
    const el = await this.getItemByText(itemText);

    await el.waitForDisplayed({ timeout: 10000 });

    const location = await el.getLocation();
    const size = await el.getSize();

    await driver.execute('mobile: swipeGesture', {
        left: location.x - 50, 
        top: location.y -50,
        width: size.width,
        height: size.height,
        direction: 'left',
        percent: percent
    });
}

}


module.exports = new MainPage();
