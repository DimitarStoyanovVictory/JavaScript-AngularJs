app.controller('UserCtrl', function ($scope, $http, userData) {

	$scope.showRegAndUserpage = true;
    $scope.showHomepage = false;

	$scope.loginUser = function (userInfo) {
		userData.loginUser(userInfo, $scope);
	};
	
	$scope.registerUser = function (userInfo) {
		userData.registerUser(userInfo, $scope);
	}

    $scope.showUserInfo = function() {
        userData.getUserInfo($scope);
    };
});

