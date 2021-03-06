﻿app.controller('UserCtrl', function ($scope, $http, userData) {

	$scope.showRegAndUserpage = true;
	$scope.showHomepage = false;
    $scope.showEditProfile = false;

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

	$scope.showEditProfile = function () {
	    $scope.showEditProfile = true;
	}
	
	$scope.getImages = function () {
		userData.getImg($('#profileImgData'));
		userData.getImg($('#coverImgData'));
	}

	$scope.editProfile = function (changeUser) {
		userData.editProfilePage($scope, changeUser);
	}

	
});

