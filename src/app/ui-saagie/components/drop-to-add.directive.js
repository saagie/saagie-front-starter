(function () {
  'use strict';

  angular
    .module('ui.saagie')
    .directive('uiDropToAdd', uiDropToAddDirective);

  /* @ngInject */
  function uiDropToAddDirective() {
    var directive = {
      replace:          true,
      bindToController: true,
      controller:       uiDropToAddController,
      controllerAs:     'vm',
      link:             link,
      restrict:         'E',
      scope:            {
        btnText:      '@',
        btnClass:     '@',
        emptyText:    '@',
        itemsToAdd:   '=',
        itemsAdded:   '=',
        actionAdd:    '=',
        actionRemove: '='
      },
      templateUrl:      'app/ui-saagie/components/drop-to-add.directive.html'
    };
    return directive;

    function link(scope) {
      scope.$on('ui.dropdown.open', function () {
        angular.element('.o-dropdown__drop .c-drop-to-add__dropdown-search-input').focus();
      });

      scope.$on('ui.dropdown.close', function () {
        scope.vm.query = '';
      });
    }
  }

  /* @ngInject */
  function uiDropToAddController() {
    var vm = this;
    vm.query = '';
    vm.btnText = '+ Add';
    vm.emptyText = 'No item';

    vm.addItem = function (id, name) {
      // Add to list
      var added = vm.itemsToAdd
        .filter(function (el) {
          return el.id === id;
        });
      vm.itemsAdded.push(added[0]);

      // Remove from dropdown
      vm.itemsToAdd = vm.itemsToAdd
        .filter(function (el) {
          return el.id !== id;
        });

      if (vm.actionAdd != undefined) {
        vm.actionAdd(id, name);
      }
    }

    vm.removeItem = function (id, name) {
      // Add to dropdown
      var removed = vm.itemsAdded
        .filter(function (el) {
          return el.id === id;
        });
      vm.itemsToAdd.push(removed[0]);

      // Remove from list
      vm.itemsAdded = vm.itemsAdded
        .filter(function (el) {
          return el.id !== id;
        });

      if (vm.actionRemove != undefined) {
        vm.actionRemove(id, name);
      }
    }
  }

})();

