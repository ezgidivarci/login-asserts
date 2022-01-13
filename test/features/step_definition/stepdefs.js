const assert = require("assert");
const expect = require("chai");
const { Given, When , Then} = require("@cucumber/cucumber");
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
      "headless" : false,
      "slowMo" : 500
  });
  const page = await browser.newPage();

  await page.setViewport({
      "width": 1440,
      "height": 1000
  });


  Given('go to modanisa website', async () => {
    await page.goto('https://www.modanisa.com/');
    
  });
   // expect(url).to.include('modanisa');
    //expect(browser).toHaveUrl('https://www.modanisa.com/');
  

  Given('click login section', async () => {
    await page.click('input[class="gaClickEvent"]'); 
  });



  Given('go to modanisa login website', async () => {
    await page.goto('https://www.modanisa.com/membership/login/?return=%2F');
    expect(url).to.include('login');
    expect(browser).toHaveUrl('https://www.modanisa.com/membership/login/?return=%2F');
  });


  Given('enter phone', async () => {
    await page.type('[name=phone]', 'xyz');
    const phonenumber = await page.type('[name=phone]');
    expect(phonenumber).to.be.a('number');
    expect(phonenumber).to.have.lengthOf(10) //.have.been

  });

  Given('enter password', async () => {
    await page.type('[name=password]', 'mypassword');
    const password = await page.type('[name=password]');
    expect(password).to.have.length.above(5);
  });



  When('press enter', async () => {
    await page.keyboard.press('Enter' , {delay:2000});
  });



  Then('verify succes message', async () => {
    await page.goto('https://www.modanisa.com/');
    
  });

  await page.screenshot({ path: 'example.png' });


  await browser.close();

})();



         