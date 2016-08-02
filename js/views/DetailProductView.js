/*global define */
define([
    'marionette',
    'templates'
], function (Marionette, templates) {
    'use strict';
    return Marionette.ItemView.extend({
        template: templates.singleProduct,
        events:{
            'click a': 'changeView'
        },
        changeView: function () {
            var app = window.app;
            app.content.show(app.contentsLayout);
            app.contentsLayout.productsRegion.show(app.productsView);
        }
    });
});
