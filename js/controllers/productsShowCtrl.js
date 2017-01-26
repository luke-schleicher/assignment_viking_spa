
VikingStore.controller("ProductsShowCtrl",
  ["$scope", "$stateParams", "productService",

  function($scope, $stateParams, productService){
    $scope.product = productService.find($stateParams.id);
  }

]);
