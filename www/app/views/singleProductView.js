define(['backbone'], function (Backbone) {
    var app = app || {};
    (function () {

        app.SingleProductView = Backbone.View.extend({

            template: _.template($("#singleProductTemplate").html()),

            initialize: function (options) {
                this.options = options;
                _.bindAll(this, 'render');
                this.render();
            },

            render: function () {
                var data = this.options.product;
                var templateHTML = this.template({details:data});
                this.$el.html(templateHTML);

            }

        });


    })();
    return  app;
});
