app.factory('storage', function () {
	
	function Add(key, accessToken) {
		sessionStorage[key] = accessToken;
	}
	
	function Get(key) {
		return sessionStorage[key];
	}
	
	return {
		Add: Add,
		Get: Get
	}
});