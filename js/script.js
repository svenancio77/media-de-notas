var app = angular.module("app",[]);

app.controller('MyController', function($scope) {

    $scope.tste = 'EU';

    $scope.student = [];
    $scope.nomeAluno = '';
    $scope.notaA1 = 0;
    $scope.notaA2 = 0;

    $scope.enviar = function() {
        
        var media = ( $scope.notaA1 + $scope.notaA2 ) / 2;
        var situacao2 = media > 6 ? 'Aprovado' : 'Reprovado';
        
        $scope.student.push({
            'nome':  $scope.nomeAluno,
            'nota1': $scope.notaA1,
            'nota2': $scope.notaA2,
            'media': media,
            'situacao': situacao2
        });
        $scope.reset();
    }

    $scope.reset = function() {
        $scope.nomeAluno = '';
        $scope.notaA1 = 0;
        $scope.notaA2 = 0;
    }

    $scope.reset();
});