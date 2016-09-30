module.exports = function (app) {
    var controller = app.controllers.db;
    
    app.route('/save')
        .post(function (req, res) {
            controller.saveGesture(req.gesture)
    });
}