
VikingStore.controller("HomeCtrl",

  ["$scope", "productService",

    function($scope, productService){

      $scope.products = productService.all();

    }

]);
