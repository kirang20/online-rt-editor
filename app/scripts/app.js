'use strict';

angular
    .module('editorDemoApp', [
        'ngRoute',
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
