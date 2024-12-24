import { writeFile } from './writeFile.js';
import config from '../../config/sitesConfig.js';

class ErrorLogger {
  constructor(debugMode = false) {
    this.debugMode = debugMode;
    this.errCounter = {
      critical: { count: 0, errors: [] },
      warning: { count: 0, errors: [] },
      info: { count: 0, errors: [] },
      uncategorized: { count: 0, errors: [] }, // Ensure "uncategorized" always exists
    };
  }

  /**
 * Logs an error and categorizes it by severity level. Saves the error details to a file.
 * @param {string} level - The severity level of the error (e.g., "critical", "warning", "info").
 * @param {string} label - A short description of the context where the error occurred.
 * @param {string} locator - The file or module name where the error originated.
 * @param {Error} error - The actual error object containing details like message and stack trace.
 * @returns {void}
 */
  logError(level, label, locator, error) {
    const { message, stack } = error;
    const timestamp = new Date().toISOString();
    const errorObj = { locator, level, label, message, stack, timestamp };

    if (!this.errCounter[level]) {
      console.warn(`Provided error level "${level}" does not exist. Adding it to the object as "uncategorized"...`);
      console.log('Consider adding the missing level to the error logger: [critical | warning | info]');
      level = 'uncategorized'; 
    }


    this.errCounter[level].count++;
    this.errCounter[level].errors.push(errorObj);


    if (this.debugMode) {
      console.warn(`[DEBUG MODE] [${level}] | ${label} | Error from: ${locator} at ${timestamp}: ${message}`);
      console.trace(error); 
    } else {
      console.error(`[${level}] | ${label} | Error From: ${locator} at ${timestamp}: ${message}`);
      console.log('Set Debug mode to "true" for more detailed error logs.');
    }


    const logFilePath = `./${config.err[level]}/${locator}_${Date.now()}.json`;
    writeFile(logFilePath, JSON.stringify(errorObj, null, 2));
  }

  flush() {
    console.log('Error Summary:', this.errCounter);
    writeFile('./logs/error_summary.json', JSON.stringify(this.errCounter, null, 2));
  }
}

export default ErrorLogger;
