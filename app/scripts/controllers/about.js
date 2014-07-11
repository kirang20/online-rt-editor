'use strict';

/**
 * @ngdoc function
 * @name editorDemoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the editorDemoApp
 */
angular.module('editorDemoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
