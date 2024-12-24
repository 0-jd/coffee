import { extractor, scraper, errorLogger, log } from '../utils/utils.js';

/**
 * Fetch all product links from paginated pages on a website.
 * @param {string} scrapeURL - The scrape URL of the product page with `{ID}` as a placeholder for pagination.
 * @param {Object} siteConfig - Configuration for fetching paginated products, including `prdLinksList` to extract links.
 * @param {boolean} returnAllPages - Whether to return all valid product links from paginated pages or just the links from the latest page.
 * @returns {Promise<Array<string>>} - An array of extracted product links from all valid paginated pages.
 */
export async function fetchPaginatedProducts(scrapeURL, siteConfig, returnAllPages) {
  let pageID = 1;
  let hasMoreProducts = true;
  let allLinks = []; 
  let latestLinks = null; 

  while (hasMoreProducts) {
    try {

      const link = scrapeURL.replace('{ID}', pageID);
      const response = await scraper(link);
      if (!response) log.warning(`No response for product URL: ${link}`);
      
      const links = extractor(response, {
        results : siteConfig.site.prdLinksList
      }).results;

      if (links.length === 0) {
        hasMoreProducts = false;
      } else {
        latestLinks = links;
        allLinks.push(links);

        pageID++;
      }
    } catch (err) {

      errorLogger.logError('warning', `Paginated Fetch Error`, scrapeURL, err);
      hasMoreProducts = false; 
    }
  }

  if (returnAllPages) {
    return allLinks; // Return all valid paginated pages
  } else {
    return [latestLinks]; // Return only the latest valid pageas
  }
}
