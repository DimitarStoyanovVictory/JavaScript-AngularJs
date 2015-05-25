angular.module('videoFilters', []).filter('checkmark', function() {
    return function(input) {
        return input ? '\u2713' : '\u2718';
    };
}).filter('dateFilter', function() {
    return function(inputArray, filterString) {
        var result = [],
            dateFilter = new Date(filterString),
            test = Date.parse(filterString);

        if(isNaN(test)) {
            return inputArray;
        }

        angular.forEach(inputArray, function (video) {
            if (video.date.getFullYear() === dateFilter.getFullYear() &&
                video.date.getMonth() === dateFilter.getMonth() &&
                video.date.getDate() === dateFilter.getDate()) {
                result.push(video)
            }
        });

        return result;
    };
});