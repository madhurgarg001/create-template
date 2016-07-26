define(function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:

    var listCategories = require('./list-categories');
    var filterCategories = require('./filter-categories');
    var singleProduct = require('./single-product');
    var template = require('./_templates/_templates');
    var product = require('./getUrlParams');
    // Load library/vendor modules using
    // full IDs, like:
    var $ = require('jquery');

    $(document).ready(function () {
        //Fetching categories

        listCategories.getCategoryData(function (catObj) {
            console.log(catObj);
            template.renderCatTemplate(catObj);
        });

        //Filtering products on the basis of selected category

        filterCategories.getFilteredData(function (productsObj) {
            console.log(productsObj);
            template.renderProductsTemplate(productsObj);
        });


        //Getting single data

        singleProduct.getSingleData((function (productInfo) {
            console.log(productInfo);
        }));
    });





});
