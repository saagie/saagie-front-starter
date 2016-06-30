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
        label = angular.element(element).find('label');

      // Add custom class to input
      // -------------------------
      input.addClass("f-toggle-button__input");
      label.addClass("f-toggle-button__label");

      // Wrap label text into custom span
      // -------------------------
      label.wrapInner('<span class="f-toggle-button__text"></span>');

      // Add indicator into label
      // -------------------------
      label.append('<span class="f-toggle-button__indicator"></span>');

      // If no id on input, add one
      // -------------------------
      if(!input.attr('id')) {
        input.attr('id', 'f-toggle-button-' + new Date().getTime());
      }

      // Add attribute for on label to match input id
      // -------------------------
      label.attr('for', input.attr('id'));
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


