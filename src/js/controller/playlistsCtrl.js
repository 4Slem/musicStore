(function () {
	angular.module('music').controller('playlistsCtrl', playlistsCtrl);

	function playlistsCtrl ($scope, playlistFact, idFact) {
		$scope.formAddNewPlaylist = false;
		$scope.playlist = playlistFact;
		$scope.playListName = "";
		$scope.PlayLidtDescription = "";

		$scope.deletePlaylist = function () {
			for(var i=0; i<$scope.playlist.length; i++) {
				if(this.list.id == $scope.playlist[i].id){
					console.log($scope.playlist[i]);
					 $scope.playlist.splice(i, 1);
					console.log(playlistFact);
					
				}
			}
		}

		$scope.showFormAddNewPlaylist = function () {
			$scope.formAddNewPlaylist = true;
		}

		$scope.addNewPlaylist = function (name, desc) {
			var id = idFact.id;

			var obj = {
				listName: name,
				id: id,
				musicId: [],
				desc: desc
			}

			idFact.id +=1;

			playlistFact.push(obj);

			$scope.playListName = "";
			$scope.PlayLidtDescription = "";
			$scope.formAddNewPlaylist = false;
			
		}
	}
})();