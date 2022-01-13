const assert = require("assert");
const expect = require("chai");
const { Given, When , Then} = require("cucumber");
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
      "headless" : false,
      "slowMo" : 50
  });
  const page = await browser.newPage();

  await page.setViewport({
      "width": 1440,
      "height": 1000
  });


  Given('go to modanisa website', function () {
    await page.goto('https://www.modanisa.com/');
    expect(url).to.include('modanisa');
    expect(browser).toHaveUrl('https://www.modanisa.com/');
  });
  

  Given('click login section', function () {
    await page.click('input[class="gaClickEvent"]'); 
  });



  Given('go to modanisa login website', function () {
    await page.goto('https://www.modanisa.com/membership/login/?return=%2F');
    expect(url).to.include('login');
    expect(browser).toHaveUrl('https://www.modanisa.com/membership/login/?return=%2F');
  });


  Given('enter phone', function () {
    await page.type('[name=phone]', 'xyz');
    const phonenumber = await page.type('[name=phone]');
    expect(phonenumber).to.be.a('number');
    expect(phonenumber).to.have.lengthOf(10) //.have.been

  });

  Given('enter password', function () {
    await page.type('[name=password]', 'mypassword');
    const password = await page.type('[name=password]');
    expect(password).to.have.length.above(5);
  });



  When('press enter', function () {
    await page.keyboard.press('Enter' , {delay:2000});
  });



  Then('verify succes message', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';

    
  });

  await page.screenshot({ path: 'example.png' });


  await browser.close();

})();



         