
app.controller('matchController', ['$scope', '$http', function($scope, $http) {
	new FastClick(document.body);

	$http.get('http://localhost:5000/getDogMatch', 
		{
			user_id: 1
		}).success(function(data){
    		$scope.matches = data;
    	}).error(function (err){
    		console.log(err)
	});

    $scope.matchdogs = function(_id) {
    	$http.post('http://localhost:5000/match', 
		{
			id: _id
		}).success(function(data){
    		console.log(data);
	    	for(var i = 0 ; i < $scope.matches.length ; i++)
	    		if ($scope.matches[i].id == _id)
	    			$scope.matches.splice(i, 1);
    	}).error(function (err){
    		console.log(err)
		});
    }

    $scope.pass = function(id) {
    	for(var i = 0 ; i < $scope.matches.length ; i++)
    		if ($scope.matches[i].id == id)
    			$scope.matches.splice(i, 1);
    }

}]);


