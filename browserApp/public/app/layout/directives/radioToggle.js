define(['layout/module'], function (module) {

    'use strict';

    /*
    * Directive for toggling a ng-model with a button
    * Source: https://gist.github.com/aeife/9374784
    */

    module.registerDirective('radioToggle', function ($log) {
      return {
        scope: {
          model: "=ngModel",
          value: "@value"
        },
        link: function(scope, element, attrs) {

          element.parent().on('click', function() {
            scope.model = scope.value;
            scope.$apply();
          });
        }
      }
    });
});