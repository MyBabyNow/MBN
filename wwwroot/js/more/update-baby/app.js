(function() {
    'use strict';
    var app = angular.module('mbnUpdateBaby', []);



    app.controller('UpdateBabyController', ['$http', '$scope', function($http, $scope, $window) {
        if ($.session.get('secretKey') == null || undefined) {
            window.location.replace('../login.html');
        }

        $scope.userEmail = $.session.get('userEmail');
        $scope.userId = $.session.get('secretKey');



        var init = function() {
            $http.get("http://assc-klong-gh.azurewebsites.net/tables/gh_survey?$filter=user_id eq '" + $scope.userId + "'").success(function(respondData) {
                console.log(respondData[0].baby_first_name);
                console.log(respondData[0].baby_dob);
                console.log(respondData[0].feeding_method);
                $scope.babyFirstName = respondData[0].baby_first_name;

                //$scope.babyDob = respondData[0].baby_dob;
                $scope.babyDob = new Date(respondData[0].baby_dob);

                $scope.feedingMethod = respondData[0].feeding_method;
            });


        };

        init();

        $scope.updateBabyProfile = function() {
            $("#loader-wrapper").removeClass("hide");

            $http
                .post(
                    "http://assc-klong-gh.azurewebsites.net/api/update_baby_profile", {
                        baby_first_name: $scope.babyFirstName,
                        baby_dob: $scope.babyDob,
                        feeding_method: $scope.feedingMethod,
                        user_id: $scope.userId
                    }
                )
                .success(function(respondData) {
                    if (respondData.status == "OK") {
                        $scope.updateSuccess = true;
                        $.session.set("feedingMethod", $scope.feedingMethod);
                        $.session.set("babyName", $scope.babyFirstName);
                        var now=moment();
                        $scope.babyAge = now.diff($scope.babyDob, 'weeks');
                        $.session.set("babyAge", $scope.babyAge);

                    } else { $scope.updateSuccess = false; }

                    $("#loader-wrapper").addClass("hide");
                });
        }
    }]);


})();