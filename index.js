const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');

console.log('Bem vindo ao Consulta de Saldo');

async function robo(){
    const browser = await puppeteer.launch({headless: true});

    const page = await browser.newPage();
   
    //api de SMS nexmo
    await page.goto('https://dashboard.nexmo.com/sign-in')

    const email = readlineSync.question('Informe seu Email: ');
    const senha = readlineSync.question('Informe sua senha: ');
    await page.type('#email', email )
    await page.type('#password' , senha)
 
    await page.click('#btn_login');

    await page.waitForNavigation();

    // const resultado = await page.evaluate(() => {
    //     return document.querySelector("b#user_balance.display-balance");
    // });
    const text = await page.$eval('h4', Element =>Element.textContent )
    

    console.log(`Resultado: ` + text + "========================================")
    await browser.close();


}
robo();