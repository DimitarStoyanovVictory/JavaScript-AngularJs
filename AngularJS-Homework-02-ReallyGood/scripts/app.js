var videoApp = angular.module('videoApp', ['ngRoute', 'videoFilters']);

videoApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'partials/videoList.html',
                controller: 'VideoListController'
            }).
            when('/add-video', {
                templateUrl: 'partials/add-video.html',
                controller: 'AddVideoController'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);