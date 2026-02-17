 const DetailsPage = require('../pageobjects/Details.page');
const MainPage = require('../pageobjects/main.page');

 describe('Delete Item', () => {
  it('Should create the Item', async () => {

  await MainPage.addShoppingListItem('Bananas')

  await MainPage.clickItemByText('Bananas');


  await DetailsPage.categoryPicker.waitForDisplayed({ timeout: 10000 });
  await DetailsPage.categoryPicker.click();

  await DetailsPage.categoryFruitItem.waitForDisplayed({ timeout: 10000 });
  await DetailsPage.categoryFruitItem.click();

  await DetailsPage.clickOnSlider();

  await DetailsPage.price.waitForDisplayed({ timeout: 10000 });
  await DetailsPage.price.setValue('1.50');

  await DetailsPage.stock.waitForDisplayed({ timeout: 10000 });
  await DetailsPage.stock.click();

  await DetailsPage.radioButtonSuperMarket.waitForDisplayed({ timeout: 10000 });
  await DetailsPage.radioButtonSuperMarket.click();

  await DetailsPage.saveButton.waitForDisplayed({ timeout: 10000 });
  await DetailsPage.saveButton.click();

  await DetailsPage.okToSave.waitForDisplayed({ timeout: 10000 });
  await DetailsPage.okToSave.click();


  await MainPage.swipeLeftOnItem(0.75, 'Bananas');

  await MainPage.deleteButton.waitForDisplayed({ timeout: 30000 });

  await MainPage.deleteButton.click();

  const deletedItem = await MainPage.getItemByText('Bananas').catch(() => null);

  await expect(deletedItem).toBeNull();
  });
});