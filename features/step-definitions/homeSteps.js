import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'
import {home_locators} from '../locators/homeLocators.js';
import { platform } from '../../wdio.conf.js';

Given(/^The user sees (.*) slogan$/, async (string) => {
  const sloganTextLocator = home_locators.sloganText[platform];
  const sloganText = driver.$(sloganTextLocator);
  await expect(sloganText).toHaveText(string)
});

