(function () {
	angular.module('music').factory('playlistFact', playlistFact);

	function playlistFact () {
		return [{
				listName: "name",
				id: 22,
				musicId: [19,18],
				desc: "desc"
			}];
	}

	angular.module('music').factory('idFact', idFact);

	function idFact () {
		return {id: 1};
	}

})();