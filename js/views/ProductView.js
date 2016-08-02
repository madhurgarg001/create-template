/*global define */
define([
    'marionette',
    'templates'

], function (Marionette, templates) {
    'use strict';
    return Marionette.ItemView.extend({
        template: templates.product,
        events:{
            'click a': 'changeView'
        },
        changeView: function () {
           var app = window.app;
            app.content.show(app.detailProductLayout);
            app.detailProductLayout.DetailProductRegion.show(app.detailProductView);
        }
    });
});
