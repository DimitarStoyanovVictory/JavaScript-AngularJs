app.factory('userData', function userData($http, storage) {
	var baseUrl = 'http://softuni-social-network.azurewebsites.net';
	
	var loginUser = function (user) {
		var serviceUrl = baseUrl + '/api/users/Login';
	    $http.post(serviceUrl, {
	            "username": user.username,
	            "password": user.password
	        })
	        .success(function(data, status, headers, config) {
	            storage.Add(data.userName, data.access_token);
	            //var friendsbook = element(by.css('section.friendsbook'));
	            //it('should friendsbook ng-show', function() {
	            //    expect(friendsbook.isDisabled()).toBeTruthy();
	            //});
	        })
			.error(function (data, status, headers, config) {
			console.log('error');
		});
	};
	
	var registerUser = function (user) {
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
			storage.Add(data.userName, data.access_token);
		        console.log('success');
		    })
			.error(function (data, status, headers, config) {
			console.log('error');
		});
	};
	
	
	return {
		loginUser : loginUser,
		registerUser : registerUser
	};
});
