(function () {
	angular.module('music').controller('mainCtr', mainCtr);

	function mainCtr($scope, contentFact, playlistFact) {
		$scope.contents = contentFact;
		$scope.playlist = playlistFact;

		$scope.addPlaylist = function () {
			if(this.content.id in this.list.musicId) {
				console.log("error");
			}else {
				this.list.musicId.push(this.content.id);
			}
		}

		$scope.addAudio = function(id) {
			this.content.myMusic = true;
		}

		$scope.removeAudio = function(id) {
			this.content.myMusic = false;
		}

		$scope.addLike = function(id) {
			this.content.like = true;
		}

		$scope.removeLike = function(id) {
			this.content.like = false;
		}
	}
})();