$(document).ready(function() {
    if ($.session.get('userEmail') == null || undefined) {
        window.location.replace('../login.html');
    } else {
        $('#signUpEmail').val($.session.get('userEmail'));
    }

    window.carer_role_value = "";

    var signUpEmail = $('#signUpEmail').val();
    var userId = $.session.get('secretKey');
    var defaultAvatar = 'data:image/png;base64,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';

    $('select').material_select();



    $('.scrollspy').scrollSpy();
    $('.datepicker').pickadate({
        selectMonths: true,
        selectYears: 15,
    });
    $('#main').siblings().hide();
    $('#main_next').addClass("disabled");
    // $('#formula_slider').ionRangeSlider({
    //     min: 0,
    //     max: 50,
    //     from: 10
    // });

    // $('#sf_slider').ionRangeSlider({
    //     min: 50,
    //     max: 100,
    //     from: 55
    // });



    $.validator.addMethod("postCodeCheck", function(value) {
        return /^(0[289][0-9]{2})|([1345689][0-9]{3})|(2[0-8][0-9]{2})|(290[0-9])|(291[0-4])|(7[0-4][0-9]{2})|(7[8-9][0-9]{2})$/.test(value) // AU postcode validation
    });

    $.validator.addMethod("mobileNumberCheck", function(value) {
        return /^\({0,1}((0|\+61)(2|4|3|7|8)){0,1}\){0,1}(\ |-){0,1}[0-9]{2}(\ |-){0,1}[0-9]{2}(\ |-){0,1}[0-9]{1}(\ |-){0,1}[0-9]{3}$/.test(value) // AU postcode validation
    });

    $.validator.addMethod("greaterThanToday",
        function(value) {

            if (!/Invalid|NaN/.test(new Date(value))) {
                return new Date(value) > new Date();
            }
        });

    $.validator.addMethod("lessThanToday",
        function(value) {

            if (!/Invalid|NaN/.test(new Date(value))) {
                return new Date(value) <= new Date();
            }
        });


    $('#formValidate').validate({
        rules: {
            baby_due_date: {
                required: true,
                greaterThanToday: true,
            },
            pregnant_mum_name: {
                required: true,
            },
            baby_first_name: {
                required: true,
            },
            baby_gender: {
                required: true,
            },
            baby_dob: {
                required: true,
                lessThanToday: true,
            },
            carer_name: {
                required: true,
            },
            feeding_method: {
                required: true,
            },
            //if(feeding_method is formula/mixed) then add formula_age
            sf_flag: {
                required: true,
            },
            //if(sf_flag is true) then add sf_age
            sf_age: {
                required: true,
            },
            postcode: {
                required: true,
                digits: true,
                postCodeCheck: true,
                minlength: 4,
                maxlength: 4,
            },

            carer_age: {
                required: true,
            },

            language: {
                required: true,
            },

            other_language: {
                required: true,
            },

            carer_country: {
                required: true,
            },

            other_country: {
                required: true,
            },

            from_where: {
                required: true,
            },

            other_from_where: {
                required: true,
            },

            email: {
                required: true,
                email: true,
            },

            mobile: {
                // required: true,
                // digits: true,
                // mobileNumberCheck: true,
                // minlength: 10,
                // maxlength: 10,
            },

            formula_age: {
                required: true,
            },

            health_practitioner_role: {
                required: true,
            },

            other_health_practitioner_role: {
                required: true,
            },

            health_practitioner_postcode: {
                required: true,
                digits: true,
                postCodeCheck: true,
                minlength: 4,
                maxlength: 4,
            },

            health_practitioner_organisation: {
                required: true,
            },



        },
        //For custom messages
        messages: {
            baby_due_date: {
                greaterThanToday: "Must be a date greater than today",
            },

            baby_dob: {
                lessThanToday: "Must be a date no later than today",
            },

            baby_first_name: {
                required: "Enter a baby name",
            },
            carer_name: {
                required: "Enter your name",
            },
            health_practitioner_postcode: {
                postCodeCheck: "Please input a valid Australian postcode",
                minlength: "Please input a valid Australian postcode",
                maxlength: "Please input a valid Australian postcode",
            },
            postcode: {
                postCodeCheck: "Please input a valid Australian postcode",
                minlength: "Please input a valid Australian postcode",
                maxlength: "Please input a valid Australian postcode",

            },
            mobile: {
                mobileNumberCheck: "Please input a valid Australian mobile number",
                minlength: "Please input a valid Australian mobile number",
                maxlength: "Please input a valid Australian mobile number",
            },
        },
        errorElement: 'div',
        errorPlacement: function(error, element) {
            var placement = $(element).data('error');
            if (placement) {
                $(placement).append(error)
            } else {
                error.insertAfter(element);
            }
        }
    });

    $('#carer_role').change(function() {
        var anchor;
        role = this.value;
        window.carer_role_value = this.value;
        if (role == "mum" || role == "dad" || role == "grandparent" || role == "other_carer") anchor = "#baby_info1";
        else if (role == "health_practitioner" || role == "researcher" || role == "student") anchor = "#health_practitioner";
        else anchor = "#" + role;
        $('#main_next').attr("href", anchor);
        if (role == "mum" || role == "dad") {
            $('#sf_dropdown option[value="na"]').remove();
            $('#baby_name_label').html("What is your baby's first name?");
            $('#baby_dob_label').html("What is your baby's Date of Birth?");
            $('#baby_gender_label').html("What is your baby's gender?");
            $('#feeding_method_label').html("What is your baby's current feeding method?");
            $('#solid_foods_label').html("Has your baby started eating solid foods?");
        } else if (role == "grandparent" || role == "other_carer") {
            $('#formula_age').addClass('hide');
            $('#sf_age').addClass('hide');
            if ($("#sf_dropdown option[value='na']").length == 0) $("#sf_dropdown").append(new Option("I don't know", "na"));
            $('#baby_name_label').html("What is the name of the baby in your care?");
            $('#baby_dob_label').html("What is the Date of Birth of the baby in your care?");
            $('#baby_gender_label').html("What is the gender of the baby in your care?");
            $('#feeding_method_label').html("What is the current feeding method of the baby in your care?");
            $('#solid_foods_label').html("Has the baby in your care been introduced to solid food?");
        }
        $('#sf_dropdown').material_select();
        if (this.value == undefined) $('#main_next').addClass("disabled");
        else $('#main_next').removeClass("disabled");
    });


    $('#hp_carer_role').change(function() {
        var anchor;
        role = this.value;
        if (role == "pregnant") anchor = "#pregnant"
        else anchor = "#baby_info1"
        $('#hp2').attr("href", anchor);
    });


    $('.datepicker').change(
        function() {
            console.log($(this));
            $(this).valid();
        })

    $('select[name]').change(function() {
        validSelect($(this));
    })


    $('.js-btn').click(function() {
        var visibleInput = $('input:visible').add('.browser-default');
        var currentDropdown = $('div:visible .survey-text').not('.hide').find('select[name]');



        if (($(this).text().indexOf("Back") >= 0) || (validateElement(visibleInput) && validSelect(currentDropdown) && ($(this).text().indexOf("Next") >= 0))) {
            if (window.carer_role_value === "health_practitioner") {
                if ($(this).attr("id") === "pregnant_btn" || $(this).attr("id") === "baby_info1_btn") {
                    $(this).attr("href", "#health_practitioner2");
                }
            } else {
                if ($(this).attr("id") === "pregnant_btn" || $(this).attr("id") === "baby_info1_btn") {
                    $(this).attr("href", "#main");
                }
            }


            var divId = $(this).attr('href');
            //show current # div
            $(divId).show();
            $(divId).siblings().hide();

            //initialize formula wheel
            if (divId == "#baby_info2") {
                $('#formula_slider')
                    .find('option')
                    .remove();
                var dob_date = new Date($('#dob_datepicker').val());
                var now_date = new Date();
                var weeks = Math.ceil((now_date - dob_date) / (1000 * 60 * 60 * 24 * 7));

                $('#formula_slider').append($("<option disabled selected></option>")
                    .attr("value", ""));
                for (i = 1; i <= weeks; i++) {
                    if (i === 1) {
                        $('#formula_slider').append($("<option></option>")
                            .attr("value", i)
                            .text(i + " week"));
                    } else {
                        $('#formula_slider').append($("<option></option>")
                            .attr("value", i)
                            .text(i + "   weeks"));
                    }
                }
                $('#formula_slider').material_select();
            }

            //initialize solid food wheel
            if (divId == "#baby_info3") {
                $('#sf_slider')
                    .find('option')
                    .remove();
                var dob_date = new Date($('#dob_datepicker').val());
                var now_date = new Date();
                var weeks = Math.ceil((now_date - dob_date) / (1000 * 60 * 60 * 24 * 7));

                $('#sf_slider').append($("<option disabled selected></option>")
                    .attr("value", ""));
                for (i = 1; i <= weeks; i++) {
                    if (i === 1) {
                        $('#sf_slider').append($("<option></option>")
                            .attr("value", i)
                            .text(i + " week"));
                    } else {
                        $('#sf_slider').append($("<option></option>")
                            .attr("value", i)
                            .text(i + "   weeks"));
                    }
                }
                $('#sf_slider').material_select();
            }

            //when divId== "#thanks" submit form
            $('.preloader-wrapper').removeClass('hide');
            if (divId == "#thanks") {
                var postData = $('form').serializeToJSON();
                postData.signup_email = signUpEmail;
                postData.user_id = userId;
                postData.profile_photo = btoa(defaultAvatar);
                //console.log(postData);
                url = "https://assc-klong-gh.azurewebsites.net/tables/gh_survey";
                //post survey data to survey table
                $.ajax({
                    type: "post",
                    url: url,
                    data: JSON.stringify(postData),
                    contentType: "application/json",
                    dataType: "json",
                    success: function(responseData, textStatus, jqXHR) {
                        $('#message_for_user').html("Information saved. Thanks for your time!");
                        //update login table and set isSurveyDone to 1
                        var postData = { email: signUpEmail };
                        console.log(postData);
                        url = "https://assc-klong-gh.azurewebsites.net/api/mark_survey_done";
                        $.ajax({
                            type: "post",
                            url: url,
                            data: JSON.stringify(postData),
                            contentType: "application/json",
                            dataType: "json",
                            success: function(responseData, textStatus, jqXHR) {
                                window.location.replace('../forum.html');
                                $('.preloader-wrapper').addClass('hide');
                            },
                            error: function(jqXHR, textStatus, errorThrown) {
                                //enter here means survey info saved but not set isSurveyDone true.
                                var errorMessage = "Something went wrong, tell admin";
                                if (jqXHR.status === 0) {
                                    errorMessage = 'Network not connected.\nPlease verify your network connection.';
                                } else if (jqXHR.status == 404) {
                                    errorMessage = '404. The requested page not found.';
                                } else if (jqXHR.status == 500) {
                                    errorMessage = 'Internal Server Error [500].';
                                }
                                $('#message_for_user').html(errorMessage);
                                $('.preloader-wrapper').addClass('hide');
                            }
                        });
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        var errorMessage = "Something went wrong";
                        if (jqXHR.status === 0) {
                            errorMessage = 'Network not connected.\nPlease verify your network connection.';
                        } else if (jqXHR.status == 404) {
                            errorMessage = '404. The requested page not found.';
                        } else if (jqXHR.status == 500) {
                            errorMessage = 'Internal Server Error [500].';
                        }
                        $('#message_for_user').html(errorMessage);
                        $('.preloader-wrapper').addClass('hide');
                    }
                });
            }
        }
        validSelect(currentDropdown);
    });

    $('#phone').change(function() {
        if ($('#phone').val() != "") {
            $('#phone').rules('add', { digits: true, mobileNumberCheck: true, minlength: 10, maxlength: 10 });
        } else {
            var settings = $('form').validate().settings;
            delete settings.rules.mobile;
        }

    });

    $('#formula_slider').change(function() {
        $('#formula_label').html(this.value);
    });
    $('#sf_slider').change(function() {
        $('#sf_label').html(this.value);
    });
    $('#feeding_method').change(function() {
        var feedingMethod = this.value;
        if (role == "mum" || role == "dad") {
            if (feedingMethod == "formula" || feedingMethod == "mixed") $('#formula_age').removeClass('hide');
            else $('#formula_age').addClass('hide');
        }
        $("#solid_foods").show();
    });
    $('#sf_dropdown').change(function() {
        if (role == "mum" || role == "dad") {
            if (this.value == "yes") $('#sf_age').removeClass('hide');
            else $('#sf_age').addClass('hide');
        }
    });
    $('#carer_country').change(function() {
        console.log(this.value);
        if (this.value == "other") {
            $('#other_country').removeClass('hide');
        } else {
            $('#other_country').addClass('hide');
        }
    });
    $('#carer_language').change(function() {
        console.log(this.value);
        if (this.value == "other") {
            $('#other_language').removeClass('hide');
        } else {
            $('#other_language').addClass('hide');
        }
    });
    $('#source').change(function() {
        console.log(this.value);
        if (this.value == "other") {
            $('#other_source').removeClass('hide');
        } else {
            $('#other_source').addClass('hide');
        }
    });
    $('#hp_role').change(function() {
        console.log(this.value);
        if (this.value == "other") {
            $('#other_hp').removeClass('hide');
        } else {
            $('#other_hp').addClass('hide');
        }
    });

    function validateElement(element) {
        element.each(function() {
            if (!$(this).valid()) {
                if ($(this).nextAll('h5').first().is('.empty'))
                    $(this).nextAll('h5').first().remove();
            }
        });
        return element.valid();
    }

    function validSelect(element) {
        var flag = true;

        element.each(function() {
            //console.log($(this));
            console.log($(this).val());
            if ($(this).val() == null) {
                console.log("enter value null");
                //$(this).closest('div').next().removeClass("hide");
                console.log($(this).closest('.col').find('input.select-dropdown'));
                $(this).closest('.col').find('input.select-dropdown').removeClass('valid').addClass('error');
                flag = false;
                if ($(this).parent().nextAll('h5').first().is('.empty'))
                    $(this).parent().nextAll('h5').first().remove();
            } else {
                console.log("enter has value");
                $(this).closest('.col').find('input.select-dropdown').removeClass('error').addClass('valid');
                //$(this).closest('div').next().addClass("hide");
            }

        });
        return flag;
    }
});

//TODO: write common method to use ajax calls