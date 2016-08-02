/*global define */
define([
    'marionette',
    'templates'
], function (Marionette, templates) {
    'use strict';

    return Marionette.LayoutView.extend({
        template: templates.detailProdLayout,
        regions: {
            DetailProductRegion: ".singleProduct"
        }
    });
});
