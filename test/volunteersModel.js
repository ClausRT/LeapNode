var expect = require ('chai').expect
  , Volunteers = require('../app/models/volunteers')
  , mongoose = require('mongoose')
  ;

describe('Volunteers Model', function () {    
    it ('should be invalid if gestures is empty', function (done) {
        var v = new Volunteers();
        
        v.validate(function (err) {
            expect(err.errors.gestures).to.exist;
            done();
        });
    });
    
    it ('should save without errors', function (done) {
        var gestures = [];
        
        for (var i = 0; i < 10; i++)
            gestures.push(mongoose.Types.ObjectId());
        
        var v = new Volunteers({volunteerName: 'Jessie J', gestures: gestures});
        
        v.validate(function (err) {
            expect(err).to.not.exist;
            done();
        });
    });
});