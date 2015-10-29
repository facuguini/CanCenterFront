
app.controller('mainController', ['$scope', '$http', function($scope, $http) {
	new FastClick(document.body);
	
	$scope.username = '';
	$scope.password = '';

	$scope.dogs = null;

	$scope.login = function() {
		$http.post('http://localhost:5000/login', 
			{
				username: $scope.username, 
				pass: $scope.password
			}).success(function(data){
	        	console.log(data);
        		$scope.dogs = data;
	    	}).error(function (err){
	    		console.log(err)
    	});
	};
}]);


