import sitesConfig from '../config/sitesConfig.js';
import { delay, log, Timer } from './utils/utils.js';
import { processCategory } from './scraper/processCategory.js';

(async () => {
  const timer = new Timer();

  for (const siteConfig of sitesConfig) {
    if(siteConfig.config?.skipSite) {
      log.warning(`[SKIP SITE IS SET TO TRUE]. Skipping site : ${siteConfig.site.name}`);
      continue;
    }
    
    log.info(`Now scraping: ${siteConfig.site.name}`);

    for (const category of siteConfig.config.categories) {
      log.info(`Now Processing Category: ${category}`);
      
      try {
        await processCategory(siteConfig, category, timer);
      } catch (err) {
        log.error(`Failed to process category "${category}" for site "${siteConfig.site.name}". Reason: ${err.message}`);
      }

      await delay(1000); // 1-second delay
    }
    log.info("\n-----------------------------------------------------------------");
    log.info(`Succesfuly extracted data from ${siteConfig.site.name}. Scraping other sites (if any) .... \n\n\n`);
    log.info("-----------------------------------------------------------------\n")
  }
})();
