(function () {
	angular.module('music').config(function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');
		var home = {
		    name: 'home',
		    url: '/',
		    templateUrl: 'pages/home.html',
		    controller: 'mainCtr'
  		}

		var myaudio = {
		    name: 'myaudio',
		    url: '/myaudio',
		    templateUrl: 'pages/my-music.html',
		    controller: 'myAudioCtrl'
  		}

  		var artists = {
		    name: 'artists',
		    url: '/artists',
		    templateUrl: 'pages/artists.html',
		    controller: 'artistsCtrl'
  		}

  		var playlist = {
		    name: 'playlist',
		    url: '/playlist',
		    templateUrl: 'pages/playlist.html',
		    controller: 'playlistCtrl'
  		}

  		var autor = {
		    name: 'autor',
		    url: '/autor/:id',
		    templateUrl: 'pages/autor.html',
		    controller: 'autorCtrl'
  		}
  		
  		$stateProvider.state(autor);
		$stateProvider.state(home);
		$stateProvider.state(myaudio);
  		$stateProvider.state(artists);
  		$stateProvider.state(playlist);

	});
})();