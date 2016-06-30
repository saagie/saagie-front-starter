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

    function link(scope, element) {
      let input = angular.element(element).find('input'),
        userLabel = angular.element(element).find('label:not(.f-toggle-button__label)'),
        label = angular.element(element).find('.f-toggle-button__label'),
        text = angular.element(element).find('.f-toggle-button__text');

      // Add custom class to input
      // -------------------------
      input.addClass("f-toggle-button__input");

      // If no id on input, add one
      // -------------------------
      if(!input.attr('id')) {
        input.attr('id', 'f-toggle-button-' + new Date().getTime())
      }

      // Put user label into text span and remove user label
      // -------------------------
      text.html(userLabel.html());
      userLabel.remove();

      // Add attribute for on label to match input id
      // -------------------------
      label.attr('for', input.attr('id'));

      // Append label into ng-transclude
      // -------------------------
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


