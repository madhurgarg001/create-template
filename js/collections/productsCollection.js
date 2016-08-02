/*global define */
define([
    'backbone',
    'models/productsModel'
], function (Backbone, Product) {
    'use strict';

    return Backbone.Collection.extend({
        model: Product
    });
});
