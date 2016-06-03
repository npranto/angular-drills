angular.module('arrayApp')
	.controller('arrayController', function($scope, peopleService){

		function getPeople(){
			$scope.people = peopleService.getPeople();
		}
		getPeople();

		console.log($scope.people);

	});
