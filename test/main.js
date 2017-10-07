$('li a').on('click', function () {

    var scrollAnchor = $(this).attr('data-scroll'),
        scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 28;

    $('body,html').animate({
        scrollTop: scrollPoint
    }, 1000);

    return false;

})

$(window).scroll(function () {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
        $('li').addClass('fixed');
        $('.wrapper section').each(function (i) {
            if ($(this).position().top <= windscroll - -120) {
                $('li a span.active').removeClass('active');
                $('li a span').eq(i).addClass('active');
                $('li a.active').removeClass('active');
                $('li a').eq(i).addClass('active');
            }
        });

    } else {
        $('li').removeClass('fixed');
        $('li a span.active').removeClass('active');
        $('li a span:first').addClass('active');
        $('li a.active').removeClass('active');
        $('li a:first').addClass('active');
    }

}).scroll();

var myIndex = 0;
Carousel();

function Carousel() {
    var i;
    var x = $(".mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(Carousel, 6000);
}

var mySecondIndex = 0;
secondCarousel();

function secondCarousel() {
    var i;
    var x = $(".mySlidess");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    mySecondIndex++;
    if (mySecondIndex > x.length) { mySecondIndex = 1 }
    x[mySecondIndex - 1].style.display = "block";
    setTimeout(secondCarousel, 6000);
}
$("li a").css({ "color": "white", "font-weight": "bold" });
$(".services img").css({ "margin-top": "80px", "max-width": "100%" });
$("#serviceIcons .row a").css({ "cursor": "pointer"});


$("#showMore").click(function () {
    $("#info").slideDown(1000);
    $(this).hide();
    $("#lessMore").show();
})

$("#lessMore").click(function () {
    $("#info").slideUp(1000);
    $(this).hide();
    $("#showMore").show();
})



var items = $(".service-info li");

items.on("click", function () {
    
    $(this).find("p").slideToggle(1000, function () {
        $("#button").text($(this).is(':visible') ? "Show Less..." : "Show More...");
    });
});

$('.top').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});