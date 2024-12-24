import { fetchLinks } from './fetchLinks.js';
import { fetchProducts } from './fetchProducts.js';
import { writeFile, errorLogger, scraper, log } from '../utils/utils.js';
import config from '../../config/config.js';
import { fetchPaginatedProducts } from './fetchPaginated.js';

export async function processCategory(siteConfig, category, timer) {
  const url = siteConfig.site.scrapeURL.replace('{CATEGORY}', category);

  try {
    let responses = [];
    if (siteConfig.config?.pageIdMode) {

      responses = await fetchPaginatedProducts(
        url,
        siteConfig,
        siteConfig.config?.returnAllPages
      );
    } else {
      const response = await scraper(url);
      if (!response) log.warning(`No response for URL: ${url}`);
      responses = [response]; 
    }

    if (!responses.length) log.warning(`No valid responses fetched for URL: ${url}`);

    timer.start(category);

    let allLinks = [];
    for (const [index, response] of responses.entries()) {
      const links = fetchLinks(response, siteConfig.site.prdLinksList, siteConfig.site.baseURL, siteConfig.config.pageIdMode);
      if (links.length) {
        allLinks.push(...links);
      } else {
        log.warning(`No links found in a response for category: ${category}. Response Index: ${index}.`);
      }
    }
    

    if (!allLinks.length) {
      log.warning(`No links found for category: ${category}. URL: ${url}`);
      return;
    }

    if (siteConfig.config?.maxPrdScrape && allLinks.length > siteConfig.config.maxPrdScrape) {
      allLinks = allLinks.slice(0, siteConfig.config.maxPrdScrape);
      log.info(`[MAX SCRAPE LIMIT FOUND] - Limiting scraping to ${allLinks.length} products ...`);
    } else {
      log.info(`Extracting product data for ${allLinks.length} links ...`);
    }


    const productData = await fetchProducts(allLinks, siteConfig);


    const validProducts = productData.filter((data) => data !== null);
    validProducts.forEach((data, index) => {
      const filePath = `./${config.writePaths.prdRawData}/${siteConfig.site.name}/${category}/product_${index + 1}.json`;
      writeFile(filePath, JSON.stringify(data, null, 2));
    });

    timer.stop(category);
  } catch (err) {
    errorLogger.logError(
      'critical',
      `Category Processing Error: ${category}`,
      siteConfig.site.name,
      err
    );
    throw err; 
  }
}
