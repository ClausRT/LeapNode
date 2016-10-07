module.exports = function (app) {
    var Frames = app.models.frames
      , Controller = {};
    
    //expect an object with gestureName, collaborator and array of frames
    //No checks or fail saves
    Controller.saveGesture = function (data) {
        var frameJSON = [];
        
        //Need some improvement like remove the functions and save only the useful data
        for (var k in data.frames) {
            frameJSON.push(JSON.parse(data.frames[k]));
        }
        
        var structuredData = {
            gestureName: data.gestureName,
            collaborator: data.name,
            frames: frameJSON
        };
        
        Frames.save(structuredData);
    };
    
    return Controller;  //adicionei essa linha agora, acho que fazia falta
}