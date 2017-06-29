angular.module('minhasDiretivas', [])
    .directive('meuPainel', function () {
        var ddo = {};

        ddo.restrict = "AE"; //restrincoes de poder trabalhar como atribute and element
        //scope isolado
        ddo.scope = {
            titulo: '@'
        };

        ddo.transclude = true; // pra manter os elemntos filhos
        ddo.templateUrl = 'js/directives/meu-painel.html';
        return ddo;
    });