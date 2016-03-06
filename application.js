var app = angular.module('app', []);

app.run(function($http, $rootScope) {
	$http.get('/phones.json').then(function(res) {
		$rootScope.data = res.data;
	}, function(err) {
		// ...
	});
});