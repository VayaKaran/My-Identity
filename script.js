$(document).ready(function () {
    $(".animated-btn").on("mouseenter", function () {
        $(this).animate({
            opacity: 1
        }, 200);
    });

    $(".animated-btn").on("mouseleave", function () {
        $(this).animate({
            opacity: 1
        }, 200);
    });
});