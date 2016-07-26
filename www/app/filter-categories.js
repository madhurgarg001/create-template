define ([], function () {
    return {
        fetchData: function ( CB ) {
            var url = 'https://api.myjson.com/bins/xinx';
            $.getJSON(url, function ( data ) {
                return CB(data);
            });
        },
        filterData: function ( dataArray ) {
            var productsImages = []
            dataArray.forEach(function ( data ) {
                var size = (typeof data.cat !== 'undefined' ? data.cat.length:0);
                for(var i=0; i<size; i+=1){
                    if('dresses#20' === data.cat[i]){
                        productsImages.push(data.image);
                    }
                }
                if('dresses#20' === 'uncategorised'){
                    productsImages.push(data.image);
                }
            });
            return productsImages;
        }

    }
});