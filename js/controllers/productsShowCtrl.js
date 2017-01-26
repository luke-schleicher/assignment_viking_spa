
VikingStore.controller("ProductsShowCtrl",
  ["$scope", "$state", "$stateParams", "productService", "cartService",

  function($scope, $state, $stateParams, productService, cartService){

    $scope.product = productService.find($stateParams.id);

    $scope.addQuantity = function addQuantity(product, quantity){
      cartService.addQuantity(product, quantity);
      $state.go("cart");
    };

  }

]);
