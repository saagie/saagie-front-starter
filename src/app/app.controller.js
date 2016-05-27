(function () {
  'use strict';

  angular
    .module('app')
    .controller('AppController', AppController);

  /* @ngInject */
  function AppController($rootScope, $state) {
    var vm = this;

    vm.displayTopbar = false;

    activate();

    ////////////////

    function activate() {

      // Hide topbar if current page is in Styleguide
      $rootScope.$on('$destroy', $rootScope.$on("$stateChangeSuccess", function() {
        vm.displayTopbar = !($state.is('styleguide') || $state.is('styleguide.page'));
      }));

    }
  }

})();

