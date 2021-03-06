(function() {
    'use strict';
    var app = angular.module('mbnUpdateProfile', []);



    app.controller('UpdateProfileController', ['$http', '$scope', function($http, $scope, $window) {
        if ($.session.get('secretKey') == null || undefined) {
            window.location.replace('../login.html');
        }

        $scope.userEmail = $.session.get('userEmail');
        $scope.userId = $.session.get('secretKey');



        var init = function() {
            $("#loader-wrapper").removeClass("hide");

            $http.get("http://assc-klong-gh.azurewebsites.net/tables/gh_survey?$filter=user_id eq '" + $scope.userId + "'").success(function(respondData) {
                console.log(respondData[0].signup_email);
                console.log(respondData[0].mobile);
                console.log(respondData[0].profile_photo);

                $scope.id = respondData[0].id;
                $scope.email = respondData[0].signup_email;
                $scope.mobile = respondData[0].mobile;

                if(respondData[0].profile_photo.indexOf("data:image/jpeg;base64") != -1) {
                  $scope.avatar = respondData[0].profile_photo;
                }
                else {
                  $scope.avatar = atob(respondData[0].profile_photo);
                }

                $("#loader-wrapper").addClass("hide");

            });


        };

        init();

        $scope.updateProfile = function() {
            $("#loader-wrapper").removeClass("hide");

            // $http
            //     .post(
            //         "http://assc-klong-gh.azurewebsites.net/api/update_profile", {
            //             signup_email: $scope.email,
            //             mobile: $scope.mobile,
            //             profile_photo: $scope.avatar,
            //             user_id: $scope.userId
            //         }
            //     )
            //     .

            var data = {
                signup_email: $scope.email,
                mobile: $scope.mobile,
                profile_photo: $scope.avatar,
            };
            var url = "http://assc-klong-gh.azurewebsites.net/tables/gh_survey/" + $scope.id;

            $http({
                method: "PATCH",
                url: url,
                data: angular.toJson(data)
            }).success(function(respondData) {
                $("#loader-wrapper").addClass("hide");
            });
        }


        var fileSelect = document.createElement('input'); //input it's not displayed in html, I want to trigger it form other elements
        fileSelect.type = 'file';

        if (fileSelect.disabled) { //check if browser support input type='file' and stop execution of controller
            return;
        }

        $scope.click = function() { //activate function to begin input file on click
            fileSelect.value = null;
            fileSelect.click();
        }

        fileSelect.onchange = function() { //set callback to action after choosing file
            console.log(fileSelect);
            var f = fileSelect.files[0],
                r = new FileReader();

            r.onloadend = function(e) { //callback after files finish loading
                $scope.avatar = e.target.result;
                $scope.$apply();
                //console.log($scope.data.b64.replace(/^data:image\/(png|jpg);base64,/, "")); //replace regex if you want to rip off the base 64 "header"

                //here you can send data over your server as desired
                var tempImg = new Image();
                tempImg.onload = function() {
                    var MAX_WIDTH = 647.5;
                    var MAX_HEIGHT = 647.5;
                    var tempW = tempImg.width;
                    var tempH = tempImg.height;
                    if (tempW > tempH) {
                        if (tempW > MAX_WIDTH) {
                            tempH *= MAX_WIDTH / tempW;
                            tempW = MAX_WIDTH;
                        }
                    } else {
                        if (tempH > MAX_HEIGHT) {
                            tempW *= MAX_HEIGHT / tempH;
                            tempH = MAX_HEIGHT;
                        }
                    }

                    var canvas = document.createElement('canvas');
                    canvas.width = tempW;
                    canvas.height = tempH;
                    var ctx = canvas.getContext("2d");
                    ctx.drawImage(this, 0, 0, tempW, tempH);
                    var dataURL = canvas.toDataURL("image/jpeg");
                    $scope.avatar = dataURL;
                }

            }

            r.readAsDataURL(f); //once defined all callbacks, begin reading the file
        };
    }]);


})();
