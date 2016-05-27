(function () {
  'use strict';


  angular
    .module('app')
    .config(configGrowl)
    .run(anchorScroll);

  /* ------------------------- *\
      Growl
  \* ------------------------- */

  /* @ngInject */
  function configGrowl(growlProvider) {
    growlProvider.globalTimeToLive({success: 3000, error: -1, warning: 4000, info: 3000});
    growlProvider.globalDisableCountDown(true);
    growlProvider.globalPosition('top-center');
  }

  /* ------------------------- *\
      Set default yOffset for $anchorScroll
      because of topbar offset
  \* ------------------------- */

  /* @ngInject */
  function anchorScroll($anchorScroll) {
    $anchorScroll.yOffset = 60;
  }


})();
