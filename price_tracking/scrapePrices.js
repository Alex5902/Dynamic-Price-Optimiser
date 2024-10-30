import puppeteer from "puppeteer";
import { savePrice } from "../database";

async function scrapeCompetitorPrice(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const price = await page.evaluate(() => document.querySelector('.price').innerText);
  await browser.close();
  
  await savePrice(productId, competitorName, parseFloat(price.replace('$', '')));
}
