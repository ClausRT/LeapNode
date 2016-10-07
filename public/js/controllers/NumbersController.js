angular.module('leap-node').controller('NumbersController', function ($scope) {
    var LeapController = new Leap.Controller({frameEventName: 'deviceFrame'});
    
    //function get in StackOverflow, adapted by me
    var pad = function (num, size) {
        var s = num.toString(2);
        while (s.length < size) s = "0" + s;
        return s;
    }
    
    //LeapController.use('screen-position');
    LeapController.on('frame', function (frame) {
        if (frame.hands[0]) {
            var fingers = frame.hands[0].fingers
              , extendedFingers = 0;

            for (finger in fingers) {
                extendedFingers = extendedFingers << 1;

                if (fingers[finger].extended) {
                    extendedFingers = extendedFingers | 1;
                }
            }

            //I know I can't manipulate DOM directly is a BAD PRATICLE but this is only a test
            document.getElementById('fingersView').innerHTML = pad(extendedFingers, 5);
        } else {
            document.getElementById('fingersView').innerHTML = 'Ponha sua mão sobre o sensor';
        }
    });
    
    LeapController.connect();
});