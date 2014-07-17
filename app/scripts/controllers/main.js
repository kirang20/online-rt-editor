'use strict';

angular.module('editorDemoApp')
    .controller('MainCtrl', function ($scope, customersFactory, chaptersFactory) {
        $scope.editorOptions = {
            "language": "en",
            "toolbar": [
                {
                    "name": "tools",
                    "items": [ "Maximize", "ShowBlocks" ]
                },
                {
                    "name": "editing",
                    "groups": [ "find", "selection", "spellchecker" ],
                    "items": [ "Find", "Replace", "-", "SelectAll", "-", "Scayt" ]
                },
                {
                    "name": "basicstyles",
                    "groups": [ "basicstyles", "cleanup" ],
                    "items": [ "Bold", "Italic", "Underline", "Strike", "Subscript", "Superscript", "-", "RemoveFormat" ]
                },
                {
                    "name": "paragraph",
                    "groups": [ "list", "indent", "blocks", "align", "bidi" ],
                    "items": [ "NumberedList", "BulletedList", "-", "Outdent", "Indent", "-", "-", "JustifyLeft", "JustifyCenter", "JustifyRight", "JustifyBlock", "-" ]
                },
                {
                    "name": "links",
                    "items": [ "Link", "Unlink" ]
                },
                {
                    "name": "insert",
                    "items": [ "Image", "Table"]
                },
                {
                    "name": "styles",
                    "items": [ "Styles", "Format", "Font", "FontSize" ]
                },
                {
                    "name": "colors",
                    "items": [ "TextColor", "BGColor" ]
                }
            ],
            "toolbarGroups": [
                {
                    "name": "document",
                    "groups": [ "mode", "document", "doctools" ]
                },
                {
                    "name": "clipboard",
                    "groups": [ "clipboard", "undo" ]
                },
                {
                    "name": "editing",
                    "groups": [ "find", "selection", "spellchecker" ]
                },
                {
                    "name": "forms"
                },
                "/",
                {
                    "name": "basicstyles",
                    "groups": [ "basicstyles", "cleanup" ]
                },
                {
                    "name": "paragraph",
                    "groups": [ "list", "indent", "blocks", "align", "bidi" ]
                },
                {
                    "name": "links"
                },
                {
                    "name": "insert"
                },
                "/",
                {
                    "name": "styles"
                },
                {
                    "name": "colors"
                },
                {
                    "name": "tools"
                },
                {
                    "name": "others"
                },
                {
                    "name": "about"
                }
            ]
        };

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
