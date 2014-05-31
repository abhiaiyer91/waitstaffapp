'use strict';

window.Abhi
  .controller('MainCtrl', ['$scope', function ($scope) {

  	$scope.collections = [];

  	$scope.tips = [0];


  	$scope.submit = function(){
  		$scope.collections.push($scope.meal);
  		$scope.tips.push($scope.meal.tip);
  		console.log($scope.tips);
  		$scope.totaltips = $scope.tips.reduce(function(a, b) {
    		return a + b;
		});
		$scope.tipaverage = $scope.totaltips / ($scope.tips.length-1) ;
  	}

  	$scope.reset = function(){
  		$scope.collections = [];
  		$scope.tips = [];
  		$scope.meal = {};
  		$scope.totaltips = 0;
      $scope.tipaverage = 0;

  	}

  	$scope.cancel = function(){
  		$scope.meal = {};
  	}

  	$scope.compute = function(p,t){
  		return [1+(t/100)]*p;
  	}

  	$scope.computetip = function(p,t){
  		return p * (t/100);
  	}



  }]);
