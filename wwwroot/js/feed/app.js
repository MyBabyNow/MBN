
(function () {
    'use strict';
    var app = angular.module('ghFeed', []);

    app.controller('FeedController', ['$http', '$scope', function ($http, $scope, $window) {
        if ($.session.get('secretKey') == null || undefined) {
            window.location.replace('../login.html');
        }

        $scope.userEmail = $.session.get('userEmail');
        $scope.userId = $.session.get('secretKey');



        $scope.goProfilePage = function () {
            window.location = './more/update-mum.html';
        };

        $scope.goBabyProfilePage = function () {
            window.location = './more/update-baby.html';
        };

        var init = function () {
            $http.get("http://assc-klong-gh.azurewebsites.net/tables/gh_survey?$filter=user_id eq '" +
                $scope.userId + "'").success(function (respondData) {
                console.log(respondData[0].profile_photo);

                $scope.carerRole = respondData[0].carer_role;

                if(respondData[0].profile_photo.indexOf("data:image/jpeg;base64") != -1) {
                  $scope.avatar = respondData[0].profile_photo;
                }
                else {
                  $scope.avatar = atob(respondData[0].profile_photo);
                }

                //
                $scope.babyName = respondData[0].baby_first_name == '' ? "Your baby's" : respondData[0].baby_first_name;
                $scope.userName = respondData[0].carer_name;
                //$scope.babyAge = respondData[0].baby_dob ? respondData[0].baby_dob : 0;

                if ($scope.carerRole !== 'pregnant') {
                    var babyDob = moment(respondData[0].baby_dob, "YYYY-MM-DD'T'HH:mm:ss:SSSZ");
                    var now = moment();
                    $scope.babyAge = now.diff(babyDob, 'weeks');
                    $scope.userName = respondData[0].carer_name;

                } else {
                    $scope.babyDueDate = moment(respondData[0].baby_due_date, "YYYY-MM-DD'T'HH:mm:ss:SSSZ").format('DD/MM/YYYY');
                    $scope.userName = respondData[0].pregnant_mum_name;

                }

                switch (respondData[0].feeding_method) {
                    case "ff":
                        $scope.feedingMethod = "Formula feeding";
                        break;
                    case "bf":
                        $scope.feedingMethod = "Breastfeeding";
                        break;
                    case "mf":
                        $scope.feedingMethod = "Mixed feeding";
                        break;
                    default:
                        $scope.feedingMethod = "N/A";
                        break;
                }
                $.session.set("babyName", respondData[0].baby_first_name == '' ? 'My Baby' : respondData[0].baby_first_name);
                $.session.set("feedingMethod", respondData[0].feeding_method ? respondData[0].feeding_method : 'py');

                //
                // Need to call back C# with the information recieved. href statement actives the call.
                //
                var cbProfile = { carer_name: $scope.userName, baby_name: $scope.babyName, feed_method: respondData[0].feeding_method, photo: respondData[0].profile_photo, action: "SAVE PROFILE" };
                var cbProfileStr = "http://mybabynow.org.au/?action=" + JSON.stringify(cbProfile);
                var ua = navigator.userAgent.toLowerCase();

                if(ua == "mbn_app") {
                  window.location.href=cbProfileStr;
                }
            });

            $http.get("http://assc-klong-gh.azurewebsites.net/tables/post?$filter=createdAt gt datetime'" + '2017-05-28T05:03:35.400Z' + "'").success(function (respondData) {
                console.log(respondData.length);
                $scope.newPostsNumber = respondData.length;
            });
        };

        init();
    }]);
})();
