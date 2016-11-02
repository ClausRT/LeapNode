var mongoose = require('mongoose')
  , expect = require('chai').expect
  , Gestures = require('../app/models/gestures')
  ;

//To do: change the it's text becaus I'm testing validation and not saving. The Model#save is not called in no one of the tests above
describe('Gestures Model', function () {
    var invalidGesture, validGesture;
    
    before(function () {
        invalidGesture = {
            volunteer: mongoose.Types.ObjectId(),
            gestureName: 'test',
            frames: [
                'Good morning! I\'m a frame.',
                'Oh! Hello. I\'m a frame too!'
            ]
        }
        
        validGesture = {
            volunteer: mongoose.Types.ObjectId(),
            gestureName: 'test',
            frames: [
                'Good morning! I\'m a frame.',
                'Oh! Hello. I\'m a frame too!'
            ]
        }
        
        for (var i = 0; i < 120; i++)
            validGesture.frames.push(validGesture.frames[0]);
    });
    
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
    
    it('should not save without at least one hundred and twenty frames', function (done) {
        var g = new Gestures(invalidGesture);
        
        g.validate(function (err) {
            expect(err.errors.frames.message).to.exist.and.equal('Error: try to save too few frames');
            done();
        });
    });
    
    it('should save without any errors', function (done) {
        var g = new Gestures(validGesture);
        
        g.validate(function (err) {
            expect(err).to.not.exist;
            done();
        });
    });
});