import * as cheerio from 'cheerio';

function extractor(response, properties) {
    const $ = cheerio.load(response);

    Object.entries(properties).map( ([key, pair]) => {


        if (!( pair?.selector || (Array.isArray(pair) && pair[0]?.selector)) ) return;
        const isArray = Array.isArray(pair);

        if(isArray) {
            properties[key][0].value = pair[0]?.value || 'textContent'
        } else {
            properties[key].value = pair?.value || 'textContent';
        }
    })


    const extractedData = $.extract(properties)
    return extractedData;
}

export default extractor;