// JavaScript source code
(function ()
{
	"use strict";

	// Declare an angular module to match your ng-app declaration...
	angular.module("ngapp", []).controller("controller", AssignmentController);

	// Make sure to protect code from minification...
	AssignmentController.$inject = ["$scope"];

	// Pass the $scope service as arguments to the function responsible to act as controller...
	function AssignmentController($scope)
	{
		$scope.entrada = "";

		$scope.validate = function()
		{
			if ($scope.entrada === "")
			{
				$scope.salida = "Please, before checking, first enter data!";
				return;
			}


		};
	}
})();