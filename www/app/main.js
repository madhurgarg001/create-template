define(function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:

    var listCategories = require('./list-categories');

    var filterCategories = require('./filter-categories')
    var $ = require('jquery');
    // Load library/vendor modules using
    // full IDs, like:

    $(document).ready(function () {
        //Fetching categories

        listCategories.getCategoryData(function (catArray) {
            console.log(catArray)

        });

        // listCategories.fetchData(function( catArray ) {
        //     var catObj = listCategories.transform(catArray);
        //     console.log(catObj);
        // });

        //Filtering products on the basis of selected category
        filterCategories.fetchData(function ( dataArray ) {
            console.log(dataArray.data);
            var productsData = filterCategories.filterData(dataArray.data);
            console.log(productsData.length);
        })

    });





});
