app.controller('UserCtrl', function ($scope, $http, userData) {
	$scope.loginUser = function (userInfo) {
		userData.loginUser(userInfo);
	};
	
	$scope.registerUser = function (userInfo) {
		userData.registerUser(userInfo);
	}
});

