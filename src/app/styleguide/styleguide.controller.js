(function () {
  'use strict';

  angular
    .module('styleguide')
    .controller('StyleguideController', StyleguideController);

  /* @ngInject */
  function StyleguideController() {
    var vm = this;

    vm.menu = [
      {
        title: 'Objects',
        slug:  'objects',
        pages: [
          {
            title: 'Buttons',
            slug:  'buttons'
          },
          {
            title: 'Alerts',
            slug:  'alerts'
          }
        ]
      }
    ];

    activate();

    ////////////////

    function activate() {

    }
  }

})();

