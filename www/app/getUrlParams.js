define([], function () {
    return {
        getIdFromUrl: function () {
            var query = window.location.hash.substring(4);
            return query;
        }
    }
});
