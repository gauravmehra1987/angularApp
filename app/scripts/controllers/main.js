'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('MainCtrl', function ($scope, $location, WatchlistService) {
		$scope.watchlists = WatchlistService.query();
		$scope.$watch(function(){
			return $location.path()
		},function(a){
			if(a == "/watchlist"){
				$scope.activeView="watchlist"
			}else{
				$scope.activeView="dashboard"
			}
		});
  });
