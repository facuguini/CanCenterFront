
app.controller('matchController', ['$scope', '$http', function($scope, $http) {
	new FastClick(document.body);

	$http.get('http://localhost:5000/getDogMatch', 
		{
			user_id: 1
		}).success(function(data){
        	console.log(data);
    		$scope.matches = data;
    	}).error(function (err){
    		console.log(err)
	});

}]);


