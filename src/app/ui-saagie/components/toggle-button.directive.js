(function () {
  'use strict';

  angular
    .module('ui.saagie')
    .directive('uiToggleButton', uiToggleButton);

  /* @ngInject */
  function uiToggleButton() {
    var directive = {
      replace:          true,
      transclude: true,
      bindToController: true,
      controller: uiToggleButtonController,
      controllerAs: 'vm',
      link: link,
      restrict: 'E',
      scope: {
        textLabel: '@'
      },
      templateUrl: 'app/ui-saagie/components/toggle-button.directive.html'
    };
    return directive;

    function link(scope, element, attrs) {
      let input = angular.element(element).find('input');
      input.addClass("f-toggle-button-btn as--theme-light");

      if(!input.attr('id')) {
        input.attr('id', 'checkbox-' + new Date().getTime())
      }

      let label = angular.element(element).find('label');
      label.attr('for', input.attr('id'));
      label.appendTo(angular.element(element).find('ng-transclude'));
    }
  }

  /* @ngInject */
  function uiToggleButtonController() {
    //var vm = this;

    activate();

    function activate() {

    }
  }

})();


