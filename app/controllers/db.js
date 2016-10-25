module.exports = function (app) {
    var Frames = app.models.frames
      , Volunteers = app.models.volunteers
      , Controller = {};
    
    //Method thats save the volunteer data plus they gestures
    Controller.saveData = function (volunteer) {    
        var newVolunteer = {
            name: "",
            gestures: []    //procurar depois como referenciar varias _id's do mongoDB
        },
            oneFrame = {}
         ,  gestureName = ""
         ,  volunteerId
          ;
        
        //Get the basic informations of volunteer
        newVolunteer.name = volunteer.name;
        
        //Separates the gestures array in gesture objects
        for (var k0 in volunteer.gestures) {
            gestureName = volunteer.gestures[k0].name;
            
            //Separates the frames array in frame objects
            //Add the gesture property to the oneFrame object
            for (var k1 in volunteer.gestures[k0].frames) {
                oneFrame.volunteerID = 1;     //Não sei como setar uma variavel que vai virar um ID
                oneFrame.gestureName = gestureName;
                
                //Add the frame's propertys to the oneFrame object
                for (var k2 in volunteer.gestures[k0].frames[k1]) {
                    oneFrame[k2] = volunteer.gestures[k0].frames[k1][k2];
                }
                
                //Save the individual frames and get they _id
                //Save the oneFrame objects
                Frames.save(oneFrame, function (err, doc) {
                    newVolunteer.gestures.push(doc._id);
                });
                
                oneFrame = {};
            }
        }
        
        //Save the volunteer entry with all the _id references to her gestures
        Volunteers.save(newVolunteer, function (err, doc) {
            volunteerId = doc._id;
        });
        
        //Find all the previous save gestures and update their _id reference to the volunteer
        for (var k in newVolunteer.gestures){
            Frames.findOne({ _id: newVolunteer.gestures[k]}, function (err, frame) {
                frame.volunteerID = volunteerId;
                frame.save();                
            });
        }
    };
    
    return Controller;
}