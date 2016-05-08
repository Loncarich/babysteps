(function () {
  'use strict';

  angular
    .module('baby.visual')
    .config(config);

  function config ($stateProvider) {
    $stateProvider
      .state('visual', {
        url: '/visual',
        views: {
          '': {
            templateUrl: 'app/visual/visual.html',
            controller: 'VisualCtrl as viz'
          }
        },
        data: {
          requiredLogin: true
        }
      });
  }
})();
