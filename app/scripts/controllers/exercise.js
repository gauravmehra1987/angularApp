'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:ExerciseCtrl
 * @description
 * # ExerciseCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
//	.config(function($dropdownProvider) {
//		angular.extend($dropdownProvider.defaults, {
//		  animation: 'am-flip-x',
//		  trigger: 'hover'
//		});
//	 })
	.controller('ExerciseCtrl', function ($scope) {
		$scope.dropdown = [{
			  "text": "<i class=\"fa fa-download\"></i>&nbsp;Another action",
			  "href": "#anotherAction",
			  "active": true
			},
			{
			  "text": "<i class=\"fa fa-globe\"></i>&nbsp;Display an alert",
			  "click": "$alert(\"Holy guacamole!\")"
			},
			{
			  "text": "<i class=\"fa fa-external-link\"></i>&nbsp;External link",
			  "href": "/auth/facebook",
			  "target": "_self"
			},
			{
			  "divider": true
			},
			{
			  "text": "Separated link",
			  "href": "#separatedLink"
			}
		  ];
	});
