var lastScrollTop = 0; // Track the last event
var objToCheck;
var lastScrollAction = "";
var hashAdj = true;

function getOffset(el) {
    var _x = 0;
    var _y = 0;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return {
        top: _y,
        left: _x
    };
}

function localSecJump(hash) {
    //
    // DEBUGGING. Disabled when not testing!
    //
    // console.log(hash);
    // return;
    
    //
    // Check if another page needs to be loaded. If so, do nothing but to load that page and let the 'ready' function do the job. indexOf()
    // returns -1 if there is no match.
    //
    if(hash.indexOf("#") == -1) {
        // No hash but need to check if it is a cross page jump without going to a specific section.
        if(hash.indexOf(".html") == -1) {
            $('html,body').scrollTop(0);        // just # no .html

            var node = document.getElementById(hash);
            var offset = getOffset(node).top - 145; // Offset manually determined, need a switch statement for different devices.

            $("html, body").animate({
                scrollTop: offset
            });
        }
        else {
            // There is a page load but now need to check for the presence of a '/' to know how to reference the page load.
            if(hash.indexOf('/') == - 1) {
                window.location.href = "./" + hash; // load page in the current directory.
            } else {
                // alert("You are navigating to a cross-topic page. This is disabled until all content is in place.");
                window.location.href = "../" + hash;  
            }
        }
            
    }
    else {
        // There is a hash so we look for .html just to be sure.
        if(hash.indexOf(".html") != -1) {
            // There is a page load but now need to check for the presence of a '/' to know how to reference the page load.
            if(hash.indexOf('/') == - 1) {
                window.location.href = "./" + hash; // load page in the current directory.
            } else {
                // alert("You are navigating to a cross-topic page. This is disabled until all content is in place.");
                window.location.href = "../" + hash;  
            }
        }
        else {
            // # without a page. something is wrong. throw error!
            alert("Unknown situation - localSecJump() encountered: " + hash)
        }
    }
    
    
    
    
}

$(document).ready(function () {
    /*
    $(document).ontouchmove(function(event) {
        event.preventDefault();
    });
    */
    
    //
    // Sets up the minimise picture header on scroll.
    //
    if (window.location.hash.length == 0) {
        objToCheck = $("#section-title");
        $("#section-card-min").hide();
    } else {
        // Change the type of card to display.
        $("#section-card").hide();
        $("#section-card-min").show();

        // Modify CSS to add the extra 50px room for content to be in the right place.
        $("#section-content").addClass("mbn-content-offset");

        // Set where to monitor for point of switch.
        objToCheck = $("#section-content");
    }
    
    //
    // To be done last, check that the URL does not contain a hash and if it does, then we need to scroll to that section.
    //
    var locHash = window.location.hash.substring(1, window.location.hash.length);
    localSecJump(locHash);
});

$(window).scroll(function () {
    var st = objToCheck.offset().top - $(window).scrollTop();

    if (st < lastScrollTop) {
        if (parseInt(st) < 65 && lastScrollAction == "up") {
            // Change the type of card to display.
            $("#section-card").hide();
            $("#section-card-min").show();

            // Modify CSS to add the extra 50px room for content to be in the right place.
            $("#section-content").addClass("mbn-content-offset");

            // Set where to monitor for point of switch.
            objToCheck = $("#section-content");
        }

        lastScrollAction = "up";
    }

    if (st >= lastScrollTop) {
        if (parseInt(st) > 65 && lastScrollAction == "down") {
            // Reverse the card to display
            $("#section-card").show();
            $("#section-card-min").hide();

            // Modify CSS to remove the offset created as a result of swapping the display card.
            $("#section-content").removeClass("mbn-content-offset");

            // Set where to monitor for point of switch
            objToCheck = $("#section-title");
        }

        lastScrollAction = "down";
    }

    lastScrollTop = st; // Remember this as the current position

    /*
    if (Math.abs(lastScrollTop - st) > 1) {
        // Reverse the card to display
        $("#section-card").hide();
        $("#section-card-min").show();

        // Modify CSS to remove the offset created as a result of swapping the display card.
        $("#section-content").addClass("mbn-content-offset");

        // Set where to monitor for point of switch
        objToCheck = $("#section-content");
    }
    */
});
