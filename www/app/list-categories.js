define([], function () {
    return {
        categoryData: null,
        _fetchData: function (CB) {
            console.log('Hello');
            var url = 'https://api.myjson.com/bins/4su3h';
            $.getJSON(url, function ( data ) {
                CB(data);
            });
        },

        getCategoryData : function (CB) {
            // console.log(this);
            var self = this;
            if(this.categoryData){
                console.log(this.categoryData);
                CB(this.categoryData);
            } else{

                this._fetchData(function(data) {
                    /* self.categoriesData contains cache of the API call */
                    self._transform(data, function (catObj) {
                        self.categoryData = catObj;
                        CB(self.categoryData);
                    })

                });

            }
        },

        _transform: function (data, CB) {
            var catObj = {};
            data.forEach(function (item) {
                var name = item.name;
                catObj[name] = item.sname;
            });
            CB(catObj);
        }

    }
});
