module.exports = function (app) {
    var controller = app.controllers.home;
    
    //Soth solution.
    app.get('*', controller.index);
}