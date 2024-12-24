import { extractor } from '../utils/utils.js';

/**
 * Extracts product links from the response or returns pre-fetched links directly if `pageMode` is enabled.
 * @param {string | Array<string>} response - The HTML response or pre-fetched links array.
 * @param {Object} prdLinksList - The configuration object for extracting product links.
 * @param {string} baseURL - The base URL to prepend to relative links.
 * @param {boolean} pageMode - Whether to directly use pre-fetched links instead of extracting from response.
 * @returns {Array<string>} - An array of absolute product links.
 */
export function fetchLinks(response, prdLinksList, baseURL, pageMode) {
  if (pageMode) {
    if (!Array.isArray(response)) return [];
    return response.map((link) => `${baseURL}${link}`);
  }


  const { results } = extractor(response, { results: prdLinksList });
  if (!Array.isArray(results)) return [];

  return results.map((link) => `${baseURL}${link}`);
}
