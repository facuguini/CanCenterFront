
app.controller('mainController', ['$scope', '$http', function($scope, $http) {
	new FastClick(document.body);
	
	$scope.username = "";
	$scope.password = "";

	$scope.login = function() {
		$http.get(
			{ 	
				method: 'GET',
				url: 'localhost:5000/getUserDog',
				data: {username: $scope.username, password: $scope.password}
			}).then(function successCallback(response) {
    			console.log(response);
    		}, function errorCallback(err) {
    			console.log(err);
    		});
	};
}]);


