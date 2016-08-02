/*global define */
define([
    'backbone',
    'models/detailProductModel'
], function (Backbone, DetailProduct) {
    'use strict';

    return Backbone.Collection.extend({
        model: DetailProduct
    });
});
