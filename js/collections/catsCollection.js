/*global define */
define([
    'backbone',
    'models/catsModel'
], function (Backbone, Category) {
    'use strict';

    return Backbone.Collection.extend({
        model: Category
    });
});
