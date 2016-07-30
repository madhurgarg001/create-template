define(['backbone'], function (Backbone) {
    var app = app || {};
    (function () {

        app.ProductsView = Backbone.View.extend({

            template: _.template($("#productsTemplate").html()),

            initialize: function (options) {
                this.options = options;
                // _.bindAll(this, 'render', 'attachID');
                this.render();
                // this.attachID();
            },

            render: function () {
                var data = this.options.products;
                var templateHTML = this.template({products:data});
                this.$el.html(templateHTML);

            }
        });


    })();
    return  app;
});
