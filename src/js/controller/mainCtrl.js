(function () {
	angular.module('music').controller('mainCtr', mainCtr);

	function mainCtr($scope, contentFact) {
		$scope.contents = contentFact;

		$scope.addAudio = function(id) {
			for(elem of contentFact) {
				if(elem.id == id)
				{
					elem.myMusic = true;
					console.log(contentFact);
				}
			}

		}

		$scope.removeAudio = function(id) {
			for(elem of contentFact) {
				if(elem.id == id)
				{
					elem.myMusic = false;
					console.log(contentFact);
				}
			}

		}

		$scope.addLike = function(id) {
			for(elem of contentFact) {
				if(elem.id == id)
				{
					elem.like = true;
					console.log(contentFact);
				}
			}
		}

		$scope.removeLike = function(id) {
			for(elem of contentFact) {
				if(elem.id == id)
				{
					elem.like = false;
					console.log(contentFact);
				}
			}
		}
	}
})();