(function () {
	angular.module('music').controller('artistsCtrl', artistsCtrl);

	function artistsCtrl($scope, autorFact) {
		$scope.autors = autorFact;
		console.log($scope.autor);
	}
})();