'use strict';

angular.module('editorDemoApp')
    .factory('editorConfigFactory', function ($http) {
        return {
            get: function () {
                var url = 'resources/editorConfig.json';
                return $http.get(url).then(function (response) {
                    return response.data;
                });
            }
        };
    });
