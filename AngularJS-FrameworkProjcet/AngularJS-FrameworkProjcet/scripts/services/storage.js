app.factory('storage', function () {
	
	function Add(key, data) {
		sessionStorage[key] = data;
	}
	
	function Get(key) {
		return sessionStorage[key];
	}
	
	return {
		Add: Add,
		Get: Get
	}
});