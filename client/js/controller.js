angular.module('Abellauto', ['ngTable'])
  .controller('TableController', function($scope) {
      $scope.orders = [];
      $scope.orders.push({
          info: "Cruze Negro Alicia 02300",
          hojalateria: true,
          mecanica: true,
          preparado: true,
          pintura: true,
          armado: true,
          tots: true,
          detallado: true,
          programacion: "LU-1",
          reproceso: ""
      },
      {
          info: "Kenji Negro Brown 02300",
          hojalateria: true,
          mecanica: true,
          preparado: true,
          pintura: true,
          armado: true,
          tots: true,
          detallado: true,
          programacion: "LU-1",
          reproceso: ""
      }
      ,
      {
          info: "Kenji Black Brown 02300",
          hojalateria: true,
          mecanica: true,
          preparado: true,
          pintura: true,
          armado: true,
          tots: true,
          detallado: true,
          programacion: "LU-1",
          reproceso: ""
      }
    );
 });
