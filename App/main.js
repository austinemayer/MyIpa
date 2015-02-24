
var appObj = angular.module('myapp',['ngRoute','firebase','ui.bootstrap']);

appObj.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/',{
		controller:'Home'
		})
	.when('/search/:searchTerm',{
		templateUrl:'views/search.html',
		controller:'Search'
		})
	.when('/details/:beerId',{
		templateUrl:'views/details.html',
		controller:'Details'
		})
	.when('/users/:userId/lists',{
		templateUrl:'views/userLists.html',
		controller:'Lists'
		});

 }]);



appObj.run(['$rootScope','$firebaseSimpleLogin',function($rootScope,$firebaseSimpleLogin){
	var myRef = new Firebase("https://myipa.firebaseio.com");
	$rootScope.userInfo = $firebaseSimpleLogin(myRef);

	$rootScope.$on('$firebaseSimpleLogin:login',function(error, user){
		console.log(user);
	});	
}]);

appObj.controller('Home',['$scope','$location',function($scope,$location){
	$scope.searchTerm = function(){
		$location.path('/search/'+$scope.inputName);
	}
}]);
