(function () {
  'use strict';

  angular
    .module('ui.saagie')
    .directive('uiProgressBar', uiProgressBar);

  /* @ngInject */
  function uiProgressBar() {
    var directive = {
      replace:          true,
      bindToController: true,
      controller:       uiProgressBarController,
      controllerAs:     'vm',
      link:             link,
      transclude:       true,
      restrict:         'E',
      scope:            {
        value: '=',
        max:   '='
      },
      templateUrl:      'app/ui-saagie/components/progress-bar.directive.html'
    };
    return directive;

    function link() {

    }
  }

  /* @ngInject */
  function uiProgressBarController($scope) {
    var vm = this;

    vm.progression = 0;

    activate();


    function activate() {
      $scope.$watch('vm.value', function () {
        vm.progression = (vm.value / vm.max) * 100;

        if (vm.progression > 100) {
          vm.progression = 100;
        }

        if (vm.progression < 0) {
          vm.progression = 0;
        }
      });
    }
  }

})();

