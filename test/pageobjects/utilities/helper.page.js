const Page = require('../page');

class Helper extends Page {


async  setAirplaneMode(enabled) {
  await driver.execute('mobile: shell', {
    command: 'settings',
    args: ['put', 'global', 'airplane_mode_on', enabled ? '1' : '0']
  });

  await driver.execute('mobile: shell', {
    command: 'am',
    args: ['broadcast', '-a', 'android.intent.action.AIRPLANE_MODE']
  });

  await driver.pause(1000);
}}

module.exports = new Helper();