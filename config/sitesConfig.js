const config = [
    // {
    //   site: {
    //     name: "Quince",
    //     type: "Jewelry",
    //     baseURL: "https://www.quince.com",
    //     scrapeURL: "https://www.quince.com/women/jewelry/{CATEGORY}?filter=prices%3D%24100-200%2C%2475-100%2C%2450-75%2C%2425-50%2C%24200-300%2C%24300-400%2C%24400-500%2C%24500-600&sortBy=PRICE_LOW_TO_HIGH",
    //     prdLinksList: [{selector: ".collectionPage-module--subcollection_wrapper--39741 .link-module--wrapper--94a7c" , value: "href"}],
    //   },
    //   prdclass: {
    //     title: {selector: ".productInfo-module--container__header__text--9c624" , value: ""},
    //     mediaContainer: [{selector: ".sliderImages-module--container__left__slider--73ab9 img" , value: "src"}],
    //     description: [{selector: ".productForm-module--container__content--a6ef5 p" , value: ""}],
    //     details: [{selector: ".productDetails-module--productDetails__textContent--2757e" , value: ""}],
    //     basePrice: {selector: ".sales_price_selector_for_force_update", value: ""},
    //   },
    //   variantsClass: {
    //     sizes: [{selector: ".optionSelector-module--optionListWrapper__withRowPadding--d9962 span", value: ""}],
    //     prices: [{selector: "", value : ""}],
    //     materials: [{ selector: "", value: ""}],
    //     scriptContent: {selector: "", value: ""},
    //     other: [{selector: "", value: ""}],
    //   },
    //   config : {
    //     categories: ["earrings-all", "rings-all"], // ["earrings-all", "rings-all", "necklaces-all", "bracelets-all"] 
    //     maxPrdScrape: 2,
    //     pageIdMode: false,
    //     returnAllPages: false,
    //     skipSite: true,
    //   }
    // },
    {
      site: {
        name: "Dorsey",
        type: "Jewelry",
        baseURL: "https://www.shopdorsey.com",
        scrapeURL: "https://www.shopdorsey.com/collections/{CATEGORY}?page={ID}&sort_by=price-ascending&",
        prdLinksList: [{selector: ".ProductList--grid  a" , value: "href"}],
        // ProductList ProductList--grid ProductList--removeMargin Grid
      },
      prdclass: {
        //Pagination__NavItem Link Link--primary
        title: {selector: ".ProductMeta h1" , value: ""},
        imgContainer: [{selector: ".Product__Gallery img" , value: "src"}],
        vidContainer: [{selector: "Product__Gallery video source", value: "src"}],
        description: [{selector: ".ProductMeta__Description  .Rte" , value: ""}],
        details: {selector: ".ProductMeta__Accordion .ProductMeta__AccordionDescription" , value: ""},
        basePrice: {selector: ".ProductMeta__PriceList span", value: ""},
      },
      variantsClass: {
        sizes: [{selector: "", value: ""}],
        prices: [{selector: "", value : ""}],
        materials: [{selector: "", value : ""}],
        scriptContent: {selector: "", value: "innerHTML"},
        other: [{selector: "", value : ""}],
      },
      config : {
        categories: ['rivieres-1', 'necklaces', 'bracelets', 'earrings', 'rings', 'dorsey-septum-cuffs', ],
        maxPrdScrape: 0,
        pageIdMode: true,
        returnAllPages: true,
        skipSite: false,
      }
    },
    {
      site: {
        name: "David Yuman",
        type: "Jewelry",
        baseURL: "https://www.davidyurman.com/",
        scrapeURL: "https://www.davidyurman.com/womens/{CATEGORY}?pmax=600.00&pmin=10.00&start=0&sz=500",
        prdLinksList: [{selector: ".product-grid a" , value: "href"}],
      },
      prdclass: {
        title: {selector: ".product-name" , value: ""},
        imgContainer: [{selector: ".js-image-gallery a" , value: "href"}],
        vidContainer: [{selector: ".js-image-gallery .pdp-video", value: "data-lazy-video"}],
        description: [{selector: ".description-and-detail" , value: "innerHTML"}],
        //designer-notes-container collapse show
        details: [{selector: ".details-wrapper ul" , value: "textContent"}],
        basePrice: {selector: ".pdp-pricing-container", value: ".value"},
      },
      variantsClass: {
        sizes: [{selector: ".select-size button", value: ""}],
        prices: [{selector: "", value : ""}],
        materials: [{selector: "", value : ""}],
        scriptContent: {selector: "", value: "innerHTML"},
        other: [{selector: "", value : ""}],
      },
      config : {
        categories: ['bracelets.html', 'rings.html', 'necklaces.html', 'charms-and-amulets.html', 'earrings.html'],
        maxPrdScrape: 2,
        pageIdMode: false,
        returnAllPages: false,
        skipSite: true,
      }
    }
  ]

export default config;


const sample = [
  {
    site: {
      name: "",
      type: "",
      baseURL: "",
      scrapeURL: "",
      prdLinksList: [{ selector: "", value: "" }],
    },
    prdclass: {
      title: { selector: "", value: "" },
      imgContainer: [{ selector: "", value: "" }],
      vidContainer: [{ selector: "", value: "" }],
      description: [{ selector: "", value: "" }],
      details: { selector: "", value: "" },
      basePrice: { selector: "", value: "" },
    },
    variantsClass: {
      sizes: [{ selector: "", value: "" }],
      prices: [{ selector: "", value: "" }],
      materials: [{ selector: "", value: "" }],
      scriptContent: { selector: "", value: "" },
      other: [{ selector: "", value: "" }],
    },
    config: {
      categories: [],
      maxPrdScrape: 0,
      pageIdMode: false,
      returnAllPages: false,
    }
  }
  
  ]

const nonCompatibleSites = [
  {
    site: {
      name: "Oak and Luna",
      type: "Jewelry",
      baseURL: "https://www.oakandluna.com",
      scrapeURL: "https://www.oakandluna.com/categories/{CATEGORY}?sort=from-low-price-to-high&pageId={ID}",
      prdLinksList: [{selector: ".product-grid-item a" , value: "href"}],
    },
    prdclass: {
      title: {selector: ".productName_ProductName__CcylB" , value: ""},
      mediaContainer: [{selector: ".mediaGallery_Container__URsv_ img" , value: "src"}],
      description: [{selector: "description_Description__8yExe" , value: ""}],
      details: [{selector: ".description_Description__8yExe ul" , value: ""}],
      basePrice: {selector: ".mainProductPrices_MainProductPrices__tjGGY .selling-price", value: ""},
    },
    variantsClass: {
      sizes: [{selector: "", value: ""}],
      prices: [{selector: "", value : ""}],
      materials: [{selector: "", value : ""}],
      scriptContent: {selector: "", value: "innerHTML"},
      other: [{selector: "", value : ""}],
    },
    config : {
      categories: ["necklaces", "bracelets", "anklets-for-women", "rings", "womens-earrings", "custom-charms-in-gold-silver"],
      maxPrdScrape: 0,
      pageIdMode: true,
      loadMoreClass: '.productListing_ProductListing__f9bJi .productListing_LoadMore__9YkAc',
    }
  },
  {
    site: {
      name: "Stone and Strand",
      type: "",
      baseURL: "https://www.stoneandstrand.com",
      scrapeURL: "https://www.stoneandstrand.com/collections/{CATEGORY}?price=100:250+250:500+0:100&page=9&sort_by=price-asc",
      prdLinksList: [{selector: ".pgr-wrapper a" , value: "href"}], 
    },
    prdclass: {
      title: {selector: ".product__name" , value: ""},
      mediaContainer: [{selector: ".product__thumbs-wrapper img" , value: "src"}],
      description: [{selector: ".product__description-content--main" , value: ""}],
      details: [{selector: ".product__properties ul" , value: ""}],
      basePrice: {selector: ".product__price product__price--original", value: ""},
    },
    variantsClass: {
      sizes: [{selector: ".product__option product__option--sizes ul", value: ""}],
      prices: [{selector: "", value : ""}],
      materials: [{ selector: "", value: ""}],
      scriptContent: {selector: ".swym-snippet", value: "innerHTML"},
      other: [{selector: "", value: ""}],
    },
    config : {
      categories: ['rings', 'earrings', ], // ['rings', 'earrings', 'necklaces', 'bracelets', 'charms' ]
      maxPrdScrape: 5,
      pageIdMode: false,
      loadMoreClass: '',
    }
  },
]