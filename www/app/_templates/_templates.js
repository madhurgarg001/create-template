

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
            var productsImg =  productsObj.map(function (item) {
                return item.img;
            });
            var productsId = productsObj.map(function (item) {
                return item.id;
            });

            var productsTemplate = _.template($('#productsTemplate').html());
            var productsHTML = productsTemplate({products: productsImg});
            // console.log(productsHTML);
            $('.prod').html(productsHTML);
            var i=0;
            $('.prod a').each(function(){

                this.href += productsId[i];
                i+=1;
            })
        }

    }
});

