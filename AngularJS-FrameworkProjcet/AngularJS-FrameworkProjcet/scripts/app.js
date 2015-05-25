var app = angular.module('Friendsbook', ['ngRoute'])
	.config(function ($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'templates/friendsbook.html',
		controller: 'UserCtrl'
	});
});

