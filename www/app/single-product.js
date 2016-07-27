define([], function () {
    return {
        singleData: null,
        _fetchData: function ( CB ) {
            var url = 'https://api.myjson.com/bins/oy0t?id=81';
            $.getJSON(url, function ( data ) {
                CB(data);
            });
        },
        getSingleData: function ( CB ) {
            var self = this;
            // console.log(this);
            if(this.singleData) {
                CB(this.singleData)
            } else {
                this._fetchData(function (data) {
                    self.singleData = data;
                    CB(self.singleData);
                })
            }
        }
    }
});