
VikingStore.controller("ProductsShowCtrl",
  ["$scope", "$state", "$stateParams", "productService", "cartService",

  function($scope, $state, $stateParams, productService, cartService){

    $scope.product = productService.find($stateParams.id);

    $scope.changeQuantity = function changeQuantity(product, quantity){
      cartService.changeQuantity(product, quantity);
      $state.go('cart');
    };



  }

]);
