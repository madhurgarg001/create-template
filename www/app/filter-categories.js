define ([], function () {
    return {
         filteredData: null,
        _fetchData: function ( CB ) {
            var url = 'https://api.myjson.com/bins/xinx';
            $.getJSON(url, function ( data ) {
                CB(data);
            });
        },
        getFilteredData: function ( CB ) {
            // console.log(this);
            var self = this;
            if(this.filteredData){
                CB(this.filteredData);
            } else{
                this._fetchData(function ( dataObj ) {

                    // console.log(data);
                    self._filterData(dataObj, function (products) {
                        self.filteredData = products;
                        CB(self.filteredData);
                    })
                })
            }
        },
        _filterData: function (dataObj, CB) {
            var productsImages = []
            dataObj.data.forEach(function ( data ) {
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
            CB(productsImages);
        }

    }
});