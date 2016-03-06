module.exports = function(app) {
	app.controller('IndexController', function($scope, $http) {
	
		$http.get('/data/phones.json').then(function(res) {
			$scope.data = res.data;
		}, function(err) {
			// ...
		});

	});
}
