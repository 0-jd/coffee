# Coffee - A Quick & Dirty Web Scraper

Hey there! 👋 This is "Coffee," a little side project I made to grab product info from websites. It's basically a quick way to fetch HTML and pull out some data. Think of it like a really fast, but kinda basic, way to see what's on a webpage.

## What It Does

Coffee goes to a webpage, grabs the HTML, and then tries to find the info you want (like product names, prices, etc.) using CSS selectors. It's pretty simple and gets the job done, but...

## Important Stuff & Limitations

*   **Static HTML Only:** This thing can only handle simple web pages. If the page loads its content with JavaScript after the initial load (like those fancy infinite scroll pages), Coffee won't see it. It's a static HTML grabber, not a dynamic one.
*   **Fast, but Not Perfect:** It's fast because it's basic, but that also means it's not great for super complex sites. Think of it as a quick caffeine boost, not a carefully crafted cup.
*   **Hobby Project:** This was a fun learning experience for me. I've since moved on to a different scraper and this could have a few bugs lurking around.
*  **Might Need Tweaks:**  You might need to fiddle around with the config file `config/sitesConfig.js` to make this work for your particular website, especially with CSS selectors.

## How to Use It (If You Dare!)

1.  **Clone this thing:**
    ```bash
    git clone https://github.com/Dark-Rays/coffee.git
    cd coffee
    ```
2.  **Install the stuff it needs:**
    ```bash
    npm install
    ```
3.  **Tweak `config/sitesConfig.js`:** This is where you tell Coffee where to go, what categories to look in, and what data to pull.
4.  **Run it:**
    ```bash
    npm start
    ```

The scraped data is output as JSON files inside the `/storage/raw/` folder. Errors and logs are stored in `/storage/errors/`.

## What's Next

I realized that this project was not working as intended and the websites were full of dynamic content, so I've moved on to a more powerful crawler that handles dynamic content, called [blade](https://github.com/0-jd/blade). It uses Playwright and Crawlee which can be a better solution if you want to scrape more complex websites.

## Disclaimer

This project was made for fun. I moved to a different scraping project, this one could need some bug fixes to work as it was originally intended. Use at your own risk and be nice to websites!

Feel free to tinker around, but please remember it was a learning experiment!