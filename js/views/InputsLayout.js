/*global define */
define([
    'marionette',
    'templates'
], function (Marionette, templates) {
    'use strict';

    return Marionette.LayoutView.extend({
        template: templates.inputsLayout,
        className: 'inputs',
        regions: {
            searchRegion: ".search",
            DropDownRegion: ".cats"
        }
    });
});
