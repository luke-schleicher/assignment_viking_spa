
var VikingStore = angular.module("VikingStore", ["ui.router"]);

VikingStore.config(function($urlRouterProvider, $stateProvider) {

  $urlRouterProvider.otherwise("/products");

  $stateProvider
    .state("products", {
      url: "/products",
      templateUrl: "js/templates/products.html",
      controller: "ProductsCtrl"
    });

});
