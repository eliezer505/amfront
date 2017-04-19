angular
        .module('app')

        .config(function ($mdThemingProvider) {
            $mdThemingProvider.theme('altTheme')
                    .primaryPalette('deep-orange')
                    .accentPalette('deep-orange'); // specify primary color, all
            // other color intentions will be inherited
            // from default
        })

        .controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $mdMedia) {
            $scope.showMobileMainHeader = true;
            $scope.openSideNavPanel = function () {
                $mdSidenav('left').open();
            };
            $scope.closeSideNavPanel = function () {
                $mdSidenav('left').close();
            };
//            $scope.toggleLeft = buildToggler('right');
//            $scope.toggleRight = buildToggler('left');
//
//            function buildToggler(componentId) {
//                return function () {
//                    $mdSidenav(componentId).toggle();
//                };
//            }
        });
  