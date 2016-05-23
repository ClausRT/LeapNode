angular.module('leap-node').controller('NumbersController', function ($scope) {
    var LeapController = new Leap.Controller({frameEventName: 'deviceFrame'});
    
    //LeapController.use('screen-position');
    LeapController.on('frame', function (frame) {
        var fingers = frame.hands[0].fingers
          , extendedFingers = 0;
        
        for (finger in fingers) {
            extendedFingers = extendedFingers << 1;
            
            if (fingers[finger].extended()) {
                extendedFingers = extendedFingers | 1;
            }
        }
        
        //I know I can't manipulate DOM directly, is a BAD PRATICLE, but this is only a test
        document.getElementById('fingersView').innerHTML = '' + extendedFingers;
    });
    
    LeapController.connect();
});