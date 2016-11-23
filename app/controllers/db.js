module.exports = function (app) {
    var Gestures = app.models.gestures
      , Volunteers = app.models.volunteers
      , Controller = {};
    
    //Method thats save the volunteer data plus they gestures
    Controller.saveData = function (volunteer) {    
        var newVolunteer = {
                name: "",
                gestures: []    //procurar depois como referenciar varias _id's do mongoDB
        }
          , gesture = {
                name: "",
                frames: []
        }
          //, gestureName = ""
          , volunteerId
          ;
        
        //Get the basic informations of volunteer
        newVolunteer.name = volunteer.name;
        
        //Separates the gestures array in gesture objects
        for (var k0 in volunteer.gestures) {
            //gestureName = volunteer.gestures[k0].name;
            
            //Separates the frames array in frame objects
            //Add the gesture property to the oneFrame object
            for (var k1 in volunteer.gestures[k0].frames) {
                oneFrame.volunteerID = 1;     //This value will be changed to a valid _id
                if (volunteer.gestures[k0].name)
                    oneFrame.gestureName = gestureName;
                else
                    throw new Error('No gesture name');
                
                //I think that stringify the JSON is a better idea than move all his propreties to de oneFrame object
                //Extract one frame from volunteer
                oneFrame.frame = JSON.stringify(volunteer.gestures[k0].frames[k1]);
                
                /*
                //Add the frame's propertys to the oneFrame object
                for (var k2 in volunteer.gestures[k0].frames[k1]) {
                    oneFrame[k2] = volunteer.gestures[k0].frames[k1][k2];
                }
                */
                
                //Save the individual frames and get they _id
                //Save the oneFrame objects
                Gestures.save(oneFrame, function (err, doc) {
                    if (err) throw err;
                    else newVolunteer.gestures.push(doc._id);
                });
                
                //Clear the oneFrame object
                oneFrame = {};
            }
        }
        
        //Save the volunteer entry with all the _id references to her gestures
        Volunteers.save(newVolunteer, function (err, doc) {
            if (err) throw err;
            else volunteerId = doc._id;
        });
        
        //Find all the previous save gestures and update their _id reference to the volunteer
        for (var k in newVolunteer.gestures){
            Gestures.findOne({ _id: newVolunteer.gestures[k]}, function (err, frame) {
                if (err) throw err;
                else {
                    frame.volunteerID = volunteerId;
                    frame.save();    
                }
            });
        }
    };
    
    return Controller;
}