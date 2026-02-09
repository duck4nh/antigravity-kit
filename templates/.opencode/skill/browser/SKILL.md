---
description: Browser automation with Puppeteer for testing and scraping
triggers:
  - browser automation
  - puppeteer
  - screenshot
  - web scraping
  - headless browser
---

# Browser Automation Skill

Automate browser interactions using Puppeteer.

## Capabilities

- Launch headless/headed browser
- Navigate to URLs
- Take screenshots
- Execute JavaScript in page context
- Click elements, fill forms
- Wait for selectors/navigation

## Quick Start

```javascript
// start.js - Launch browser
const puppeteer = require('puppeteer');
const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();

// nav.js - Navigate
await page.goto('https://example.com');
await page.waitForSelector('.content');

// screenshot.js - Capture
await page.screenshot({ path: 'screenshot.png', fullPage: true });

// eval.js - Execute JS
const result = await page.evaluate(() => {
  return document.title;
});

// pick.js - Extract data
const text = await page.$eval('.selector', el => el.textContent);
const links = await page.$$eval('a', els => els.map(e => e.href));

// Cleanup
await browser.close();
```

## Common Tasks

### Form Filling
```javascript
await page.type('#email', 'user@example.com');
await page.type('#password', 'secret');
await page.click('button[type="submit"]');
await page.waitForNavigation();
```

### Wait Strategies
```javascript
await page.waitForSelector('.element');
await page.waitForTimeout(1000);
await page.waitForFunction(() => window.loaded);
await page.waitForNetworkIdle();
```

### Screenshot Options
```javascript
await page.screenshot({
  path: 'full.png',
  fullPage: true,
  type: 'png', // or 'jpeg'
  quality: 80, // jpeg only
});
```

## Setup

```bash
npm install puppeteer
```

## Notes
- Use `headless: 'new'` for latest headless mode
- Set viewport: `page.setViewport({ width: 1280, height: 720 })`
- Handle popups with `page.on('dialog', dialog => dialog.accept())`
