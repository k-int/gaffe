define(['modules/forms/module', 'summernote'], function (module) {

    'use strict';

    module.registerDirective('smartEditSummernote', function () {
        return {
            restrict: 'A',
            compile: function (tElement, tAttributes) {
                tElement.removeAttr('smart-edit-summernote data-smart-edit-summernote');
                tElement.on('click', function(){
                    angular.element(tAttributes.smartEditSummernote).summernote({
                        focus : true
                    });  
                });
            }
        }
    });
});
