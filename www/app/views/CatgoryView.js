
define(['backbone'], function (Backbone) {
    var app = app || {};
    (function () {

            app.CategoryView = Backbone.View.extend({
                template: _.template($("#categoriesTemplate").html()),

                initialize: function (options) {
                this.options = options;
                _.bindAll(this, 'render');
                this.render();
                },

                render: function () {
                var data = this.options.catObj;
                var templateHTML = this.template({categories:data});
                this.$el.html(templateHTML);

                }
            });



    })();
    return  app;
});
