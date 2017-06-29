angular.module('minhasDiretivas', [])
    .directive('meuPainel', function () {
        var ddo = {};

        ddo.restrict = "AE"; //restrincoes de poder trabalhar como atribute and element
        //scope isolado
        ddo.scope = {
            titulo: '@'
        };

        ddo.transclude = true; // pra manter os elemntos filhos
        ddo.template  =
                    '<div class="panel panel-default">'
                        +'<div class="panel-heading">'
                         +'  <h3 class="panel-title"> {{titulo}}</h3>'
                        +'</div>'
                        +'<div class="panel-body" ng-transclude>'
                        +'</div>'
                    +'</div>'

        return ddo;
    });