define(function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:

    /*
     *on requiring listCategories , it will first call define function
     * which in turn will return an object which contains different
     * methods that will be required to fetchData, filterData etc
     */
    var listCategories = require('./list-categories');
    var filterCategories = require('./filter-categories');
    var searchObj = require('./searchAlgo');
    var $ = require('jquery');
    var mn = require('../marionette/mn');
    // Load library/vendor modules using
    // full IDs, like:


    /* getCategoryData, getFilteredData and getSingleData are acting as
     * interfaces to get the data from API
     * */
    $(document).ready(function () {
        //Fetching categories

        var app = mn.start();
        listCategories.getCategoryData(function (catObj) {
                console.log(app);
            //Filtering products on the basis of selected category

            $(".categoriesMenu>select").change(function(){
                filterCategories.setCatObj(catObj);
                filterCategories.getFilteredData(function (productsArray) {
                    console.log(productsArray)
                    // mn.start(productsArray);
                    $('.search>input').focus(function () {
                        $(this).keyup(function () {
                            var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
                            searchObj.search(val, productsArray, function (searchedProducts) {

                                mn.start(searchedProducts);
                            });

                        }).keypress();
                    })
                });
            }).change();
        });

    });





});
