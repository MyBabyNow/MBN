(function() {
    'use strict';
    var app = angular.module('ghForum', ['forum-directives', 'igTruncate', 'ngSanitize', 'infinite-scroll', 'ngStorage', 'cp.ng.fix-image-orientation', 'angular-inview', 'ui.materialize', 'ngFileUpload', '720kb.socialshare']);



    app.controller('ForumController', ['$http', '$scope', 'postPagination', '$sce', 'pollingService', function($http, $scope, postPagination, pollingService, $window) {
        $scope.hasNewPost = pollingService.data;
        if ($.session.get('secretKey') == null || undefined) {
            window.location.replace('../login.html');
        }

        $scope.userEmail = $.session.get('userEmail');
        $scope.userId = $.session.get('secretKey');
        $scope.babyName = $.session.get('babyName');

        $scope.posts = [];

        $scope.showSubmitFlag = false; //show submit area flag

        $scope.postPagination = new postPagination();

        $scope.$on('allPosts', function(event, arg) {
            $scope.postPagination = new postPagination();
            $scope.postPagination.nextPage();
        });






        // $scope.lineInView = function(index, inview, inviewpart, event) {
        //     var inViewReport = inview ? '<strong>enters</strong>' : '<strong>exit</strong>';

        //     if (typeof(inviewpart) != 'undefined') {
        //         inViewReport = '<strong>' + inviewpart + '</strong> part ' + inViewReport;
        //     }

        //     console.log(event);
        //     //console.log(inviewpart);


        //         // var url = "https://assc-klong-gh.azurewebsites.net/tables/post/" + $scope.postPagination.posts[index].id;
        //         // $http.get(url).success(function(data) {
        //         //     $scope.postPagination.posts[index] = data;
        //         //     console.log(data);
        //         //     return false;
        //         // });


        // }

        $scope.hideHasNewPost = function() {
            $(".mbn-post-notice").addClass("hide");
            $scope.postPagination = new postPagination();
            $scope.postPagination.nextPage();
        }

        $scope.update = function(post) {
            var url = "https://assc-klong-gh.azurewebsites.net/tables/post/" + post.id;
            //var posts= $scope.postPagination.posts;
            $http.get(url).success(function(data) {
                $scope.postPagination.posts[post.id] = data;
                // posts[post.id]=post;
                // $scope.postPagination.posts=posts;
                console.log(data.title + "      " + data.likes);
                // for(var i=0;i<$scope.postPagination.posts.length;i++)
                // {
                //     if($scope.postPagination.posts[i].id==post.id)
                //         $scope.postPagination.posts[i]=data;
                // }
            });



        }

        $scope.isSubmitShown = function() {
            return $scope.showSubmitFlag;
        }

        $scope.toggleSubmit = function() {
            if ($scope.showSubmitFlag == false) {
                $scope.showSubmitFlag = true;
            } else {
                $scope.showSubmitFlag = false;
            }

        };

        $scope.goProfilePage = function() {
            window.location = './more/update-mum.html';
        };


        var init = function() {
            $http.get("http://assc-klong-gh.azurewebsites.net/api/get_profile?userId=" + $scope.userId).success(function(respondData) {
                console.log(respondData.profile_photo);

                $scope.avatar = atob(respondData.profile_photo);
                //$scope.babyName = respondData.baby_first_name == '' ? 'My Baby' : respondData.baby_first_name;
                $scope.userName = respondData.user_name;

            });


        };

        init();
    }]);

    //postPagination constructor function to encapsulate HTTP and pagination logic
    app.factory('postPagination', function($http) {
        var postPagination = function() {
            this.posts = [];
            this.busy = false;
            this.offset = 0;
            this.next = 5;
        };

        postPagination.prototype.nextPage = function() {
            if (this.busy) return;
            this.busy = true;

            var url = "https://assc-klong-gh.azurewebsites.net/api/next_page?offset=" + this.offset + "&next=" + this.next;
            if (this.offset == 0 || this.offset <= this.posts.length) {
                $http.get(url).success(function(data) {
                    var posts = data;
                    for (var i = 0; i < posts.length; i++) {
                        this.posts.push(posts[i]);
                    }
                    this.offset += this.next;
                    this.busy = false;
                }.bind(this));
            } else {
                this.busy = false;
            }
        };

        return postPagination;
    });


    app.factory("pollingService", function($http, $timeout) {
        var createdAt = "";
        var hasNewPost = false;
        var poller = function() {
            $http.get('https://assc-klong-gh.azurewebsites.net/tables/post?$orderby=createdAt desc&$top=1').then(function(r) {
                if (createdAt == "") {
                    createdAt = r.data[0].createdAt;
                } else {
                    if (Date.parse(createdAt) < Date.parse(r.data[0].createdAt) && r.data[0].userId !== $.session.get('secretKey')) {
                        hasNewPost = true;
                        $(".mbn-post-notice").removeClass("hide")
                    }

                    createdAt = r.data[0].createdAt;
                }
                $timeout(poller, 50000);
            });

        };
        poller();

        return {
            data: hasNewPost
        };

    });




    app.controller('PostFormController', ['$rootScope', '$scope', '$http', 'Upload', function($rootScope, $scope, $http, Upload) {
        $scope.post = {}; //init variable
        $scope.realImage = null;

        $scope.click = function() { //default function, to be override if browser supports input type='file'
            $scope.data.alert = "Your browser doesn't support HTML5 input type='File'"
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

                //console.log($scope.data.b64.replace(/^data:image\/(png|jpg);base64,/, "")); //replace regex if you want to rip off the base 64 "header"

                //here you can send data over your server as desired
                var tempImg = new Image();
                tempImg.src = e.target.result;
                tempImg.onload = function() {
                        var MAX_WIDTH = 800;
                        var MAX_HEIGHT = 800;
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
                        $scope.post.image = dataURL;
                        $scope.$apply();
                    }
                    //$scope.post.image = tempImg;

            }

            r.readAsDataURL(f); //once defined all callbacks, begin reading the file
        };

        $scope.addPost = function() {
            $scope.post.userId = $.session.get('secretKey');

            $scope.postPagination.busy = true;

            $http.post(
                'https://assc-klong-gh.azurewebsites.net/tables/post',
                $scope.post
            ).success(function() {
                $http.get('https://assc-klong-gh.azurewebsites.net/tables/post').success(function(data) {
                    var posts = data.reverse();
                    $rootScope.$broadcast('allPosts', posts);
                    $scope.post = {};
                    $scope.toggleSubmit();
                });


            });
        };


        $scope.cancelPost = function() {
            $scope.toggleSubmit();
            $scope.post = {};

        };


    }]);
})();