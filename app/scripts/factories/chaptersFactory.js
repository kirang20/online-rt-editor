'use strict';

angular.module('editorDemoApp')
    .factory('chaptersFactory', function ($http) {
        return {
            get: function () {
                var url = 'resources/chapters.json';
                return $http.get(url).then(function (response) {
                    return response.data;
                });
            }
        };
    });
