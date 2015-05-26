sampleApp.controller('AddCarController', function($scope, $localStorage)
{
	cars=[];
	carObj={name:"",model:"",color:"",mileage:"",seat:"",type:"",grade:"",img:""};


	blopObj=[];

	$scope.blop=function()
	{
		blopObj[0]=$scope.plotpoint1;
		blopObj[1]=$scope.plotpoint2;
		blopObj[2]=$scope.plotpoint3;
		blopObj[3]=$scope.plotpoint4;
		blopObj[4]=$scope.plotpoint5;

		$localStorage.bO = blopObj;

		//New Code
		carObj.name=$scope.carName;
		carObj.model=$scope.carModel;
		carObj.color=$scope.carColor;
		carObj.mileage=$scope.carMileage;
		carObj.seat=$scope.carSeat;
		carObj.type=$scope.carType;
		carObj.grade=$scope.carGrade;
		
		if($localStorage.carDetails)
		{
			cars=$localStorage.carDetails;
		}
		cars.push(carObj);
		$localStorage.carDetails=cars;
		//end


		$scope.cDetails = $localStorage.carDetails; 


		window.location.href="#ShowDetails";
	}
	

	
   


		$scope.myVar1 = false;
    	$scope.myVar2 = false;
    	$scope.myVar3 = false;
    	$scope.myVar4 = false;

	$scope.showForm1= function()
	{
		$scope.myVar1 = true;
		$scope.myVar2 = false;
		$scope.myVar3 = false;
		$scope.myVar4 = false;

	};
	$scope.showForm2= function()
	{
		$scope.myVar1 = false;
		$scope.myVar2 = true;
		$scope.myVar3 = false;
		$scope.myVar4 = false;		

	};
	$scope.showForm3= function()
	{
		$scope.myVar1 = false;
		$scope.myVar2 = false;
		$scope.myVar3 = true;
		$scope.myVar4 = false;

	};
	$scope.showForm4= function(){
		$scope.myVar1 = false;
		$scope.myVar2 = false;
		$scope.myVar3 = false;
		$scope.myVar4 = true;

		
		//appending image
		var file= document.querySelector("#files").files[0];
		var reader= new FileReader();
		reader.onloadend = function()
		{
			carObj.img = reader.result;
		}

		if(file)
		{
		reader.readAsDataURL(file);
		}

		else
		img1.src="gh.jpg";
		//image end
	};

});
