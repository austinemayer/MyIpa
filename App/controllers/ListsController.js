appObj.controller('Lists',['$scope','$rootScope','$route','$http','$routeParams','$firebase',function($scope,$rootScope,$route,$http, $routeParams, $firebase){
	  	
 		  var viewList = new Firebase('https://myipa.firebaseio.com/users/'+$routeParams.userId+'/try');
 		  $scope.tryList = $firebase(viewList).$asObject();


 		  $scope.removeBeerFromList = function(beerId){
 		  		var removeFromList = new Firebase('https://myipa.firebaseio.com/users/'+$rootScope.userInfo.user.id+'/try/'+beerId);
 		  		$scope.deleteBeer = $firebase(removeFromList);
	 			$scope.deleteBeer.$remove();
	 			$route.reload();
 			};

 		  $scope.tryArray =[];

 		  $scope.tryList.$loaded().then(function(){
	 		  angular.forEach($scope.tryList, function(key,value){
	 		  	var beerObj = {};
	 		  	
	 		  	$http.get('beerDetails.php?beerId='+value)
				    .success(function(data, status, headers, config) {
				      beerObj.beerId = value;
				      beerObj.beerPic = data.data.labels.icon;
				      beerObj.beerName = data.data.name;
				      $scope.tryArray.push(beerObj);
				    })
				    .error(function(data, status, headers, config) {
				      console.log('json not responding.');
	   				});			

	 		  });

 		  });
}]);