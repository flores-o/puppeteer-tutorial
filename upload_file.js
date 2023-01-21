const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({executablePath: '/opt/homebrew/bin/chromium',});
    
    const page = await browser.newPage();

    await page.goto('https://sketch.metademolab.com/canvas');

      // Select the div element
    const div = await page.$('.navbar-title');
    //const divNavbarTitleSelector = '.navbar-title';

     // Extract the text from the div element
    const text = await page.evaluate(div => div.textContent, div);

    console.log(text);
/*
    // Select the file input element and upload a file
    const fileInput = await page.$('input[type="file"]');
    await fileInput.uploadFile('figure.jpg');

    // Submit the form
    await page.evaluate(() => {
        document.querySelector('form').submit();
    });
    */
    await browser.close();
    console.log("let's gooo")
})();
