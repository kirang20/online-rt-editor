'use strict';

angular
    .module('editorDemoApp', [
        'ngRoute',
        'ngSanitize',
        'ngCkeditor'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
