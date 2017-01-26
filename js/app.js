var VikingStore = angular.module('VikingStore',['ui.router']);

VikingStore.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

});