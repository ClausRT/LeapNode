var fs = require('fs');

module.exports = function () {
    var Controller = {}
      , json = JSON.parse(fs.readFileSync('package.json', 'utf8'))
      ;
    
    Controller.index = function (req, res) {
        var data = {
            title: 'Leap Node IF-Sul',
            version: json.version,
            authors: json.author,
            license: json.license,
            url: json.homepage
        };
        res.render('home', data);
    };
    
    return Controller;
}