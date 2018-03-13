'use strict';

module.controller('MateriaCtrl', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {
        //listar
        $scope.datosFormulario = {};
        $scope.panelEditar = false;
        $scope.lista = materias;
        $scope.listaCarrera = carreras;
        $scope.listaProfesores = profesores;

        //guardar
        $scope.nuevo = function () {
            $scope.panelEditar = true;
            $scope.datosFormulario = {};
        };

        $scope.guardar = function () {
            var index = $scope.lista.indexOf($scope.datosFormulario);
            if (index === -1) {
                $scope.datosFormulario.id = idMateria++;
                $scope.lista.push($scope.datosFormulario);
            }
            $scope.panelEditar = false;
        };
        $scope.cancelar = function () {
            $scope.panelEditar = false;
            $scope.datosFormulario = {};
        };

        //editar
        $scope.editar = function (data) {
            $scope.panelEditar = true;
            $scope.datosFormulario = data;
        };

        //eliminar
        $scope.eliminar = function (data) {
            if (confirm('\xbfDesea elminar este registro?')) {
                var index = $scope.lista.indexOf(data);
                if (index > -1) {
                    $scope.lista.splice(index, 1);
                }
            }
        };
    }]);
