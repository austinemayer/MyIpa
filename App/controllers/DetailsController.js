appObj.controller('Details',['$scope','$rootScope','$http','$routeParams','$firebase',function($scope, $rootScope, $http, $routeParams,$firebase){
	  	$http.get('beerDetails.php?beerId='+$routeParams.beerId)
	    .success(function(data, status, headers, config) {

	      $scope.infoResults = data.data;

	      var beerComment = new Firebase('https://myipa.firebaseio.com/beers/'+$routeParams.beerId+'/comments');
 		  $scope.posts = $firebase(beerComment).$asArray();

 		  $rootScope.$on('$firebaseSimpleLogin:login',function(error, user){
 		  	$scope.userAvatar = $rootScope.userInfo.user.thirdPartyUserData.picture.data.url;
 		  	var addToList = new Firebase('https://myipa.firebaseio.com/users/'+$rootScope.userInfo.user.id+'/try/'+$routeParams.beerId);
 		 	$scope.tryList = $firebase(addToList).$asArray();
		  });

	    	$scope.createPost = function(){
	    		$scope.newPost.avatar = $rootScope.userInfo.user.thirdPartyUserData.picture.data.url;
	    		$scope.newPost.name = $rootScope.userInfo.user.displayName;
	 			$scope.posts.$add($scope.newPost).then(function(){
		 			$scope.newPost = {};
	 			});
	 		};

	 		$scope.addToTryList = function(){
	 			$scope.tryList.$add($routeParams.beerId);
 			};

	    })
	    .error(function(data, status, headers, config) {
	      console.log('json not responding.');
	    });
}]);