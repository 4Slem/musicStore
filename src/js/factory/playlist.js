(function () {
	angular.module('music').factory('playlistFact', playlistFact);

	function playlistFact () {
		return [{
				listName: "Моя музика",
				id: 22,
				musicId: [19,18],
				desc: "Моя улюблена музика"
			}];
	}

	angular.module('music').factory('idFact', idFact);

	function idFact () {
		return {id: 1};
	}

})();