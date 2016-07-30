

define(['underscore'], function (_) {
    return {
        renderCatTemplate: function (catObj) {
            // console.log(catObj);
            var categoriesTemplate = _.template($('#categoriesTemplate').html());
            // console.log(categoriesTemplate);

            var categoriesHTML = categoriesTemplate({categories: Object.keys(catObj)});
            $('select').append(categoriesHTML);
        },
        renderProductsTemplate: function (productsArray) {
            // console.log(productsArray);
            var productsId = productsArray.map(function (item) {
                return item.id;
            });
            // console.log(productsObj);
            var productsTemplate = _.template($('#productsTemplate').html());
            var productsHTML = productsTemplate({products: productsArray});
            // console.log(productsHTML);
            $('.prods').html(productsHTML);
            var i=0;
            $('.prod a').each(function(){

                this.href += productsId[i];
                i+=1;
            })
        },
        renderDetailedProductView: function () {
            console.log('template');
            var detailedProductView =  _.template($('#detailedProductView').html());
            var detailedProductViewHTML = detailedProductView({pagehead: 'Fancy Store'});
            $('.container').html(detailedProductViewHTML);

        },
        renderDetailedProductTemplate: function (productInfo) {
            var detailedProductTemplate  = _.template($('#detailedProductTemplate').html());
            // var product = [];
            // product.push(productInfo);
            // console.log(product, productInfo.data[0]);
            var detailedProductHTML = detailedProductTemplate({details:productInfo.data[0]});
            console.log(detailedProductHTML);
            $('.container').append(detailedProductHTML);
        }

    }
});




// define(['backbone'], function () {
//     (function () {
//         var HomePageView = Backbone.View.extend({
//
//             catTemplate: _.template($("#categoriesTemplate").html()),
//             productsTemplate: _.template($("#productsTemplate").html()),
//
//             initialize: function (options) {
//                 this.options = options;
//                 _.bindAll(this, 'render');
//                 this.render();
//             },
//
//             render: function () {
//                 var catTempHTML = this.template({categories:this.options.categories});
//                 this.$el.html(catTempHTML);
//                 var productsTempHTML = this.template({products:this.options.products});
//                 this.$el.html(productsTempHTML);
//             }
//
//         });
//
//         var homePageView = new HomePageView({el:$('body'),product:product});
//
//     })();

// })


