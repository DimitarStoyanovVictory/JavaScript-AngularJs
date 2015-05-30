var app = angular.module('Friendsbook', ['ngRoute', 'ngSanitize'])
	.config(function ($routeProvider) {
        $routeProvider.when('/', {
			templateUrl: 'scripts/templates/homepage.html',
			controller: 'UserCtrl'
        })
    });

