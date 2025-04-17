import { expect, test } from '../../fixtures/chrome-extension';

test('toolbar appears', async ({ page, extensionId }) => {
  await page.goto('https://trykudo.com');

  const iconClickScript = `
    chrome.runtime.sendMessage({action: "iconClicked"});
  `;
  await backgroundPage.evaluate(iconClickScript);

  await page.addScriptTag({
    url: `chrome-extension://${extensionId}/kudo/index.iife.js`,
  });
  await expect(page.locator('body')).toHaveText('my-extension popup');
});
