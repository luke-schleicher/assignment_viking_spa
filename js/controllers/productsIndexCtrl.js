
VikingStore.controller("ProductsIndexCtrl",

  ["$scope", "productService", "categoryService", "cartService",

    function($scope, productService, categoryService, cartService){

      $scope.products = productService.all();
      $scope.categories = categoryService.all();
      $scope.incrementQuantity = function incrementQuantity(product){
        cartService.incrementQuantity(product);
      };

    }

]);
