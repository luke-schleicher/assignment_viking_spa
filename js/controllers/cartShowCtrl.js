VikingStore.controller('CartShowCtrl', ['$scope', 'cartService',
  function($scope, cartService) {

    $scope.cart = cartService.getCart();

  }
]);