function loopController($scope) {
	$scope.cars = ["gol", "fox", "palio"];

	$scope.addCar = function() {
		$scope.cars.push($scope.carname);
		$scope.carname = '';
	}
}