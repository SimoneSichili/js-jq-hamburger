// Mostrare il menu
$(".header-right > a").click(
    function () {
        $(".hamburger-menu").show(500)
    }
);

// Chiudere il menu
$(".hamburger-menu > a").click(
    function () {
        $(".hamburger-menu").hide(500)
    }
);