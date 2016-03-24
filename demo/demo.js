angular.module('app', ['ngAnimate','cgBusy']);

angular.module('app').controller('DemoCtrl',function($scope,$http){

	$scope.delay = 0;
	$scope.minDuration = 0;
	$scope.message = 'Please Wait...';
	$scope.backdrop = true;
	$scope.promise = null;

	$scope.demo = function (_promise) {
		if (false == angular.isUndefined(_promise)) {
			var promise = _promise;
		} else {

			var promise = $http.get('http://httpbin.org/delay/3');
		}

		$scope.promise =
		{
			promise: promise,
			templateUrl: $scope.templateUrl,
			message: $scope.message,
			backdrop: $scope.backdrop,
			delay: $scope.delay,
			minDuration: $scope.minDuration
		}


	};
	/**
	 *   Show
	* $scope.promise = true;
	* $scope.promise = 5;
	*
	* Hide
	* $scope.promise = false;
	* $scope.promise = 0;
	*/
	$scope.demoOnTrue = function () {

		if ($scope.promiseShow === true) {
			$scope.demo(false);
			$scope.promiseShow = false;
		} else {
			$scope.demo(true);
			$scope.promiseShow = true;


		}
	};
	$scope.demoOnNumber = function (v) {
		if (angular.isNumber(v)){
			$scope.demo(v);
		}

	};

	

});