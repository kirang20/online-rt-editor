'use strict';

/**
 * @ngdoc overview
 * @name editorDemoApp
 * @description
 * # editorDemoApp
 *
 * Main module of the application.
 */
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
