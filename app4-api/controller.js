angular.module('apiApp')
	.controller('starWarsCtrl', function($scope, starWarsService){

	function getPerson (){
		starWarsService.getPerson()
		.then(function(starships){
			console.log(starships);
		});
	}
	getPerson();









// end of starWarsCtrl
	});
