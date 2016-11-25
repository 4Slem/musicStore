(function () {
	angular.module('music').controller('autorCtrl', autorCtrl);

	function autorCtrl ($stateParams, autorFact, contentFact, $scope) {
		for(var elem of autorFact) {
		    if(elem.id == $stateParams.id){
		    	$scope.autor = elem;
		    }
		}

		$scope.music = [];

		for(var e of contentFact) {
		    if(e.autorId == $stateParams.id){
		    	$scope.music.push(e);
		    }
		}
		console.log($scope.music);
	}
})();