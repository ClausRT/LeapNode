/*  !!! IMPORTANT !!!
        Remember to update app/models/frames and app/models/volunteers if you modify the volunteer object
*/
angular.module('Leap-node').controller('CollectController', function ($scope) {
    var leapController = new Leap.Controller({frameEventName: 'deviceFrame'});
    
    $scope.volunteer = {
        name: "",
        gestures: []
    };
    
    var gesture = {
        name: "",
        frames: [],
        clear: function () {
            this.name = "";
            this.frames = [];
        }
    };
    
    var getFrame (frame) {
        //Criar um algoritmo que remove os métodos e manter apenas as propriedades
        gesture.frames.push(frame);
    };
    
    $scope.captureEnabled = false;
    
    leapController.on('frame', function (frame) {
        if ($scope.captureEnabled && gesture.frames.length < 120) {
            getFrame(frame);
            
            if (gesture.frames.length >= 120) {
                gesture.name = "";  //Pegar conteudo de um input
                $scope.volunteer.gestures.push(gesture);
                gesture.clear();
                $scope.captureEnabled = false;
            }
        }
    });
    
    /*
    *   TO DO LIST
    *   - Remover as funções aqui antes de enviar para o back para ter menos bytes em transito entre front e back
    *   - Pegar nome do voluntario de um input
    *   - Criar a função que envia os dados do volunteer ou até mesmo o objeto volunteer para o back
    *   - Criar a função para interação do botão do modal do voluntario, do botão Next e botão Start/Pause
    */
});