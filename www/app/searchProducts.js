define([], function () {
    return {
        search: function (val, productsObj, CB) {
            // console.log(CB);
            // console.log("Fwefe");
            var filteredArray = productsObj.filter(function(product) {

                return product.name.indexOf(val) > -1;
            });
            // console.log(filteredArray);
            // console.log(productsObj);
            setTimeout(function () {
                var final = [];
                var fullmatch = false,
                    prefixMatch = false,
                    firstWordMatch = false;


                for(var i=0; i<filteredArray.length; i+=1) {

                    var nameArray = (filteredArray[i].name).split(' ');
                    var n = ((filteredArray[i].name).split(' ')).length;

                    if(val === filteredArray[i].name){
                        console.log('fullmatch');
                        final.push(filteredArray[i]);
                        fullmatch = true;
                        break;

                    } else if(nameArray[0].indexOf(val) === 0 || nameArray[n-1].indexOf(val) === 0) {
                        console.log('firstWordmatch');
                        if(filteredArray[i].name.indexOf(val) === 0){
                            console.log('prefixmatch');
                            final.push(filteredArray[i]);
                            prefixMatch = true;

                        } else{
                            final.push(filteredArray[i]);
                            firstWordMatch = true;
                        }

                    }
                }
                if(fullmatch || prefixMatch || firstWordMatch){
                    CB(final);
                }
                else CB(filteredArray);
            },100);

        }
    }
});


