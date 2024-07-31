const setup = require('./setup');
const locators = require('./locators');
const assert = require('assert');
const getPlatformAndUdid = require('./platform');

async function runTest() {
const { platform, udid } = getPlatformAndUdid();
const driver = await setup(platform, udid);
  try {
    const sloganTextLocator = locators.sloganText[platform];
    const sloganText = await driver.$(sloganTextLocator);
    assert.strictEqual(sloganText, 'Demo app for the appium-boilerplate');

  } finally {
    await driver.pause(1000);
    await driver.deleteSession();
  }
}


runTest().catch(console.error);
