module.exports = function () {
    var Controller = {};
    
    Controller.index = function (req, res) {
        res.render('home', {title: 'Leap Node IF-Sul', test: 'Se você está lendo isso, o HBS está instalado e funcionando.'});
    };
    
    return Controller;
}