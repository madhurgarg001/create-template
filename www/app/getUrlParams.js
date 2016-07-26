define([], function () {
    return {
        getIdFromUrl: function () {
            var query = window.location.search.substring(1);
            return query;
        }
    }
});
