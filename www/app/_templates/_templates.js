

define(['underscore'], function (_) {
    return {
        renderCatTemplate: function (catObj) {
            // console.log(catObj);
            var categoriesTemplate = _.template($('#categoriesTemplate').html());
            // console.log(categoriesTemplate);

            var categoriesHTML = categoriesTemplate({categories: Object.keys(catObj)});
            $('select').append(categoriesHTML);
        },
        renderProductsTemplate: function (productsObj) {

            var productsId = productsObj.map(function (item) {
                return item.id;
            });
            // console.log(productsObj);
            var productsTemplate = _.template($('#productsTemplate').html());
            var productsHTML = productsTemplate({products: productsObj});
            // console.log(productsHTML);
            $('.prod').html(productsHTML);
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

