angular.module('leap-node', ['ngRoute', 'ngResource']).config(function ($interpolateProvider, $routeProvider, $locationProvider) {
    //$interpolateProvider.startSymbol('[[').endSymbol(']]');   //Caso HBS e Angular começarem a brigar pela guarda dos {{}}, definir novos para o Angular
    
    $routeProvider.when('/home', {
        templateUrl: 'partials/welcome.html',
        controller: 'HomeController'
    });
    
    $routeProvider.when('/test', {
        templateUrl: 'partials/test.html',
        controller: 'TestController'
    });
    
    $routeProvider.when('/numbers', {
        templateUrl: 'partials/numbers.html',
        controller: 'NumbersController'
    });
    
    $routeProvider.otherwise({redirectTo: '/home'});
    
    $locationProvider.html5Mode(true);
});