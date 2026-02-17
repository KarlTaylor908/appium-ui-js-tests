
 const DetailsPage = require('../pageobjects/Details.page');
const MainPage = require('../pageobjects/main.page');

 describe('Add Item', () => {
  it('Item should get added with details', async () => {

 
  await MainPage.addShoppingListItem('Apples')

  await MainPage.clickItemByText('Apples');

  
  await DetailsPage.categoryPicker.waitForDisplayed({ timeout: 10000 });
  await DetailsPage.categoryPicker.click();

  await DetailsPage.categoryFruitItem.waitForDisplayed({ timeout: 10000 });
  await DetailsPage.categoryFruitItem.click();

  await DetailsPage.clickOnSlider();

  await DetailsPage.price.waitForDisplayed({ timeout: 10000 });
  await DetailsPage.price.setValue('2.99');

  await DetailsPage.stock.waitForDisplayed({ timeout: 10000 });
  await DetailsPage.stock.click();

  await DetailsPage.radioButtonSuperMarket.waitForDisplayed({ timeout: 10000 });
  await DetailsPage.radioButtonSuperMarket.click();

  await DetailsPage.saveButton.waitForDisplayed({ timeout: 10000 });
  await DetailsPage.saveButton.click();

  const saveMessage = await DetailsPage.saveMessage;

  await expect(saveMessage).toHaveText('Item saved successfully!');

  });
});