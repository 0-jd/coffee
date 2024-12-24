import axios from "axios";
import { log } from "./utils.js";
const config =  {
  method: 'GET',
  proxy: {
    host: 'proxy-server.scraperapi.com',
    port: 8001,
    auth: {
      username: 'scraperapi.render=true',
      password: 'ee907f5dee83011bf4dd054d81211633'  
    },
    protocol: 'http'
  }
}

export async function scraper(url, config) {
    try {
      const response = await axios.get(url, config);
      return response.data;

    } catch (error) {
      // const filepath = `./${config.errPaths.scraperErr}/${errCounter.counts + 1}_raw.txt`
      // console.trace(error)
      // writeFile(filepath, error)
      log.error(`\n\n <<<<<<<<<< Failed to fetch URL: ${url}. Error has been logged. Reason: ${error.message} >>>>>>>>>> \n\n`);
      errCounter.update({errURL: url, logPath: filepath, errMsg: error.message})
      return null;
    }
  }
