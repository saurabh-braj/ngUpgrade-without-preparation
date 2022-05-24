'use strict';

angular.
  module('phonecatApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $routeProvider.
        when('/angularjs', {
          template: '<phone-list></phone-list>'
        });
    }
  ]);
