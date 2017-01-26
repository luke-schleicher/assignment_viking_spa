
VikingStore.controller("CartShowCtrl",
  ["$scope", "cartService", "productService",

  function($scope, cartService, productService) {

    $scope.cart = cartService.getCart();
    $scope.products = cartService.getProducts();
    $scope.total = function(){
      var total = 0;
      for (var productId in $scope.cart) {
        product = productService.find(productId);
        total += $scope.cart[productId] * product.price;
      }
      return total;
    };

  }

]);
