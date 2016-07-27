define([], function () {
    return {
        search: function (val, productsObj, CB) {
            console.log(CB);
            // console.log("Fwefe");
            var filteredArray = productsObj.filter(function(product) {
                return product.name.indexOf(val) > -1;
            });
            console.log(filteredArray);
            CB(filteredArray);
        }
    }
})