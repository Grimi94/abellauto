angular.module('Abellauto', ['ngTable'])
  .controller('TableController', function($scope, $http) {
    $scope.orders = [];

    $http.get('/api/records').success(function(data){
        // console.log(data);
        $scope.orders = data;
    });
 });
