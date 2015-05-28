﻿app.factory('userData', function userData($http, storage) {
	var baseUrl = 'http://softuni-social-network.azurewebsites.net';
	
	var loginUser = function (user, $scope) {
		var serviceUrl = baseUrl + '/api/users/Login';
	    $http.post(serviceUrl, {
	            "username": user.username,
	            "password": user.password
	        })
	        .success(function (data, status, headers, config) {
			sessionStorage.clear();
				storage.Add(data.userName, data.access_token);
				$scope.showRegAndUserpage = false;
				$scope.showHomepage = true;
	            getUserInfo(data, $scope);
	        })
			.error(function (data, status, headers, config) {
			console.log('error');
		});
	};
	
	var registerUser = function (user, $scope) {
		var serviceUrl = baseUrl + '/api/users/Register';
		$http.post(serviceUrl, {
				"username": user.username,
				"password": user.password,
				"confirmPassword": user.confirmPassword,
				"name": user.name,
				"email": user.email,
				"gender": user.gender
			})
			.success(function (data, status, headers, config) {
				sessionStorage.clear();
				storage.Add(data.userName, data.access_token);
				$scope.showRegAndUserpage = false;
				$scope.showHomepage = true;
				getUserInfo(data, $scope)
		    })
			.error(function (data, status, headers, config) {
			console.log('error');
		});
	};

	var getUserInfo = function (userInfo, $scope) {
		var serviceUrl = baseUrl + '/api/users/' + userInfo.userName + '/preview';
		$http.get(serviceUrl, {
			headers: {
				'Authorization': 'Bearer ' + storage.Get(userInfo.userName)
			}
		})
		.success(function (data, status, headers, config) {
			$scope.myUsername = data.username;
			$scope.nameOfOwner = data.name;
		})
		.error(function () {
			console.log('no');
		});
	}

    var logout = function($scope) {
		var serviceUrl = baseUrl + '/api/users/Logout';
		var req = {
			method: 'POST',
			url: serviceUrl,
			headers: {
				'Authorization': 'Bearer ' + storage.Get($scope.myUsername)
			}
		}
		
		$http(req)
		.success(function (data, status, headers, config) {
			$scope.showRegAndUserpage = true;
			$scope.showHomepage = false;
			console.log('yes');
		})
		.error(function () {
			console.log('no');
		});
    };
	
	var searchProfile = function(searchedUser, $scope) {
		var serviceUrl = baseUrl + '/api/users/search?searchTerm=' + searchedUser;
		$http.get(serviceUrl, {
			headers: {
				'Authorization': 'Bearer ' + storage.Get($scope.myUsername)
			}
		})
		.success(function (data, status, headers, config) {
		    $scope.users = data;
		})
		.error(function () {
			console.log('no');
		});
	}
	
	var editProfilePage = function () {

	    var check = $scope.fileread;
		var fileReader = new FileReader();
		fileReader.readAsDataURL(img);

	    var serviceUrl = baseUrl + '/api/me';
		$http.put(serviceUrl, {
			headers: {
				'Authorization': 'Bearer ' + storage.Get(userInfo.userName)
			},

			"profileImageData" : fileReader
		})
		.success(function (data, status, headers, config) {
		    console.log('yes');
		})
		.error(function () {
			console.log('no');
		});
	}
	
	var getImgBase64String = function () {
		
		var imageFile = $('#imgFile')[0].files[0];
		var fileReader = new FileReader();

	    var readResult = null;
		fileReader.onloadend = function () {
			readResult = fileReader.result;
		}

		fileReader.readAsDataURL(imageFile);
	}
	
    return {
		loginUser : loginUser,
		registerUser : registerUser,
		logout: logout,
		searchProfile : searchProfile,
		editProfilePage : editProfilePage,
		getImgBase64String : getImgBase64String
	};
});
