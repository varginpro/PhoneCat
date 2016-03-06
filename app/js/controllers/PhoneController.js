module.exports = function(app) {
	app.controller('PhoneController', function($scope, $http, $routeParams) {
	
		$http.get('/data/'+$routeParams.id+'.json').then(function(res) {
			$scope.phone = res.data;
		}, function(err) {
			// ...
		});

	});
}