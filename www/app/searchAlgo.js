define([], function () {
    return {
        search: function (val, productsArray, CB) {
            // console.log(this);
            var ranks = [];
            var self = this;
            // console.log(productsArray);
            productsArray.forEach(function (item) {
                var score = self._evaluate(val, item);
                if(score > 0)
                    ranks.push({score:score, data:item});
            });

            ranks.sort(function(a, b) {
                return b.score - a.score;
            });
            var final = ranks.map(function (product) {
                return product.data;
            });
<<<<<<< HEAD
            console.log(final);
=======
            // console.log(final);
>>>>>>> pavan
            CB(final);
        },

        _evaluate: function (val, item) {

            var score = 0;
            var words = item.name.split(' ');
            // console.log(words);
            var n = words.length;

<<<<<<< HEAD
            if(val === item.name){
                score = 4;

            }
            if(words[0].indexOf(val) === 0 || words[n-1].indexOf(val) === 0) {
                    // console.log(item.name[n-1]);
                if(item.name.indexOf(val) === 0){
                    score += 1;

                }
                score += 1;
            }
            if(item.name.indexOf(val) > -1){
                score += 1;
            }

=======
                if(val === item.name){
                    score = 4;

                }
                if(words[0].indexOf(val) === 0 || words[n-1].indexOf(val) === 0) {
                        // console.log(item.name[n-1]);
                    if(item.name.indexOf(val) === 0){
                        score += 1;

                    }
                    score += 1;
                }
                if(item.name.indexOf(val) > -1) {
                    score += 1;
                }
>>>>>>> pavan
            return score;
        }

    }
});


