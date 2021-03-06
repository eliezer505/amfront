var club = angular.module("app").config(function($stateProvider, $urlRouterProvider) {
	//
	// For any unmatched url, redirect to /state1
	$urlRouterProvider.otherwise("/login");
	//
	// Now set up the states
	$stateProvider .state('login', {
		url : "/login",
		templateUrl : "app/pages/login.html"
	}).state('main', {
		url : "/main",
		templateUrl : "app/pages/main.html"
	}).state('main.clubes', {
		url : "/clubes",
		templateUrl : "app/pages/main.clubes.html"
		//      controller: mainClubesCtrl
		//              function($scope) {
		//        $scope.items = ["A", "List", "Of", "Items"];
		//      }
	}).state('main.search', {
		url : "/search",
		templateUrl : "app/pages/main.search.html"
		//      controller: mainClubesCtrl
		//              function($scope) {
		//        $scope.items = ["A", "List", "Of", "Items"];
		//      }
	}).state('main.favorites', {
		url : "/favorites",
		templateUrl : "app/pages/main.favorites.html"
		//      controller: mainClubesCtrl
		//              function($scope) {
		//        $scope.items = ["A", "List", "Of", "Items"];
		//      }
	}).state('space', {
		url : "/space",
		templateUrl : "app/pages/space.html"
		//      controller: mainClubesCtrl
		//              function($scope) {
		//        $scope.items = ["A", "List", "Of", "Items"];
		//      }
	}).state('space.gallery', {
		url : "/space.gallery",
		templateUrl : "app/pages/space.gallery.html"

		//
		//      }
			}).state('space.boys', {
		url : "/space.boys",
		templateUrl : "app/pages/space.boys.html"

		//
		//      }
			}).state('space.girls', {
		url : "/space.girls",
		templateUrl : "app/pages/space.girls.html"

		//
		//      }
			}).state('profile', {
		url : "/profile",
		templateUrl : "app/pages/profile.html"

		//
		//      }
					}).state('events', {
		url : "/events",
		templateUrl : "app/pages/events.html"

		//
		//      }
							}).state('pictures', {
		url : "/pictures",
		templateUrl : "app/pages/pictures.html"

		//
		//      }
					}).state('profile.images', {
		url : "/profile.images",
		templateUrl : "app/pages/profile.images.html"

		//
		//      }
			}) .state('club', {
		url : "/club",
		templateUrl : "app/pages/club.html",
		params : {
			obj : null
		}
			}).state('club.party', {
		url : "/club.party",
		templateUrl : "app/pages/club.party.html"
		//      controller: clubPartyCtrl
		//              function($scope) {
		//        $scope.items = ["A", "List", "Of", "Items"];
		//      }
			}).state('club.about', {
		url : "/club.about",
		templateUrl : "app/pages/club.about.html"
		//      controller: clubAboutCtrl
		//              function($scope) {
		//        $scope.items = ["A", "List", "Of", "Items"];
		//      }

	}).state('profileUpdate', {
		url : "/profileUpdate",
		templateUrl : "app/pages/profileUpdate.html"

		//
		//      }
					});

}); 