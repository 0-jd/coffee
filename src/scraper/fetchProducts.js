import { extractor, scraper, errorLogger, log, writeFile } from '../utils/utils.js';

export async function fetchProducts(links, siteConfig) {
  const productKeys = Object.keys(siteConfig.prdclass);
  const variantKeys = Object.keys(siteConfig.variantsClass);

  return await Promise.all(
    links.map(async (link) => {
      const data = { link };
      try {
        const response = await scraper(link);
        if (!response) log.warning(`No response for product URL: ${link}`);


        writeFile('sex.txt', response)
        productKeys.forEach((key) => {
          const results = extractor(response, { [key]: siteConfig.prdclass[key] });
          if (results && results[key]) data[key] = results[key];
        });

        const variants = {};
        const hasValidVariants = siteConfig.variantsClass?.sizes[0]?.selector || siteConfig.variantsClass?.materials[0]?.selector;

        if (hasValidVariants) {
          variantKeys.forEach((key) => {
            const results = extractor(response, { [key]: siteConfig.variantsClass[key] });
            if (results && results[key]) variants[key] = results[key];
          });
        }

        if (Object.keys(variants).length > 0) {
          data.variants = variants;
        }

        return data;
      } catch (err) {
        errorLogger.logError('warning', `Product Fetch Error`, link, err);
        return null; 
      }
    })
  );
}
