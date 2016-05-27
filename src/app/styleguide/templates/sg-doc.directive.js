(function () {
  'use strict';

  angular
    .module('styleguide')
    .directive('sgDoc', sgDoc);

  /* @ngInject */
  function sgDoc() {
    var directive = {
      transclude:       true,
      bindToController: true,
      controller:       SgDocController,
      controllerAs:     'vm',
      link:             link,
      restrict:         'E',
      scope:            {},
      templateUrl:      'app/styleguide/templates/sg-doc.directive.html'
    };
    return directive;

    function link(scope, element) {
      var originalCode = element.find('ng-transclude').html();

      var visualCode = originalCode;
      element.find('.sg-doc__visual .sg-doc__output').html(visualCode);

      var documentationCode = replace(originalCode, {
        '<': '&lt;',
        '>': '&gt;'
      }).trim();
      element.find('.sg-doc__documentation .sg-doc__output').html(documentationCode);

      /**
       * Replace, in a string, multiple substrings
       * @param {string} string - Original string
       * @param {values} array - An array of array like ['oldValue', 'newValue']
       * @returns {string} Modified string
       */
      function replace (string, values) {
        angular.forEach(values, function (value, key) {
          var regex = new RegExp(key, 'g');
          string = string.replace(regex, value);
        });
        return string;
      }

    }
  }

  /* @ngInject */
  function SgDocController() {

  }

})();
