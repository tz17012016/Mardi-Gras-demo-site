$(document).ready(function() {
    $(".hideA1").hide();
    $(".hideA2").hide();
    $(".hideA3").hide();
    $(".hideA4").hide();
    $(".hideA5").hide();
    $(".hideA6").hide();
    $(".hideA7").hide();
    $(".hideA8").hide();

    $(".read-more1").click(function(e) {
        e.preventDefault();
        $(this)
            .text(function(i, t) {
                return t == "close" ? "read-more" : "close";
            })
            .prev(".infoAfect1")
            .slideToggle();
        $(".hideA1").slideToggle();
    });
    $(".read-more2").click(function(e) {
        e.preventDefault();
        $(this)
            .text(function(i, t) {
                return t == "close" ? "read-more" : "close";
            })
            .prev(".infoAfect2")
            .slideToggle();
        $(".hideA2").slideToggle();
    });
    $(".read-more3").click(function(e) {
        e.preventDefault();
        $(this)
            .text(function(i, t) {
                return t == "close" ? "read-more" : "close";
            })
            .prev(".infoAfect3")
            .slideToggle();
        $(".hideA3").slideToggle();
    });
    $(".read-more4").click(function(e) {
        e.preventDefault();
        $(this)
            .text(function(i, t) {
                return t == "close" ? "read-more" : "close";
            })
            .prev(".infoAfect4")
            .slideToggle();
        $(".hideA4").slideToggle();
    });
    $(".read-more5").click(function(e) {
        e.preventDefault();
        $(this)
            .text(function(i, t) {
                return t == "close" ? "read-more" : "close";
            })
            .prev(".infoAfect5")
            .slideToggle();
        $(".hideA5").slideToggle();
    });
    $(".read-more6").click(function(e) {
        e.preventDefault();
        $(this)
            .text(function(i, t) {
                return t == "close" ? "read-more" : "close";
            })
            .prev(".infoAfect6")
            .slideToggle();
        $(".hideA6").slideToggle();
    });
    $(".read-more7").click(function(e) {
        e.preventDefault();
        $(this)
            .text(function(i, t) {
                return t == "close" ? "read-more" : "close";
            })
            .prev(".infoAfect7")
            .slideToggle();
        $(".hideA7").slideToggle();
    });
    $(".read-more8").click(function(e) {
        e.preventDefault();
        $(this)
            .text(function(i, t) {
                return t == "close" ? "read-more" : "close";
            })
            .prev(".infoAfect8")
            .slideToggle();
        $(".hideA8").slideToggle();
    });
});

document.querySelector("#btn-1").addEventListener("click", () => {
    window.open(
        "https://www.marriott.com/hotels/travel/msyis-sheraton-new-orleans-hotel/",
        "_blank"
    );
});
document.querySelector("#btn-2").addEventListener("click", () => {
    window.open("https://walk-ons.com/", "_blank");
});
document.querySelector("#btn-3").addEventListener("click", () => {
    window.open("https://www.acehotel.com/neworleans/", "_blank");
});
document.querySelector("#btn-4").addEventListener("click", () => {
    window.open("https://www.ritzcarlton.com/en/hotels/new-orleans", "_blank");
});
document.querySelector("#btn-5").addEventListener("click", () => {
    window.open("https://www.premiumparking.com/P402", "_blank");
});
document.querySelector("#btn-6").addEventListener("click", () => {
    window.open("https://www.lcm.org/", "_blank");
});
document.querySelector("#btn-7").addEventListener("click", () => {
    window.open("http://www.museumofdeath.net/", "_blank");
});
document.querySelector("#btn-8").addEventListener("click", () => {
    window.open("https://thehauntedmuseum.com/", "_blank");
});

///