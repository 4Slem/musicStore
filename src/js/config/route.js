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

  		var playlists = {
		    name: 'playlists',
		    url: '/playlists',
		    templateUrl: 'pages/playlists.html',
		    controller: 'playlistsCtrl'
  		}

  		var autor = {
		    name: 'autor',
		    url: '/autor/:id',
		    templateUrl: 'pages/autor.html',
		    controller: 'autorCtrl'
  		}

  		var playlist = {
		    name: 'playlist',
		    url: '/playlist/:id',
		    templateUrl: 'pages/playlist.html',
		    controller: 'playlistCtrl'
  		}
  		
  		$stateProvider.state(autor);
		$stateProvider.state(home);
		$stateProvider.state(myaudio);
  		$stateProvider.state(artists);
  		$stateProvider.state(playlists);
  		$stateProvider.state(playlist);

	});
})();