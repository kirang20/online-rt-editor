'use strict';

angular.module('editorDemoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.customers = ['Aspen', 'WKLI', 'OUP'];

    $scope.chapters = [
        {
            'customer' : 'Aspen',
            'title' : 'Aspen Book 1 - Chapter 1',
            'author' : 'Aspen Author 1',
            'summary' : 'Aspen Book 1 - Chapter 1 Summary',
            'contents': 'This is the content of Aspen Book 1 - Chapter 1'
        },
        {
            'customer' : 'WKLI',
            'title' : 'WKLI Book 1 - Chapter 1',
            'author' : 'WKLI Author 1',
            'summary' : 'WKLI Book 1 - Chapter 1 Summary',
            'contents': 'This is the content of WKLI Book 1 - Chapter 1'
        },
        {
            'customer' : 'OUP',
            'title' : 'OUP Book 1 - Chapter 1',
            'author' : 'OUP Author 1',
            'summary' : 'OUP Book 1 - Chapter 1 Summary',
            'contents': 'This is the content of OUP Book 1 - Chapter 1'
        }
    ];

    $scope.updateChapters = function(customer) {
        $scope.filteredChapters = $scope.chapters.filter(function(chapter){
            return chapter.customer === customer;
        });
        $scope.selectedChapter = $scope.filteredChapters[0];
        $scope.selectedChapterContents = $scope.filteredChapters[0].contents;
    };

    $scope.updateChapterContents = function(chapter) {
        $scope.selectedChapter = chapter;
        $scope.selectedChapterContents = chapter.contents;
    };

    $scope.saveChapter = function() {
        $scope.selectedChapter.contents = $scope.selectedChapterContents;
    };

    $scope.selectedCustomer = 'Aspen';
    $scope.updateChapters($scope.selectedCustomer);

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
