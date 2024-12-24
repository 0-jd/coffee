import chalk from "chalk";
import extractor from "./extract.js";
import { scraper } from "./scraper.js";
import Timer from "./timer.js";
import { writeFile } from "./writeFile.js";
import ErrorLogger from "./errLoger.js";

const log = {
    info: (msg) => console.log(chalk.blue(msg)),
    success: (msg) => console.log(chalk.green(msg)),
    error: (msg) => console.log(chalk.red(msg)),
    warning: (msg) => console.log(chalk.yellow(msg)),
  };
  
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  length = length || 5;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }

  return result;
}

export const errCounter = {
  counts: 0,
  errors: [],
  
  // customInfo = { errURL: url, logPath: filepath, errMsg: error.message }
  update(customInfo) {
    this.counts++,
    this.errors.push(customInfo);
  }
}

const errorLogger = new ErrorLogger(true);

export {extractor, scraper, Timer, writeFile, log, delay, generateRandomString, errorLogger }