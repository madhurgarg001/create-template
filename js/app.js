define([
    'marionette',
    'collections/catsCollection',
    'collections/productsCollection',
    'collections/detailProductCollection',
    'views/InputsLayout',
    'views/ContentLayout',
    'views/SearchBar',
    'views/DropDown',
    'views/ProductsView',
    'views/DetailProductLayout',
    'views/DetailProductView'

], function (Marionette, Categories, ProductsList, DetailProductCollection, InputsLayout,
             ContentLayout, SearchBar, DropDown, ProductsView, DetailProductLayout, DetailProductView) {
    'use strict';

    var app = new Marionette.Application();

    var inputsLayout = new InputsLayout();

    var contentsLayout = new ContentLayout();

    app.detailProductLayout = new DetailProductLayout();

    var searchBar = new SearchBar();

    var items = new Categories([{Uncategorised:'uncategorised'}, {Dresses: '#dresses20'}]);
    var categoriesView = new DropDown({
        collection: items
    });


    var products = new ProductsList([
        {
        "_id": "76",
        "image": "http://cdn6.bigcommerce.com/s-fht6d3vy/products/76/images/262/TAPRODAPPDR001__84722__31432.1450885249.195.234.jpg?c=2",
        "cat": [
            "dresses#20",
            "new#18"
        ]
        },
        {
            "_id": "76",
            "image": "http://cdn6.bigcommerce.com/s-fht6d3vy/products/76/images/262/TAPRODAPPDR001__84722__31432.1450885249.195.234.jpg?c=2",
            "cat": [
                "dresses#20",
                "new#18"
            ]
        }
    ]);

    app.details = new DetailProductCollection({},{});
    var productsView = new ProductsView({
        collection: products
    });

    app.detailProductView = new DetailProductView({
        collection: app.details
    });
    app.addRegions({
        inputs: '#inputs',
        content: '#content'
    });

    app.addInitializer(function () {
        app.inputs.show(inputsLayout);
        inputsLayout.searchRegion.show(searchBar);
        inputsLayout.DropDownRegion.show(categoriesView);
        app.content.show(contentsLayout);
        contentsLayout.productsRegion.show(productsView);

    });

    return window.app = app;
});


