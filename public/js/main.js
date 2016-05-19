angular.module('leap-node', ['ngRoute', 'ngResource']).config(function ($interpolateProvider, $routeProvider) {
    //$interpolateProvider.startSymbol('[[').endSymbol(']]');   //Caso HBS e Angular começarem a brigar pela guarda dos {{}}, definir novos para o Angular
    
    $routeProvider.when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
    });
    
    $routeProvider.otherwise({redirectTo: '/home'});
});