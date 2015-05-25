app.factory('userData', function userData($http, storage) {
	var baseUrl = 'http://softuni-social-network.azurewebsites.net';
	
	var loginUser = function (user, $scope) {
		var serviceUrl = baseUrl + '/api/users/Login';
	    $http.post(serviceUrl, {
	            "username": user.username,
	            "password": user.password
	        })
	        .success(function(data, status, headers, config) {
				storage.Add(data.username, data.access_token);
				$scope.showRegAndUserpage = false;
				$scope.showHomepage = true;
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
				storage.Add(data.username, data.access_token);
				$scope.showRegAndUserpage = false;
				$scope.showHomepage = true;
		    })
			.error(function (data, status, headers, config) {
			console.log('error');
		});
	};

    var getUserInfo = function($scope) {
		for (property in sessionStorage) {
		    $scope.userInfo = property;
		}
    };
	
	return {
		loginUser : loginUser,
		registerUser : registerUser,
		getUserInfo : getUserInfo
	};
});
