(function () {
  'use strict';

  angular
    .module('app')
    .factory('AuthenticationService', AuthenticationService);

  AuthenticationService.$inject = ['$http', '$q', '$log', '$cookies', '$rootScope'];
  function AuthenticationService($http, $q, $log, $cookies, $rootScope) {
    var service = {};

    service.Login = Login;
    service.SetCredentials = SetCredentials;
    service.ClearCredentials = ClearCredentials;

    return service;

    function Login(username, password) {
      var defer = $q.defer();

      // TODO: Replace for real login
      service.SetCredentials(username, 'fakeTokenPasswordAsTokenDontDoThisAtHome' + password);
      defer.resolve();

      /*
      $http.post('/api/login_check', '_username=' + username + '&_password=' + password, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
          .then(function (response) {
              service.SetCredentials(username, response.data.token);
              defer.resolve(response);
          })
          .catch(function (response) {
              $log.warn(response);
              defer.reject(response);
          });
      */

      return defer.promise;

    }

    function SetCredentials(username, token) {
      $rootScope.user = {
        username: username,
        token:    token
      };

      $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      $cookies.putObject('user', $rootScope.user);
      $rootScope.$broadcast('userUpdated');
    }

    function ClearCredentials() {
      $rootScope.user = {};
      $cookies.remove('user');
      $http.defaults.headers.common.Authorization = 'Bearer';
      $rootScope.$broadcast('userUpdated');
    }
  }
})();
