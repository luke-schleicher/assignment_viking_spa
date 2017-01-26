
var VikingStore = angular.module('VikingStore', ['ui.router']);

VikingStore.config(function($urlRouterProvider, $stateProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "js/templates/home.html",
      controller: "HomeCtrl"
    });

});
