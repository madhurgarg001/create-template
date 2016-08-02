/*global define */
define(function (require) {
	'use strict';

	return {
		inputsLayout:require('tpl!templates/inputsLayoutTemp.tmpl'),
		search: require('tpl!templates/searchBar.tmpl'),
		dropdown: require('tpl!templates/dropdown.tmpl'),
		product: require('tpl!templates/product.tmpl'),
		contentsWrapper: require('tpl!templates/contentLayoutTemp.tmpl'),
		singleProduct: require('tpl!templates/DetailsProductTemp.tmpl'),
		detailProdLayout: require('tpl!templates/DetailProductLayoutTemp.tmpl')
	};
});
