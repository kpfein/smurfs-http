angular.module('Smurfs').controller('MainCtrl', function($scope, SmurfService) {
	
	SmurfService.getSmurfs()
		.then(function(result) {
			$scope.smurfs = result.data;
		});

	$scope.createSmurf = function() {
		SmurfService.createSmurf($scope.newSmurf).then(function() {
			$scope.smurfs.push($scope.newSmurf);
			$scope.newSmurf = {};
		})
	};

});