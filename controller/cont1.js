sampleApp.controller('HomeController', function($scope,$localStorage) {
   $scope.names=[];
    $scope.cDetails = $localStorage.carDetails; 

$scope.value = 1 ;


	$scope.store=function()
	{

		alert("Car has been added");

   		$scope.names.push($scope.enteredCar);
   		$localStorage.carNames=$scope.names;
  }

    $scope.phase=function()
    {

    	window.location.href="#Phases";
    }

    $scope.searchFilter = function(cDetails)
    {
      var keyword = new RegExp($scope.searchCar, 'i');
      return !$scope.searchCar || keyword.test(cDetails.name);
    };

  $scope.search=function()
    {
      if ($scope.searchCar != "")
      {
        $scope.value = 0 ;
      }
      else
      {
        $scope.value = 1 ;
      }

    };

  $scope.fail=function()
    {
      if($scope.searchCar != $localStorage.carNames)
      {
        
      }
    }
             
});
 