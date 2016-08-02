/*global define */
define([
    'marionette',
    'views/ProductView'
], function (Marionette, product) {
    'use strict';

    return Marionette.CollectionView.extend({
        childView: product
    });
});
