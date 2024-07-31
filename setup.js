const { remote } = require('webdriverio');

const androidCapabilities = {
  platformName: 'Android',
  'appium:platformName': 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:appActivity': "MainActivity",
  'appium:appPackage': "com.wdiodemoapp",
};

const iosCapabilities = (udid) => ({
  platformName: 'iOS',
  'appium:platformName': 'iOS',
  'appium:automationName': 'XCUITest',
  'appium:bundleId': "org.reactjs.native.example.wdiodemoapp",
  'appium:udid': udid,
});

async function setup(platform, udid) {
  const capabilities = platform === 'ios' ? iosCapabilities(udid) : androidCapabilities;
  const wdOpts = {
    hostname: process.env.APPIUM_HOST || 'localhost',
    port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
    logLevel: 'info',
    capabilities,
  };

  const driver = await remote(wdOpts);
  return driver;
}

module.exports = setup;
