(function() {
  'use strict';

  angular
    .module('styleguide')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('styleguide', {
        url: '/styleguide',
        templateUrl: 'app/styleguide/styleguide.html',
        controller: 'StyleguideController',
        controllerAs: 'vm',
        data : {
          classnames : 'as--styleguide'
        },
        deepStateRedirect: {
          default: {
            state: 'styleguide.page',
            params: {
              folder: 'objects',
              file: 'buttons'
            }
          },
          params: true
        }
      })

      .state('styleguide.page', {
        url: '/:folder/:file',
        templateUrl: function (stateParams){
          return 'app/styleguide/pages/' + stateParams.folder + '/' + stateParams.file + '.html';
        },
        controller: 'StyleguidePageController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
