var mongoose = require('mongoose')
  , expect = require('chai').expect
  , Gestures = require('../app/models/gestures')
  ;

describe('Gestures Model', function () {
    it('should not save without the volunteer id', function (done) {
        var g = new Gestures();
        
        g.validate(function (err) {
            expect(err.errors.volunteer).to.exist;
            done();
        });
    });
    
    it('should not save without the gesture name', function (done) {
        var g = new Gestures();
        
        g.validate(function (err) {
            expect(err.errors.gestureName).to.exist;
            done();
        });
    });
    
    it('should not save without any frames', function (done) {
        var g = new Gestures();
        
        g.validate(function (err) {
            expect(err.errors.frames).to.exist;
            done();
        });
    });
    
    //A quasi-valid Gesture
    var newGesture = {
        volunteer: mongoose.Types.ObjectId(),
        gestureName: 'test',
        frames: [
            'Good morning! I\'m a frame.',
            'Oh! Hello. I\'m a frame too!'
        ]
    }
    
    it('should not save without at least one hundred and twenty frames', function (done) {
        var g = new Gestures(newGesture);
        
        g.validate(function (err) {
            expect(err.errors.frames.frames).to.exist.and.equal('Error: try to save too few frames');
            done();
        });
    });
    
    for (var i = 0; i < 120; i++)
        newGesture.frames.push(newGesture.frames[0]);
    
    it('should save without any errors', function (done) {
        var g = new Gestures();
        
        g.validate(function (err) {
            expect(err).to.exist;
            done();
        });
    });
});