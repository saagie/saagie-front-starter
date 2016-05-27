(function () {
  'use strict';

  angular
    .module('app')
    .directive('stateClassnames', stateClassnames);

  /* @ngInject */
  function stateClassnames($rootScope) {
    var directive = {
      bindToController: true,
      controller:       StateClassnamesController,
      controllerAs:     'vm',
      link:             link,
      restrict:         'A',
      scope:            {}
    };
    return directive;

    function link(scope, element) {
      var deregistrationCallback = $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState) {
        var fromClassnames = angular.isDefined(fromState.data) && angular.isDefined(fromState.data.classnames) ? fromState.data.classnames : null;
        var toClassnames = angular.isDefined(toState.data) && angular.isDefined(toState.data.classnames) ? toState.data.classnames : null;

        // don't do anything if they are the same
        if (fromClassnames == toClassnames) {
          return;
        }

        if (fromClassnames) {
          angular.element(element).removeClass(fromClassnames);
        }

        if (toClassnames) {
          angular.element(element).addClass(toClassnames);
        }

      });
      $rootScope.$on('$destroy', deregistrationCallback);
    }
  }

  /* @ngInject */
  function StateClassnamesController() {

  }

})();

