var Controller = require ('../app/controllers/db');

describe('DataBase Controller', function () {
    describe('saveData funciton', function () {
        var invalidVolunteer, validVolunteer;
        
        before(function () {
            var Volunteer = function (volunteerName, gestureName) {
                name: volunteerName,
                gestures: [{
                    name: gestureName,
                    frames: []
                }]
            };
            
            invalidVolunteer = new Volunteer(123, 456);
            validVolunteer = new Volunteer('Andressa', 'Number_0');
            
            for (var i = 0; i <= 120; i++) {
                validVolunteer.gestures.frames.push('Include a JSON Object here');
            }
        });

        it.skip('Throw a error when given a empty parameter', function (done) {

        });

        it.skip('Throw a error when given a volunteer with invalid name', function (done) {

        });

        it.skip('Throw a error when given a volunteer with invalid gesture name', function (done) {

        });

        it.skip('Should execute normally without errors', function (done) {

        });
    });
});