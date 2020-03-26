// JavaScript source code
(function ()
{
	"use strict";

	// Declare an angular module to match your ng-app declaration...
	angular.module("ngapp", []).controller("controller", assignmentController);

	// Make sure to protect code from minification...
	assignmentController.$inject = ["$scope"];

	// Pass the $scope service as arguments to the function responsible to act as controller...
	function assignmentController($scope)
	{
		$scope.entrada = "";

		$scope.validate = function()
		{
			if ($scope.entrada === "")
			{
				$scope.salida = "Please, before checking, first enter data!";
			}
			else
			{
				var words = $scope.entrada.split(",");
				if (words.length > 3)
				{
					$scope.salida = "Too much!!";
				}
				else
				{
					$scope.salida = "Enjoy!!";
				}
			}			
		};
	}
})();