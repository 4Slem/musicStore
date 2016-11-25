(function () {
	angular.module('music').factory('autorFact', autorFact);

	function autorFact () {
		return [
			{
				id: 1,
				name: "Rihanna",
				image: "image/rihanna.jpg"

			},
			{
				id: 2,
				name: "Kany West",
				image: "image/kanye.jpg"

			},
			{
				id: 3,
				name: "Chris Brown",
				image: "image/ChrisBrown.jpg"

			},
			{
				id: 4,
				name: "justin timberlake",
				image: "image/justin.jpg"
			}
		]
	}
})();