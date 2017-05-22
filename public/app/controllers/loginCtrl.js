angular.module('app').controller('loginCtrl', function ($scope, $firebaseAuth,$firebaseArray) {
    
    var ref = firebase.database().ref();
	$scope.root =  $firebaseArray(ref);
        console.log($scope.root);
  $scope.auth = $firebaseAuth();


// var auth = $firebaseAuth();

  // login with Facebook
//  auth.$signInWithPopup("facebook").then(function(firebaseUser) {
//    console.log("Signed in as:", firebaseUser.uid);
//  }).catch(function(error) {
//    console.log("Authentication failed:", error);
//  });


  $scope.currentUser = null;
  $scope.currentUserRef = null;


  $scope.login = function() {
    $scope.auth.$authWithOAuthRedirect('facebook', {
      scope : 'email, public_profile, user_friends'
    }).catch(function(error) {
      if(error.code === 'TRANSPORT_UNAVAILABLE') {
        $scope.$authWithOAuthPopup('facebook', {
          scope : 'email, public_profile, user_friends'
        }).catch(function(error) {
          console.error('login error: ', error);
        });
      } else {
        console.error('login error: ', error);
      }
    });
  };


  $scope.updateUserData = function() {
    $scope.currentUserRef.set($scope.currentUser);
  };


  $scope.auth.$onAuth(function(authData) {
    if(authData && $scope.currentUser == null) {
      var fbData = authData['facebook'];
      $scope.currentUser = {
        id : fbData['id'],
        displayName : fbData['displayName'],
        email : fbData['email'],
        accessToken : fbData['accessToken'],
        profileImageURL : fbData['profileImageURL']
      };
      $scope.currentUserRef = $scope.root.child('users').child(String($scope.currentUser['id']));
      $scope.updateUserData();
      console.log('logged in: ', $scope.currentUser);
    }
  });


  $scope.logout = function() {
    $scope.auth.$unauth();
    $scope.currentUser = null;
    $scope.currentUserRef = null;
    console.log('logged out');
  };
});