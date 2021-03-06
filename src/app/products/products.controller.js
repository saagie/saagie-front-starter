(function () {
  'use strict';

  angular
    .module('app')
    .controller('ProductsController', ProductsController);

  /* @ngInject */
  function ProductsController($log, ProductsService) {
    //var vm = this;

    activate();

    ////////////////

    function activate() {
      ProductsService.getProducts()
        .then(function (data) {
          $log.info(data);
        })
        .catch(function (response) {
          $log.warn(response);
        });
    }
  }

})();
