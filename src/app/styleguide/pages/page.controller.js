(function () {
  'use strict';

  angular
    .module('styleguide')
    .controller('StyleguidePageController', StyleguidePageController);

  /* @ngInject */
  function StyleguidePageController() {
    var vm = this;
    vm.title = 'StyleguidePageController';

    activate();

    ////////////////

    function activate() {
      // code
    }
  }

})();

