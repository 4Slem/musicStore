(function () {
	angular.module('music').controller('mainCtr', mainCtr);

	function mainCtr($scope, contentFact, playlistFact) {
		$scope.contents = contentFact;
		$scope.playlist = playlistFact;

		$scope.addPlaylist = function () {
			thes = this;
			var a = true;

			function addlist(call) {
				for(var i = 0; i < 4; i++) {
					if(thes.content.id == thes.list.musicId[i]) {
						a = false;
						console.log("Вже існує");
						return a;
					}
					
				}
				
				call();
			}

			addlist(function() {
				thes.list.musicId.push(thes.content.id);
				console.log("Додано");
			});

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