define([], function () {
    return {
        categoryData: null,
        _fetchData: function (CB) {
            var url = 'https://api.myjson.com/bins/4su3h';
            $.getJSON(url, function ( data ) {
               return CB(data);
            });
        },

        getCategoryData : function (CB) {
            console.log(this)
            this.categoryData = this._fetchData(CB);
            if(this.categoryData){
                
            }
        },

        _transform: function (catArray) {

            console.log(catArray);
            var catObj = {};
            catArray.forEach(function (item) {
                var name = item.name;
                catObj[name] = item.sname;
            });
            return catObj;
        }

    }
});
