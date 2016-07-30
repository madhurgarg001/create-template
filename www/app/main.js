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
    var singleProduct = require('./single-product');
<<<<<<< HEAD
    var template = require('./_templates/_templates');
    var product = require('./getUrlParams');
=======
    var catView = require('./views/CatgoryView');
    var productsView = require('./views/ProductsView');
    var singleProductView = require('./views/singleProductView');
    // var product = require('./getUrlParams');
>>>>>>> development
    var searchObj = require('./searchAlgo');
    // Load library/vendor modules using
    // full IDs, like:


    /* getCategoryData, getFilteredData and getSingleData are acting as
    * interfaces to get the data from API
    * */
    $(document).ready(function () {
        //Fetching categories


        listCategories.getCategoryData(function (catObj) {
            new catView.CategoryView({el:$('.categoriesMenu select'), catObj:Object.keys(catObj)});
            //Filtering products on the basis of selected category

            $(".categoriesMenu>select").change(function(){
                filterCategories.setCatObj(catObj);
                filterCategories.getFilteredData(function (productsArray) {

                    new productsView.ProductsView({el:$('.prods'), products:productsArray});
                    $('.search>input').focus(function () {
                       $(this).keyup(function () {
                           var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
                            searchObj.search(val, productsArray, function (searchedProducts) {

                                new productsView.ProductsView({el:$('.prods'), products:searchedProducts});
                            });

                       }).keypress();
                    })
                });
            }).change();
        });

        $('.prods').click(function () {
<<<<<<< HEAD
            console.log('clicked');
            template.renderDetailedProductView();
            //
            setTimeout(function () {
                console.log(product.getIdFromUrl());
=======
                // console.log(product.getIdFromUrl());
>>>>>>> development
                //Getting single data

                singleProduct.getSingleData(function (productInfo) {
                    new singleProductView.SingleProductView({el:$('.page-content'), product:productInfo.data[0]});
                });

        });

    });





});
