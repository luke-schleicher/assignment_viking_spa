
VikingStore.directive("productTile", function(){

  return {
    templateUrl: "js/directives/productTile.html"
    restrict: "E",
    scope: {
      product: "="
    }
  };

});
