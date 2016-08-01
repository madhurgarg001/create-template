define(['backbone','marionette'], function (Backbone, Marionette) {
    //application instance
    var fancyStore =  new Backbone.Marionette.Application();

    //backbone model
    var category = Backbone.Model.extend({});
    var products = Backbone.Model.extend({});


    //backbone collection
    var CategoriesList = Backbone.Collection.extend({
        model: category
    });
    var ProductsList = Backbone.Collection.extend({
        model: products
    });

    //backbone.marionette itemView for displaying one item at a time
    var CategoryView = Backbone.Marionette.ItemView.extend({
        template: '#categoryView'
    });

    var ProductView = Backbone.Marionette.ItemView.extend({
        template: '#productView'
    });

    var NoProductsView = Backbone.Marionette.ItemView.extend({
        template: '#noProductsView'
    });

    //backbone.marionette collectionView for displaying each ItemView
    var CategoriesView = Backbone.Marionette.CollectionView.extend({
        childView: CategoryView
    });
    var ProductsView = Backbone.Marionette.CollectionView.extend({
        childView: ProductView,
        emptyView: NoProductsView
    });


    fancyStore.addRegions({
        pageCscontent: '.categoriesMenu',
        productsList: '.prods'
    });

//this initializer function will be get run first when application starts
    fancyStore.addInitializer(function () {
        return {
            catRender: function () {
                this.categories = new CategoriesList(catObj);
                this.categoriesList.show(new CategoriesView({collection: this.categories}));
            },
            productRender: function () {
                this.products = new ProductsList(productsArray);
                this.productsList.show(new ProductsView({collection: this.categories}));
            }
        }
    });

    return fancyStore;

});