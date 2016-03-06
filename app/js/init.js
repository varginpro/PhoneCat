var app = angular.module('app', ['ngRoute']);


app.config(function($routeProvider) {
	 $routeProvider.when('/', {
	 	controller: 'IndexController',
	 	templateUrl: "/views/index.html"
	 }).when('/phone/:id', {
	 	controller: 'PhoneController',
	 	templateUrl: "/views/phone.html"
	 });
});


require('./controllers/IndexController')(app);
require('./controllers/PhoneController')(app);


// app.controller();
// app.directive();
// app.factory();
// app.service();
// app.constant();