(function () {
	angular.module('music').controller('playlistCtrl', playlistCtrl);

	function playlistCtrl ($scope, $stateParams, playlistFact, contentFact) {
		$scope.playlist = false;
		$scope.playlistMusic = [];
		for(elem of playlistFact) {
			if($stateParams.id == elem.id) {
				$scope.playlist = elem;
			} else if(elem.id == false) {
				console.log("ds");
			}
		}

		for(music of contentFact) {
			for(e of $scope.playlist.musicId) {
				if(music.id == e) {
					$scope.playlistMusic.push(music);
				}
			}
		}

		$scope.removePlaylist = function (id) {
			for(var i=0; i<this.playlist.musicId.length; i++){
				if(this.playlist.musicId[i] == this.content.id){
					delete this.playlist.musicId[i];
					delete $scope.playlist.musicId[i];
				}
			}
		}
		

		
	}
})();