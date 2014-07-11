'use strict';

/**
 * @ngdoc function
 * @name editorDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the editorDemoApp
 */
angular.module('editorDemoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
