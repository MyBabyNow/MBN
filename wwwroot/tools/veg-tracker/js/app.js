angular.module('ghVeg', []).controller('VegController', ['$http', '$scope', function ($http, $scope) {
    $scope.vegs = [];
    $scope.preStatusVegs = [];
    $scope.showSpinner = false;
    $scope.showAddVegBtn = false;
    $scope.showSaveStatusBtn = false;

    $scope.userEmail = $.session.get('userEmail');
    $scope.userId = $.session.get('secretKey');
    $scope.babyName = $.session.get('babyName');

    $scope.todayDate = new Date();


    $scope.addNewVeg = () => {
        $scope.showSpinner = true;
        $scope.newVeg={};
        $scope.newVeg.userId = $scope.userId;
        $scope.newVeg.status = '';
        $scope.newVeg.name = $scope.nameFromSelect === 'other' ? $scope.nameFromInput : $scope.nameFromSelect;

        if($scope.vegs.some(v=>v.name===$scope.newVeg.name)){
            alert("duplicated fruit");
            $scope.showSpinner = false;
            return;
        }

        if(!$scope.newVeg.name){
            alert("Please enter a fruit");
            $scope.showSpinner = false;
            return;
        }
            

        $http.post('https://assc-klong-gh.azurewebsites.net/tables/veg_tracker',
            $scope.newVeg
        )
            .then(response => {
                $scope.newVeg.id = response.data.id;
                $scope.newVeg.updatedAt = response.data.updatedAt;
                $scope.vegs.push($scope.newVeg);
                $scope.newVeg = {};
                $scope.showSpinner = false;
                $scope.showAddVegBtn = true;
            }
            )
            .catch(function (error) {
                console.log(error);
                $scope.showSpinner = false;
            });
    }

    $scope.changeVegStatus = (veg, oldStatus) => {
        if (veg.status !== oldStatus&&veg.status) {
            veg.isChanged = true;
            $scope.showSaveStatusBtn = true;
        } else{
            veg.isChanged = false;
            $scope.showSaveStatusBtn = false;
        }

    }

    $scope.saveChanges = () => {
        $scope.vegs.forEach(
            function (veg) {
                if (veg.isChanged) {
                    $scope.showSpinner = true;
                    $http.patch('https://assc-klong-gh.azurewebsites.net/tables/veg_tracker/' + veg.id,
                        {
                            status: veg.status
                        }).then(response => {
                            console.log(response);
                            veg.isChanged = false;
                            veg.updatedAt = response.data.updatedAt;
                            $scope.showSaveStatusBtn = false;
                        }
                        )
                        .catch(function (error) {
                            console.log(error);
                        });
                        $scope.showSpinner = false;
                }
            }
        )

    }

    $scope.showAddVegForm = () =>{
        $scope.showAddVegBtn = false;
    }

    $scope.init = function () {
        $scope.showSpinner = true;
        $http.get("https://assc-klong-gh.azurewebsites.net/tables/veg_tracker?$filter=userId eq '" + $scope.userId + "'")
            .then(response => {
                $scope.vegs = response.data;
                $scope.showSpinner = false;
                if($scope.vegs.length===0){
                    $scope.showAddVegBtn = false;
                } else{
                    $scope.showAddVegBtn = true;
                }
            })
            .catch(function (error) {
                console.log(error);
                $scope.showSpinner = false;
            });
    };

    $scope.init();

}]).directive('vegList', function () {
    return {
        restrict: 'E',
        templateUrl: '../../../tools/veg-tracker/veg-list.html',
    };
}).directive('veg', function () {
    return {
        restrict: 'E',
        templateUrl: '../../../tools/veg-tracker/veg.html'
    };
}).directive('vegForm', function () {
    return {
        restrict: 'E',
        templateUrl: '../../../tools/veg-tracker/veg-form.html'
    };
}).filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});;