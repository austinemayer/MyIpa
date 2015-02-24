appObj.controller('Search',['$scope','$rootScope','$firebase','$http','$routeParams',function($scope, $rootScope, $firebase, $http,$routeParams){
	  	$http.get('searchBeers.php?beer='+$routeParams.searchTerm)
	    .success(function(data, status, headers, config) {
	      $scope.searchResults = data.data;
	      $scope.searchTerm = $routeParams.searchTerm;

	      $scope.addToTryList = function(beerAddId){
		      	var addToList = new Firebase('https://myipa.firebaseio.com/users/'+$rootScope.userInfo.user.id+'/try/'+beerAddId);
	 		  	$scope.tryList = $firebase(addToList).$asArray();
		 		$scope.tryList.$add(beerAddId);
 			};
	    })
	    .error(function(data, status, headers, config) {
	      console.log('json not responding.');
	    });
}]);