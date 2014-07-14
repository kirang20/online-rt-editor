'use strict';

angular.module('editorDemoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.customers = [{name:'Aspen'}, {name:'WKLI'}, {name:'OUP'}];

    $scope.chapters = [{"customer":"Aspen","title":"Aspen Book 1 - Chapter 1","author":"Aspen Author 1","summary":"Aspen Book 1 - Chapter 1 Summary","contents":"This is the content of Aspen Book 1 - Chapter 1","lastModified":"1/1/2014"},{"customer":"Aspen","title":"Aspen Book 2 - Chapter 2","author":"Aspen Author 2","summary":"Aspen Book 2 - Chapter 2 Summary","contents":"This is the content of Aspen Book 2 - Chapter 2","lastModified":"1/1/2014"},{"customer":"Aspen","title":"Aspen Book 3 - Chapter 3","author":"Aspen Author 3","summary":"Aspen Book 3 - Chapter 3 Summary","contents":"This is the content of Aspen Book 3 - Chapter 3","lastModified":"1/1/2014"},{"customer":"Aspen","title":"Aspen Book 4 - Chapter 4","author":"Aspen Author 4","summary":"Aspen Book 4 - Chapter 4 Summary","contents":"This is the content of Aspen Book 4 - Chapter 4","lastModified":"1/1/2014"},{"customer":"Aspen","title":"Aspen Book 5 - Chapter 5","author":"Aspen Author 5","summary":"Aspen Book 5 - Chapter 5 Summary","contents":"This is the content of Aspen Book 5 - Chapter 5","lastModified":"1/1/2014"},{"customer":"Aspen","title":"Aspen Book 6 - Chapter 6","author":"Aspen Author 6","summary":"Aspen Book 6 - Chapter 6 Summary","contents":"This is the content of Aspen Book 6 - Chapter 6","lastModified":"1/1/2014"},{"customer":"Aspen","title":"Aspen Book 7 - Chapter 7","author":"Aspen Author 7","summary":"Aspen Book 7 - Chapter 7 Summary","contents":"This is the content of Aspen Book 7 - Chapter 7","lastModified":"1/1/2014"},{"customer":"Aspen","title":"Aspen Book 8 - Chapter 8","author":"Aspen Author 8","summary":"Aspen Book 8 - Chapter 8 Summary","contents":"This is the content of Aspen Book 8 - Chapter 8","lastModified":"1/1/2014"},{"customer":"Aspen","title":"Aspen Book 9 - Chapter 9","author":"Aspen Author 9","summary":"Aspen Book 9 - Chapter 9 Summary","contents":"This is the content of Aspen Book 9 - Chapter 9","lastModified":"1/1/2014"},{"customer":"Aspen","title":"Aspen Book 10 - Chapter 10","author":"Aspen Author 10","summary":"Aspen Book 10 - Chapter 10 Summary","contents":"This is the content of Aspen Book 10 - Chapter 10","lastModified":"1/1/2014"},{"customer":"WKLI","title":"WKLI Book 1 - Chapter 1","author":"WKLI Author 1","summary":"WKLI Book 1 - Chapter 1 Summary","contents":"This is the content of WKLI Book 1 - Chapter 1","lastModified":"1/1/2014"},{"customer":"WKLI","title":"WKLI Book 2 - Chapter 2","author":"WKLI Author 2","summary":"WKLI Book 2 - Chapter 2 Summary","contents":"This is the content of WKLI Book 2 - Chapter 2","lastModified":"1/1/2014"},{"customer":"WKLI","title":"WKLI Book 3 - Chapter 3","author":"WKLI Author 3","summary":"WKLI Book 3 - Chapter 3 Summary","contents":"This is the content of WKLI Book 3 - Chapter 3","lastModified":"1/1/2014"},{"customer":"WKLI","title":"WKLI Book 4 - Chapter 4","author":"WKLI Author 4","summary":"WKLI Book 4 - Chapter 4 Summary","contents":"This is the content of WKLI Book 4 - Chapter 4","lastModified":"1/1/2014"},{"customer":"WKLI","title":"WKLI Book 5 - Chapter 5","author":"WKLI Author 5","summary":"WKLI Book 5 - Chapter 5 Summary","contents":"This is the content of WKLI Book 5 - Chapter 5","lastModified":"1/1/2014"},{"customer":"WKLI","title":"WKLI Book 6 - Chapter 6","author":"WKLI Author 6","summary":"WKLI Book 6 - Chapter 6 Summary","contents":"This is the content of WKLI Book 6 - Chapter 6","lastModified":"1/1/2014"},{"customer":"WKLI","title":"WKLI Book 7 - Chapter 7","author":"WKLI Author 7","summary":"WKLI Book 7 - Chapter 7 Summary","contents":"This is the content of WKLI Book 7 - Chapter 7","lastModified":"1/1/2014"},{"customer":"WKLI","title":"WKLI Book 8 - Chapter 8","author":"WKLI Author 8","summary":"WKLI Book 8 - Chapter 8 Summary","contents":"This is the content of WKLI Book 8 - Chapter 8","lastModified":"1/1/2014"},{"customer":"WKLI","title":"WKLI Book 9 - Chapter 9","author":"WKLI Author 9","summary":"WKLI Book 9 - Chapter 9 Summary","contents":"This is the content of WKLI Book 9 - Chapter 9","lastModified":"1/1/2014"},{"customer":"WKLI","title":"WKLI Book 10 - Chapter 10","author":"WKLI Author 10","summary":"WKLI Book 10 - Chapter 10 Summary","contents":"This is the content of WKLI Book 10 - Chapter 10","lastModified":"1/1/2014"},{"customer":"OUP","title":"OUP Book 1 - Chapter 1","author":"OUP Author 1","summary":"OUP Book 1 - Chapter 1 Summary","contents":"This is the content of OUP Book 1 - Chapter 1","lastModified":"1/1/2014"},{"customer":"OUP","title":"OUP Book 2 - Chapter 2","author":"OUP Author 2","summary":"OUP Book 2 - Chapter 2 Summary","contents":"This is the content of OUP Book 2 - Chapter 2","lastModified":"1/1/2014"},{"customer":"OUP","title":"OUP Book 3 - Chapter 3","author":"OUP Author 3","summary":"OUP Book 3 - Chapter 3 Summary","contents":"This is the content of OUP Book 3 - Chapter 3","lastModified":"1/1/2014"},{"customer":"OUP","title":"OUP Book 4 - Chapter 4","author":"OUP Author 4","summary":"OUP Book 4 - Chapter 4 Summary","contents":"This is the content of OUP Book 4 - Chapter 4","lastModified":"1/1/2014"},{"customer":"OUP","title":"OUP Book 5 - Chapter 5","author":"OUP Author 5","summary":"OUP Book 5 - Chapter 5 Summary","contents":"This is the content of OUP Book 5 - Chapter 5","lastModified":"1/1/2014"},{"customer":"OUP","title":"OUP Book 6 - Chapter 6","author":"OUP Author 6","summary":"OUP Book 6 - Chapter 6 Summary","contents":"This is the content of OUP Book 6 - Chapter 6","lastModified":"1/1/2014"},{"customer":"OUP","title":"OUP Book 7 - Chapter 7","author":"OUP Author 7","summary":"OUP Book 7 - Chapter 7 Summary","contents":"This is the content of OUP Book 7 - Chapter 7","lastModified":"1/1/2014"},{"customer":"OUP","title":"OUP Book 8 - Chapter 8","author":"OUP Author 8","summary":"OUP Book 8 - Chapter 8 Summary","contents":"This is the content of OUP Book 8 - Chapter 8","lastModified":"1/1/2014"},{"customer":"OUP","title":"OUP Book 9 - Chapter 9","author":"OUP Author 9","summary":"OUP Book 9 - Chapter 9 Summary","contents":"This is the content of OUP Book 9 - Chapter 9","lastModified":"1/1/2014"},{"customer":"OUP","title":"OUP Book 10 - Chapter 10","author":"OUP Author 10","summary":"OUP Book 10 - Chapter 10 Summary","contents":"This is the content of OUP Book 10 - Chapter 10","lastModified":"1/1/2014"}];

    $scope.customerSelected = function(customer) {
        $scope.filteredChapters = $scope.chapters.filter(function(chapter){
            return chapter.customer === customer.name;
        });
        $scope.selectedChapter = $scope.filteredChapters[0];
        $scope.selectedChapterContents = $scope.filteredChapters[0].contents;
        $scope.customers.forEach(function(c){
            c.state = "inActive";
        });
        customer.state = "active";
        $scope.chapterSelected($scope.selectedChapter);

    };

    $scope.chapterSelected = function(chapter) {
        $scope.selectedChapter = chapter;
        $scope.selectedChapterContents = chapter.contents;
        $scope.chapters.forEach(function(c){
            c.state="inActive";
        });
        chapter.state="active";
    };

    $scope.saveChapter = function() {
        $scope.selectedChapter.contents = $scope.selectedChapterContents;
    };

    $scope.selectedCustomer = $scope.customers[0];
    $scope.customerSelected($scope.selectedCustomer);

    $scope.editorOptions = {
        'language': 'en',
        'toolbar': [
            { 'name': 'document', 'groups': [ 'mode', 'document', 'doctools' ], 'items': [ 'Source', '-', 'Save', 'NewPage', 'Preview', 'Print', '-', 'Templates' ] },
            { 'name': 'clipboard', 'groups': [ 'clipboard', 'undo' ], 'items': [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ] },
            { 'name': 'editing', 'groups': [ 'find', 'selection', 'spellchecker' ], 'items': [ 'Find', 'Replace', '-', 'SelectAll', '-', 'Scayt' ] },
            { 'name': 'forms', 'items': [ 'Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField' ] },
            '/',
            { 'name': 'basicstyles', 'groups': [ 'basicstyles', 'cleanup' ], 'items': [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat' ] },
            { 'name': 'paragraph', 'groups': [ 'list', 'indent', 'blocks', 'align', 'bidi' ], 'items': [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl', 'Language' ] },
            { 'name': 'links', 'items': [ 'Link', 'Unlink', 'Anchor' ] },
            { 'name': 'insert', 'items': [ 'Image', 'Flash', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak', 'Iframe' ] },
            '/',
            { 'name': 'styles', 'items': [ 'Styles', 'Format', 'Font', 'FontSize' ] },
            { 'name': 'colors', 'items': [ 'TextColor', 'BGColor' ] },
            { 'name': 'tools', 'items': [ 'Maximize', 'ShowBlocks' ] },
            { 'name': 'others', 'items': [ '-' ] },
            { 'name': 'about', 'items': [ 'About' ] }
                 ],
        'toolbarGroups' : [
            { 'name': 'document', 'groups': [ 'mode', 'document', 'doctools' ] },
            { 'name': 'clipboard', 'groups': [ 'clipboard', 'undo' ] },
            { 'name': 'editing', 'groups': [ 'find', 'selection', 'spellchecker' ] },
            { 'name': 'forms' },
            '/',
            { 'name': 'basicstyles', 'groups': [ 'basicstyles', 'cleanup' ] },
            { 'name': 'paragraph', 'groups': [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
            { 'name': 'links' },
            { 'name': 'insert' },
            '/',
            { 'name': 'styles' },
            { 'name': 'colors' },
            { 'name': 'tools' },
            { 'name': 'others' },
            { 'name': 'about' }
                        ]
    };
  });
