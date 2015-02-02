angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('VenuesCtrl', function($scope, Venues) {
  Venues.all().then(function(response) {
    $scope.venues =  response;
  });
})

.controller('VenueDetailCtrl', function($scope, $stateParams, Venues) {
  Venues.getInfo($stateParams.venueId).then(function(response) {
    $scope.venue = response;
  });
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
