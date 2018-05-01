 $(document).ready(function() {
     if (!location.search.split("resetKey=")[1])
         document.location.href = "../login.html";

     $.validator.addMethod("pwcheck", function(value) {
         return (
             /^[A-Za-z0-9\d=!\-@._*]*$/.test(value) && // consists of only these
             /[a-z]/.test(value) && // has a lowercase letter
             /[A-Z]/.test(value) && // has a uppercase letter
             /\d/.test(value)
         ); // has a digit
     });

     $("#formForgetPwd").validate({
         rules: {
             resetPassword: {
                 minlength: 8,
                 required: true,
                 pwcheck: true
             },

             confirmResetPassword: {
                 required: true,
                 equalTo: "#resetPassword"
             }
         },

         messages: {
             resetPassword: {
                 pwcheck: "The password does not meet the criteria. Please include one uppercase letter, one lowercase letter and one digit."
             }
         },

         errorElement: "div",
         errorPlacement: function(error, element) {
             var placement = $(element).data("error");
             if (placement) {
                 $(placement).append(error);
             } else {
                 error.insertAfter(element);
             }
         }
     });

     $("#formForgetPwd").find("a").click(function() {
         var divId = $(this).attr("href");
         var visibleInput = $("input:visible");

         if ($(this).hasClass("js-btn")) {
             if (
                 $(this).text() == "prev" ||
                 (visibleInput.valid() && $(this).text().indexOf("Next") !== -1)
             ) {
                 //show current # div
                 if ($(this).is("#resetPwdBtn")) {
                     $("#loader-wrapper").show();

                     var resetKey = location.search.split("resetKey=")[1];
                     var password = $("#confirmResetPassword").val();
                     console.log(resetKey);
                     url = "https://assc-klong-gh.azurewebsites.net/api/reset_pwd";
                     $.ajax({
                         type: "POST",
                         contentType: "application/x-www-form-urlencoded",
                         data: {
                             resetKey: resetKey,
                             password: password
                         },
                         url: url,
                         success: function(responseData, textStatus, jqXHR) {
                             // $('#message_for_user').html("Information saved. Thanks for your time!");
                             $("#loader-wrapper").hide();
                             var result = JSON.parse(responseData);
                             console.log(result);
                             if (result.status == "ERR") {
                                 $("#modal p").html(result.exception);
                                 $('#modal').modal();
                                 $("#modal").modal('open');
                             } else {
                                 console.log("reset success");
                                 $("#modal p").html("Password reset successful!");
                                 $('#modal').modal({
                                     complete: function() { document.location.href = "../login.html"; }
                                 });
                                 $("#modal").modal('open');

                             }
                         },
                         error: function(jqXHR, textStatus, errorThrown) {
                             var errorMessage = "Something went wrong";
                             if (jqXHR.status === 0) {
                                 errorMessage =
                                     "Network not connected.\nPlease verify your network connection.";
                             } else if (jqXHR.status == 404) {
                                 errorMessage = "404. The requested page not found.";
                             } else if (jqXHR.status == 500) {
                                 errorMessage = "Internal Server Error [500].";
                             }
                             $("#modal p").html(result.exception);
                             $('#modal').modal();
                             $("#modal").modal('open');
                             $("#loader-wrapper").hide();
                         }
                     });
                 } else {
                     $(divId).show();
                     $(divId).siblings().hide();
                 }
             }
         } else {
             $(divId).show();
             $(divId).siblings().hide();
         }
     });
 });