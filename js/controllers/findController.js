app.controller('findController', ['$scope', '$http', function($scope, $http) {
	new FastClick(document.body);
	
	$http.get('http://localhost:5000/getLostDogs')
	.success(function(data){
		console.log(data);
		$scope.founded = data;
	})
	.error(function (err){
		console.log(err)
	});

}]);


