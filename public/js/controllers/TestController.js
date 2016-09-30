angular.module('leap-node').controller('TestController', function ($scope) {
    var e = document.getElementById('scene');
    $scope.message = 'Controller loaded';    
    
    Leap.loop(function (frame){
        $scope.hand = frame.hands[0];
        $scope.$apply();    //Como Leap.loop nunca para, Angular nunca atualiza o escopo do controller, então eu forço a atualização manualmente
    });
});

//TO DO
/*
    Criar o meu proprio controller para capturar os dados do Leap.
    Setar eventos que validam e coletam os dados do Leap.
    Setar a velocidade da captura e uma captura não bloqueante.
    Exibir dados na tela.
    Salvar dados no MongoDB
    Achar declaração dos objetos nas bibliotecas.

*/