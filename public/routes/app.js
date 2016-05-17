var pesticide = angular.module('pesticide', ['ngRoute']);

pesticide.config(['$routeProvider', function ($routeProvider) {
  console.log('app js connected');
  $routeProvider
    .when('/contracts', {
      controller: 'ContractsController as ContractsController',
      templateUrl: '/frontend/contractsList.html'
    })

}])
