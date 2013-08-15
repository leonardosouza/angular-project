function simpleController($scope) {
	//console.dir($scope);
	$scope.user = { name: "Leonardo" }

	$scope.counter = 0;

	$scope.addOne = function() {
		return $scope.counter++;
	}

	$scope.multipleTwo = function() {
		return $scope.counter*=2;
	}
}