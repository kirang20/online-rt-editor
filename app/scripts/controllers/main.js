'use strict';

angular.module('editorDemoApp')
    .controller('MainCtrl', function ($scope, editorConfigFactory, customersFactory, chaptersFactory) {

        editorConfigFactory.get(function (config) {
            $scope.editorOptions = config;
        });

        $scope.canChapterBeSaved = true;

        $scope.customerSelected = function (customer) {
            $scope.filteredChapters = $scope.chapters.filter(function (chapter) {
                return chapter.customer === customer.name;
            });
            $scope.selectedChapter = $scope.filteredChapters[0];
            $scope.selectedChapterContents = $scope.filteredChapters[0].contents;
            $scope.customers.forEach(function (c) {
                c.state = 'inActive';
            });
            customer.state = 'active';
            $scope.chapterSelected($scope.selectedChapter);

        };

        $scope.chapterSelected = function (chapter) {
            $scope.selectedChapter = chapter;
            $scope.selectedChapterContents = chapter.contents;
            $scope.chapters.forEach(function (c) {
                c.state = 'inActive';
            });
            chapter.state = 'active';
        };

        $scope.saveChapter = function () {
            $scope.selectedChapter.contents = $scope.selectedChapterContents;
            $scope.canChapterBeSaved = false;
            setTimeout(function () {
                $scope.$apply(function () {
                    $scope.canChapterBeSaved = true;
                });
            }, 1000);
        };

        customersFactory.get()
            .then(function (customers) {
                $scope.customers = customers;
            })
            .then(function () {
                chaptersFactory.get()
                    .then(function (chapters) {
                        $scope.chapters = chapters;
                        $scope.selectedCustomer = $scope.customers[0];
                        $scope.customerSelected($scope.selectedCustomer);
                    });
            });
    });
