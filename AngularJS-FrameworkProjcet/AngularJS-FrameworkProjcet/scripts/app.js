var app = angular.module('Friendsbook', ['ngRoute', 'ngSanitize'])
	.config(function ($routeProvider) {
        $routeProvider.when('/', {
			templateUrl: 'templates/homepage.html',
			controller: 'UserCtrl'
        })
    });

