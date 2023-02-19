#! /usr/bin/env node

const puppeteer = require("puppeteer")

// 主要原理在于使用xpath获取html页面dom元素，脚本代替小手自动触发点击事件
async function giteeUpdate(pwd) {
  const browser = await puppeteer.launch({
    // 此处可以使用 false 有头模式进行调试, 调试完注释即可
    headless: true
  })
  const page = await browser.newPage()
  
  await page.goto("https://gitee.com/login")
  
  // 1. 获取账号input，自动输入
  let accountElements = await page.$x('//*[@id="user_login"]') 
  //  🚨需要设置为自己的gitee账户🚨
  await accountElements[0].type("Yu-Qi-hang")
  
  // 2. 获取密码input，自动输入
  let pwdElements = await page.$x('//*[@id="user_password"]')
  // 🚨需要设置自己的gitee密码🚨
  await pwdElements[0].type(pwd)
  
  // 3. 获取登录按钮，触发点击事件
  let loginButtons = await page.$x('//*[@class="git-login-form-fields"]/div[4]/input')
  // await loginButtons[0].click()
  await loginButtons[0].evaluate((h)=>{h.click()})
  // 4. 等待登录成功
  await page.waitForTimeout(1000)
  // 🚨需要设置自己的gitee pages页面🚨
  await page.goto("https://gitee.com/Yu-Qi-hang/yu-qi-hang/pages")
  
  // await page.waitForTimeout(2000)
  // 5. 监听触发的确认弹框，并点击确认
  page.on("dialog", async (dialog) => {
    console.log("Confirm update")
    dialog.accept()
  })
  
  // 6. 点击更新按钮，并弹出确认弹窗
  let updateButtons = await page.$x('//*[@id="pages-branch"]/div[6]')
  // await updateButtons[0].click()
  await updateButtons[0].evaluate((h)=>{h.click()})
  // await console.log(updateButtons)
  
  //7. 确认是否更新
  await page.waitForTimeout(1000)
  // 获取更新状态标签
  deploying = await page.$x('//*[@id="pages_deploying"]')
  if (deploying.length > 0) {
    console.log("Updating...")
  } else {
    console.log("Fail to update")
  }
  await page.waitForTimeout(500)
  // 8.更新完毕，关闭浏览器
  browser.close()
}

const fs = require('fs');


fs.readFile('./temp.json', 'utf-8', (err, data) => {
  if(err)console.log(err)
  else{
    giteeUpdate(data)
  }
});

