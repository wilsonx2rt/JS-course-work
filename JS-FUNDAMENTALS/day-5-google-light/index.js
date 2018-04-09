
const request = require('request');
const cheerio = require('cheerio');
const async = require('async');
const { checkStatus } = require('./helpers');

const urls = { 'https://propulsionacademy.com/': {} };

function fetchUrls(pageToVisit /* calllback */) {
  // Initial request
  request(pageToVisit, (error, response, body) => {
    if (error) {
      console.log(`Error: ${error}`);
    }
    // check and log request.statusCode
    if (checkStatus(response, pageToVisit) === 200) {
      // Parse document body
      const $ = cheerio.load(body); 
      // // get all hrefs to visit
      const linkObjs = $('a');
      const regex = new RegExp('^');
      const targetLinks = [];
      // console.log(linkObjs);

      targetLinks.forEach((target) => {
        // request for each target link
        request(target, (error, response, body) => {
          if (error) {
            console.log(`Request to: ${pageToVisit} threw ${error}`);
          }
          // check and log request.statusCode
          if (checkStatus(response, pageToVisit) === 200) {
            const $ = cheerio.load(body);
            const productObjs = $('a');
            const products = [];
            const targetClass = 'mui-tracking-information';

            // console.log(productObjs)
            console.log(products);
          }
        });
      });
    }
  });
}

fetchUrls();
