angular.module('Smurfs').service('SmurfService', function($http) {
	this.getSmurfs = function() {
		return $http({
			method: 'GET',
			url: 'http://smurfs.devmounta.in/smurfs/'
		});
	};
	this.createSmurf = function(smurf) {
		return $http({
			method: 'POST',
			url: 'http://smurfs.devmounta.in/smurfs/',
			data: smurf
		});
	}
});