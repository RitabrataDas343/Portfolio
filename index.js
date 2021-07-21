var width = $(window).width();
window.onscroll = function() {
    if ((width >= 1000)) {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            $("#header").css("background", "#fff");
            $("#header").css("color", "#000");
            $("#header").css("box-shadow", "0px 0px 20px rgba(0,0,0,0.09)");
            $("#header").css("padding", "4vh 4vw");
            $("#navigation a").hover(function() {
                $(this).css("border-bottom", "2px solid rgb(255, 44, 90)");
            }, function() {
                $(this).css("border-bottom", "2px solid transparent");
            });
        } else {
            $("#header").css("background", "transparent");
            $("#header").css("color", "#fff");
            $("#header").css("box-shadow", "0px 0px 0px rgba(0,0,0,0)");
            $("#header").css("padding", "6vh 4vw");
            $("#navigation a").hover(function() {
                $(this).css("border-bottom", "2px solid #fff");
            }, function() {
                $(this).css("border-bottom", "2px solid transparent");
            });
        }
    }
}

function magnify(imglink) {
    $("#img_here").css("background", `url('${imglink}') center center`);
    $("#magnify").css("display", "flex");
    $("#magnify").addClass("animated fadeIn");
    setTimeout(function() {
        $("#magnify").removeClass("animated fadeIn");
    }, 800);
}

function closemagnify() {
    $("#magnify").addClass("animated fadeOut");
    setTimeout(function() {
        $("#magnify").css("display", "none");
        $("#magnify").removeClass("animated fadeOut");
        $("#img_here").css("background", `url('') center center`);
    }, 800);
}

setTimeout(function() {
    $("#loading").addClass("animated fadeOut");
    setTimeout(function() {
        $("#loading").removeClass("animated fadeOut");
        $("#loading").css("display", "none");
    }, 800);
}, 1650);

$(document).ready(function() {
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('body,html').animate({
                scrollTop: $(hash).offset().top
            }, 1800, function() {
                window.location.hash = hash;
            });
        }
    });
});

$.fn.jQuerySimpleCounter = function(options) {
    var settings = $.extend({
        start: 0,
        end: 100,
        easing: 'swing',
        duration: 400,
        complete: ''
    }, options);

    var thisElement = $(this);

    $({ count: settings.start }).animate({ count: settings.end }, {
        duration: settings.duration,
        easing: settings.easing,
        step: function() {
            var mathCount = Math.ceil(this.count);
            thisElement.text(mathCount);
        },
        complete: settings.complete
    });
};

$('#number1').jQuerySimpleCounter({ end: 36, duration: 8000 });
$('#number2').jQuerySimpleCounter({ end: 23, duration: 8000 });
$('#number3').jQuerySimpleCounter({ end: 42, duration: 8000 });
$('#number4').jQuerySimpleCounter({ end: 1054, duration: 8000 });

$(document).ready(function() {
    $('.list').click(function() {
        $(this).find('ul').toggleClass('open');
    });
});