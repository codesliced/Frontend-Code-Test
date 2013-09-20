$(document).ready(function () {

    $('li').click(function (e) {
        if ($(this).text() == "Sidebar") {
            setTimeout(function () {
                $(".sidebar").show();
            }, 3000);
        }
    });

    $("#blue").hover(function () {
        $('a', this).css("color", "green");
        $("a", ".link").css("color", "blue");
    },

    function () {
        $("a", ".link").css("color", "green");
    });
});