const { Given} = require('@cucumber/cucumber');
const assert = require('assert');
const locators = require('../locators/homeLocators');


Given("The user sees {string} slogan", function (string) {
  const sloganTextLocator = locators.sloganText[platform];
  const sloganText = driver.$(sloganTextLocator);
  assert.strictEqual(sloganText, string);
});

