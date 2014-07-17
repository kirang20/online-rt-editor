'use strict';

angular.module('editorDemoApp')
    .factory('customersFactory', function ($http) {
        return {
            get: function () {
                var url = 'resources/customers.json';
                return $http.get(url).then(function (response) {
                    return response.data;
                });
            }
        };
    });
