
VikingStore.controller("HomeCtrl",

  ["$scope", "productService",

    function($scope, productService){
      // TODO

      productService.all();

    }

]);
