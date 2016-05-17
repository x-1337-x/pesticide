var app = angular.module('pesticide')

app.controller('ContractsController', ['$scope', '$http', ContractsController])

function ContractsController($scope, $http) {
  var vm = this;

  vm.contracts = [];

  $http.get('/contracts')
    .then(function (res) {
      if(res.data.success){
        vm.contracts = res.data.contracts;
      }
    })

}
