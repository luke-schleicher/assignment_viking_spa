
var VikingStore = angular.module("VikingStore", ["ui.router"]);

VikingStore.config(function($urlRouterProvider, $stateProvider) {

  $urlRouterProvider.otherwise("/products");

  $stateProvider
    .state("products", {
      url: "/products",
      abstract: true,
      template: "<div ui-view></div>"
    })
    .state("products.index", {
      url: "",
      templateUrl: "js/templates/products-index.html",
      controller: "ProductsIndexCtrl"
    });

});
