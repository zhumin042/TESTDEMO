const {Builder, By, Key, until} = require('selenium-webdriver');

let driver = new Builder()
    .forBrowser('firefox')
    .build();

driver.get('http://www.baidu.com');
driver.findElement(By.name('wd')).sendKeys('webdriver', Key.RETURN);
driver.wait(until.titleIs('webdriver - 百度搜索'), 1000);
driver.quit();