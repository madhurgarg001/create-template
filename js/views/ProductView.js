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
            console.log('clicked the image');

        }
    });
});
