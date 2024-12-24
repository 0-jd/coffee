// Depreciated. New config availabe Do not use this file and it wont be used either way. i just like keeping it here for reference.
// The new config is in ./sitesConfig.js

const siteLists = [
    {
        name: "Quince",
        baseURL: "https://www.quince.com",
        scrapeURL: "https://www.quince.com/women/jewelry/{CATEGORY}?filter=prices%3D%24100-200%2C%2475-100%2C%2450-75%2C%2425-50%2C%24200-300%2C%24300-400%2C%24400-500%2C%24500-600&sortBy=PRICE_LOW_TO_HIGH",
        prdListClass: "subCollectionSection-module--productCardsWrapper--91343",
        prdClass: "link-module--wrapper--94a7c",
        titleClass: "productInfo-module--container__header__text--9c624",
        mediaContainerClass: "sliderImages-module--container__left__slider--73ab9",
        descClass: "productForm-module--container__content--a6ef5",
        detailsClass: "productDetails-module--productDetails__textContent--2757e",
        priceTagClass: "ProductInfoPrice-module--priceWrapper__main__value__qp--81341",
        categories: ["earrings-all", "rings-all", "necklaces-all", "bracelets-all"],
        maxPrdScrape: 2,
        maxCatScrape: 0,
      },
      {
        name: "Stone & Strand",
        baseURL: "https://www.stoneandstrand.com/",
        scrapeURL: "https://www.stoneandstrand.com/collections/{CATEGORY}?price=250:500+100:250+0:100&page=10&sort_by=price-asc",
        prdListClass: "list__grid",
        prdClass: "product-card__description",
        titleClass: "product__name",
        mediaContainerClass: "product__thumbs-wrapper",
        descClass: "product__description-content",
        detailsClass: "",
        priceTagClass: "product__price--original",
        categories: ["earrings", "rings", "necklaces", "bracelets", "charms"],
        maxPrdScrape: 5,
        maxCatScrape: 0,
      }
]

export default siteLists;

const configTemplate = [
    {
        name: "",
        baseURL: "",
        scrapeURL: "",
        prdListClass: "",
        prdClass: "",
        titleClass: "",
        mediaContainerClass: "",
        descClass: "",
        detailsClass: "",
        priceTagClass: "",
        categories: [],
        maxPrdScrape: 0,
        maxCatScrape: 0,
      }
]