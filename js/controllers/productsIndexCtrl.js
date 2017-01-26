
VikingStore.controller("ProductsIndexCtrl",

  ["$scope", "$timeout", "productService", "categoryService", "cartService",

    function($scope, $timeout, productService, categoryService, cartService){

      $scope.products = productService.all();
      $scope.categories = categoryService.all();
      $scope.incrementQuantity = function incrementQuantity(product){
        cartService.incrementQuantity(product);
        $scope.message = "Added " + product.name + " to cart";
        $timeout(function(){
          $scope.message = null;
        }, 3000);
      };

    }

]);
