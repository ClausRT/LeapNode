var Controller = require ('../app/controllers/db')//I need a app object somehow
  , expect = require('chai').expect
  , sinon = require('sinon')
  ;

describe('DataBase Controller', function () {
    describe('saveData funciton', function () {
        var invalidVolunteer, validVolunteer;
        
        before(function () {
            var Volunteer = function (volunteerName) {
                    this.name = volunteerName;
                    this.gestures = [];
                    this.addGesture = function (gesture) {
                        this.gestures.push(gesture);
                    }
            }
              , Gesture = function (gestureName) {
                    this.name = gestureName;
                    this.frames = [];
                    this.addFrame = function (frame) {
                        this.frames.push(frame);
                    }
            }
              , newGesture
              , someFrame
              ;
            
            invalidVolunteer = new Volunteer(123, 456);
            validVolunteer = new Volunteer('Andressa');
            
            for (var i = 0; i < 10; i++) {
                newGesture = new Gesture ('Number_' + i);
                for (var j = 0; j < 120; j++) {
                    someFrame = {
                        name: 'Frame number ' + ((i * 1000) + j),
                        id: (i * 1000) + j,
                        misc: '',
                        hadBool: true
                    };
                    newGesture.addFrame(JSON.stringify(someFrame));
                }
                validVolunteer.addGesture(newGesture);
            }
        });
        
        beforeEach(function () {
            sinon.stub(Controller, 'saveData');
        });
        
        afterEach(function () {
            Controller.saveData.restore();
        });

        it('Throw a error when given a empty parameter', function (done) {
            var errors = null;
            
            try {
                Controller.saveData();
            } catch (err) {
                errors = err;
            }
        });

        it.skip('Throw a error when given a volunteer with invalid name', function (done) {

        });

        it.skip('Throw a error when given a volunteer with invalid gesture name', function (done) {

        });

        it.skip('Should execute normally without errors', function (done) {

        });
    });
});