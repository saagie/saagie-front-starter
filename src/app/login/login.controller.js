(function () {
  'use strict';

  angular
    .module('app')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$location', 'AuthenticationService'];

  /* @ngInject */
  function LoginController($location, AuthenticationService) {
    var vm = this;

    vm.login = login;

    activate();

    ////////////////

    function activate() {
      AuthenticationService.ClearCredentials();
    }

    function login(form) {
      form.$setValidity('badCredentials', true);

      vm.isLoading = true;

      AuthenticationService.Login(vm.username, vm.password)
        .then(function () {
          vm.isLoading = false;
          $location.path('/');
        })
        .catch(function () {
          vm.isLoading = false;
          form.$setValidity('badCredentials', false);
        });
    }
  }

})();
