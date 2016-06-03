angular.module('apiApp')
	.service('starWarsService', function($http, baseUrl, $q){

		this.getPerson = function(){
			return $http.get(baseUrl.url + "people/1")
				.then(function(response){
					
					var dfd = $q.defer();
					var person1 = response.data;
					var starshipArray = [];

					for (var i = 0; i < person1.starships.length; i++) {

						$http.get(person1.starships[i])
						.then(function(starships){
							starshipArray.push(starships);
							if (starshipArray.length === person1.starships.length) {
								dfd.resolve(starshipArray);
							}
						})
					}
					return dfd.promise;		
				})
		};












// end of starWarsService
	});