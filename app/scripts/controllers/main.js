'use strict';

window.Abhi.factory('WaitStaffService', function(){
  var service = {};

  service.meal = {
    subtotal: 0,
    tip: 0,
    total: 0,
    tipTotal: 0,
    mealCount: 0,
    averageTip: 0
  };

  service.compute = function(meal){
    service.meal.taxValue = parseInt(meal.mealPrice, 10) * (parseInt(meal.taxRate,10)* 0.01);
    service.meal.subtotal = parseInt(meal.mealPrice, 10) + parseInt(service.meal.taxValue);
    service.meal.tip = service.meal.subtotal * (parseInt(meal.tipPercent) * 0.01);
    service.meal.total = service.meal.subtotal + service.meal.tip;
    service.meal.tipTotal += service.meal.tip;
    service.meal.mealCount++;
    service.meal.averageTip = service.meal.tipTotal / service.meal.mealCount;
  };

  return service;
});

window.Abhi
  .controller('MainCtrl', ['$scope', 'WaitStaffService', function ($scope, WaitStaffService) {
    $scope.waitstaff = WaitStaffService;

    $scope.cancel = function () {
      $scope.meal = {};
    };

    $scope.submit = function(){
      if($scope.mealDetails.$valid){
        $scope.waitstaff.compute($scope.meal);
        $scope.cancel();
        $scope.submits = true;
      }
    };

    $scope.resetAll = function () {
				$scope.waitstaff.meal = {
					subtotal: 0,
					tip: 0,
					total: 0,
					tipTotal: 0,
					mealCount: 0,
					averageTip: 0
				}
			};



  }]);
