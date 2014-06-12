(function(window){
'use strict';

window.Abhi = angular
  .module('waitstaffApp', [
    'ngRoute'
  ]);
window.Abhi.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/new-meal', {
        templateUrl: 'views/new-meal.html',
        controller: 'MainCtrl'
      })
      .when('/my-earnings', {
        templateUrl: 'views/earnings.html',
        controller: 'MainCtrl'
      })
      .when('/error', {
        template: '<div class="container"><p>ERROR</p></div>s'
      })
      .otherwise({
        redirectTo: '/error'
      });
  });
window.Abhi.run(function($rootScope, $location, $timeout) {
        $rootScope.$on('$routeChangeError', function() {
            $location.path("/error");
        });
        $rootScope.$on('$routeChangeStart', function() {
            $rootScope.isLoading = true;
        });
        $rootScope.$on('$routeChangeSuccess', function() {
          $timeout(function() {
            $rootScope.isLoading = false;
          }, 1000);
        });
    })



}(window));
