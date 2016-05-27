(function () {
    'use strict';

    angular
        .module('ui.saagie')
        .directive('uiInputPassword', uiInputPassword);

    /* @ngInject */
    function uiInputPassword() {
        var directive = {
            replace:          true,
            bindToController: true,
            controller:       uiInputPasswordController,
            controllerAs:     'vm',
            link:             link,
            transclude:       true,
            restrict:         'E',
            scope:            {},
            templateUrl:      'app/ui-saagie/components/input-password.directive.html'
        };
        return directive;

        function link(scope, element) {
            scope.vm.visible = false;
            scope.vm.toggleVisibility = toggleVisibility;

            function toggleVisibility () {
                scope.vm.visible = !scope.vm.visible;
                var type = (scope.vm.visible ? 'text' : 'password');
                angular.element(element).find('input').attr('type', type);
            }
        }
    }

    /* @ngInject */
    function uiInputPasswordController() {

    }

})();

