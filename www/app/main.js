define(function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:

    var listCategories = require('./list-categories');
    var filterCategories = require('./filter-categories');
    var singleProduct = require('./single-product');
    var template = require('./_templates/_templates');
    // Load library/vendor modules using
    // full IDs, like:
    var $ = require('jquery');

    $(document).ready(function () {
        //Fetching categories

        listCategories.getCategoryData(function (catObj) {
            console.log(catObj);

        });

        //Filtering products on the basis of selected category

        filterCategories.getFilteredData(function (products) {
            console.log(products)
        });

        //Getting single data

        singleProduct.getSingleData((function (productInfo) {
            console.log(productInfo);
        }));
    });





});
