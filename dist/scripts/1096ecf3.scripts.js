"use strict";angular.module("waitstaffApp",["ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("waitstaffApp").controller("MainCtrl",["$scope",function(a){a.collections=[],a.tips=[0],a.submit=function(){a.collections.push(a.meal),a.tips.push(a.meal.tip),console.log(a.tips),a.totaltips=a.tips.reduce(function(a,b){return a+b}),a.tipaverage=a.totaltips/(a.tips.length-1)},a.reset=function(){a.collections=[],a.tips=[],a.meal={},a.totaltips=0},a.compute=function(a,b){return[1+b/100]*a},a.computetip=function(a,b){return a*(b/100)}}]);