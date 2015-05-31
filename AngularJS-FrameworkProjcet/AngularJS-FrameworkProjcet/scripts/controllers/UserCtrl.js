app.controller('UserCtrl', function ($scope, $http, userData) {

	$scope.showRegAndUserpage = true;
	$scope.showHomepage = false;
	$scope.showEditProfile = false;
	$scope.showSearchedUsers = false;
	var countSettings = 0;

	$scope.loginUser = function (userInfo) {
		userData.loginUser(userInfo, $scope);
	};
	
	$scope.registerUser = function (userInfo) {
		userData.registerUser(userInfo, $scope);
	}
	
	$scope.logoutFromProfile = function() {
	    userData.logout($scope);
	}

	$scope.searchUser = function(nameOfUser) {
	    userData.searchProfile(nameOfUser, $scope);
	}

	$scope.showEditProfileSettings = function () {
		countSettings++;
		if (countSettings % 2 != 0) {
			$scope.showEditProfile = true;
		} else {
			$scope.showEditProfile = false;
		}
	}
	
	$scope.getImages = function () {
		userData.getImg(jQuery('#profileImgData'));
		userData.getImg(jQuery('#coverImgData'));
	}

	$scope.editProfile = function (changeUser) {
		userData.editProfilePage($scope, changeUser);
	}
});

