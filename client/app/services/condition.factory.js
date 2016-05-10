(function () {
  'use strict';

  angular
    .module('baby')
    .factory('condition', condition);

  function condition($http) {
    var service = {
        getConditionBy: getConditionBy
    };

    return service;

      function getConditionBy() {
        return $http.get('/visual', {
          headers: {
            child: 'Pinky'
          }
        });
      }

  }
})();
