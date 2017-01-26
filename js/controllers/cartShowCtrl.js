VikingStore.controller('CartShowCtrl', ['$scope', 'cartService',
  function($scope, cartService) {

    $scope.cart = cartService.getCart();

    $scope.products = cartService.getProducts();

    console.log($scope.cart);
  }
]);