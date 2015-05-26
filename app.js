 
  
var sampleApp = angular.module('sampleApp', ['ngStorage']);


sampleApp.config(['$routeProvider',
  function($routeProvider) 
  {
    $routeProvider.
      when('/Phases', 
      {
        templateUrl: 'templates/add_car.html',
        controller: 'AddCarController'
      }).
      when('/ShowDetails', 
      {
        templateUrl: 'templates/show_car.html',
	      controller: 'ShowCarController'
      }).

      when('/Home', 
      {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
      }).

      otherwise(
      {
        redirectTo:'/Home'
      });
}]);








