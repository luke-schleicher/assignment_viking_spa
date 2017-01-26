
VikingStore.controller("ProductsCtrl",

  ["$scope", "productService", "categoryService",

    function($scope, productService, categoryService){

      $scope.products = productService.all();
      $scope.categories = categoryService.all();

      

    }

]);
