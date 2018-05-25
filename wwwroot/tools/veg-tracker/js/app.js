angular.module('ghVeg', []).controller('VegController', ['$http', '$scope', function ($http, $scope) {
    $scope.vegs = [];
    $scope.preStatusVegs = [];
    $scope.showSpinner = false;


    $scope.userEmail = $.session.get('userEmail');
    $scope.userId = $.session.get('secretKey');
    $scope.babyName = $.session.get('babyName');

    $scope.addNewVeg = () => {
        $scope.showSpinner = true;
        $scope.newVeg.userId = $scope.userId;
        $scope.newVeg.status = '';

        $http.post('https://assc-klong-gh.azurewebsites.net/tables/veg_tracker',
            $scope.newVeg
        )
            .then(response => {
                $scope.newVeg.id = response.data.id;
                $scope.vegs.push($scope.newVeg);
                $scope.newVeg = {};
                $scope.showSpinner = false;
            }
            )
            .catch(function (error) {
                console.log(error);
                $scope.showSpinner = false;
            });
    }

    $scope.changeVegStatus = (veg, oldStatus) => {
        if (veg.status !== oldStatus) {
            veg.isChanged = true;
        }

    }

    $scope.saveChanges = () => {
        $scope.vegs.forEach(
            function (veg) {
                if (veg.isChanged) {
                    $http.patch('https://assc-klong-gh.azurewebsites.net/tables/veg_tracker/' + veg.id,
                        {
                            status: veg.status
                        }).then(response => {
                            console.log(response);
                            veg.isChanged = false;
                        }
                        )
                        .catch(function (error) {
                            console.log(error);
                        });
                }
            }
        )

    }


    $scope.init = function () {
        $scope.showSpinner = true;
        $http.get("https://assc-klong-gh.azurewebsites.net/tables/veg_tracker?$filter=userId eq '" + $scope.userId + "'")
            .then(response => {
                $scope.vegs = response.data;
                $scope.showSpinner = false;
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
});