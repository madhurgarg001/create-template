define ([], function () {
    return {
         filteredData: null,
        _fetchData: function ( CB ) {
            var url = 'https://api.myjson.com/bins/2kdt3';
            $.getJSON(url, function ( data ) {
                CB(data);
            });
        },
        setCatObj: function(catObj) {
            this.catObj = catObj;

        },

        getFilteredData: function ( CB ) {

            // console.log(this);
            var self = this;
            // console.log(self);

                this._fetchData(function ( dataObj ) {

                    // console.log(data);
                    self._filterData(dataObj, function (products) {
                        self.filteredData = products;
                        CB(self.filteredData);
                    })
                })

        },
        _filterData: function (dataObj, CB) {
            var productsArray = [];
            var self = this;
            // console.log(self);
            dataObj.data.forEach(function ( data ) {

                var size = (typeof data.cat !== 'undefined' ? data.cat.length:0);
                for(var i=0; i<size; i+=1){
                    if(self.catObj[$('.categoriesMenu>select').val()] === data.cat[i]){
                        productsArray.push({name:data.name,img:data.image, id:data._id});
                    }
                }
                if(self.catObj[$('.categoriesMenu>select').val()] === 'uncategorised'){
                    productsArray.push({name:data.name,img:data.image, id:data._id});
                }
            });
            // console.log(self.catObj[$('.categoriesMenu>select').val()]);
            CB(productsArray);
        },

    }
});